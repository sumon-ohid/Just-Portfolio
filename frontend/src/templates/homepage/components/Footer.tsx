import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="#">
        sumon
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: { xs: 4, sm: 2 },
        py: { xs: 2, sm: 2 },
        fontSize: "0.25rem",
        // justifyContent: "space-between",
        textAlign: { sm: "center", md: "left" },
        m: 1.5,
        justifyContent: "center",
      }}
    >
      <Copyright />
    </Card>
  );
}
