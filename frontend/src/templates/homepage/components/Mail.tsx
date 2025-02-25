import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Tooltip from "@mui/material/Tooltip";

export default function Mail() {
  const handleMailClick = () => {
    window.location.href = "mailto:oahid.sumon@gmail.com";
  };

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Tooltip title="oahid.sumon@gmail.com" placement="left">
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: "absolute", bottom: 0, right: 16 }}
          icon={<MailOutlineIcon />}
          onClick={handleMailClick}
        ></SpeedDial>
      </Tooltip>
    </Box>
  );
}
