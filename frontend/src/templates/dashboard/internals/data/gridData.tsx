import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import {
  GridCellParams,
  GridRowsProp,
  GridColDef,
  DataGrid,
} from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: "flex", alignItems: "left", height: "100%" }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={["hsl(210, 98%, 42%)"]}
        xAxis={{
          scaleType: "band",
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status: "Sent" | "Offline") {
  const colors: { [index: string]: "success" | "default" } = {
    Sent: "success",
    Offline: "default",
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>
) {
  if (params.value == null) {
    return "";
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: "24px",
        height: "24px",
        fontSize: "0.85rem",
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  {
    field: "from",
    headerName: "Sender",
    headerAlign: "left",
    align: "left",
    flex: 1.2,
    minWidth: 150,
  },
  {
    field: "to",
    headerName: "Receiver",
    headerAlign: "left",
    align: "left",
    flex: 1.5,
    minWidth: 150,
  },
  {
    field: "subject",
    headerName: "Subject",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "content",
    headerName: "Content",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "status",
    headerName: "Status",
    flex: .4,
    minWidth: 60,
    renderCell: (params) => renderStatus(params.value as any),
  },
  {
    field: "dateSent",
    headerName: "Date Sent",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 180,
  },
];

export const EmailGrid = () => {
  const [rows, setRows] = React.useState<GridRowsProp>([]);

  React.useEffect(() => {
    const fetchEmails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in local storage");
          return;
        }
        const response = await axios.get(`${apiBaseUrl}/api/emails/get-emails`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const emails = response.data as any[];

        const formattedEmails = emails.map((email: any, index: number) => ({
          id: index + 1,
          from: email.sender,
          subject: email.subject,
          status: "Sent", // Adjust as needed
          content: email.bodyPreview,
          to: email.receiver,
          dateSent: new Date(email.timeSent).toLocaleString(),
        }));

        setRows(formattedEmails);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
