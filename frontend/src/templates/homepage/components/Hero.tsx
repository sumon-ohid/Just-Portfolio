import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import programmer from "../../../assets/avatar.png";
import Social from "./Social";

export default function Hero() {
  const isDarkMode = localStorage.getItem("mui-mode") === "dark";

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",

        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
        {/* <Box 
          component="img"
          src={programmer}
          alt="Programmer"
          sx={{ width: 100, height: 120, borderRadius: 1, display: "block", margin: "auto", justifyContent: "center", alignItems: "center", alignContent: "center" }}
          /> */}
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Hi,&nbsp;I'm&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Sumon
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            I like to build things.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              width: {
                xs: "100%",
                sm: "350px",
                alignItems: "center",
                justifyContent: "center",
              },
              mt: 5,
            }}
          >
          </Stack>
          <Social />
        </Stack>
      </Container>
    </Box>
  );
}
