import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import SitemarkIcon from "./SitemarkIcon";
import Card from "@mui/material/Card";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="#">
        replai.tech
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
      {/* <Link color="text.secondary" variant="body2" href="#">
        Privacy Policy
      </Link>
      <Link color="text.secondary" variant="body2" href="#">
        Terms of Service
      </Link> */}
      <Copyright />
    </Card>
  );
}
