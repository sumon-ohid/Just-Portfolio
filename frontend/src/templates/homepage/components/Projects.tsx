import * as React from "react";
import Box from "@mui/material/Box";
import { Alert, Button, Card, Typography } from "@mui/material";
import fourtytwolight from "../../../assets/42light.jpg";
import fourtytwodark from "../../../assets/42dark.jpg";
import theme from "../../../theme";
import { fontFamily, Stack } from "@mui/system";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = React.useState(
    localStorage.getItem("mui-mode") === "dark"
  );

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem("mui-mode") === "dark");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const fourtytwo = fourtytwodark;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          maxWidth: 500,
          p: 1,
          border: 1,
          borderColor: "divider",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          Projects
        </Typography>
      </Box>
      <Card
        sx={{
          width: "80%",
          maxWidth: 500,
          mt: 4,
          p: 1,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        variant="outlined"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box
            component="img"
            src="https://replai.tech/assets/logo_light-CNUfdC-4.png"
            alt="42 Vienna Coding School"
            sx={{ width: 150, height: 60, borderRadius: 1, mt: 2, cursor: "pointer" }}
            onClick={() => {
              window.open("https://replai.tech/");
            }}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 4.6, fontFamily: "Ephesis", fontSize: 20 }}
          >
            <strong>Ai email agent</strong>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 2,
            mt: -2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 5,
              mt: 1,
              backgroundColor: "background.paper",
              flexDirection: "row",
              pr: 1,
              pl: 1,
            }}
          >
            <Typography variant="body2" align="center" sx={{ fontSize: 12 }}>
              February 2025
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 5,
              mt: 1,
              backgroundColor: "background.paper",
              flexDirection: "row",
              pr: 1,
              pl: 1,
            }}
          >
            <Typography variant="body2" align="center" sx={{ fontSize: 12 }}>
              ongoing
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            gap: 2,
            p: 2,
          }}
        >
          <Typography variant="body2" align="center" sx={{ fontSize: 12 }}>
            <strong>Replai</strong> is a platform that helps user to automate
            their email. Small businesses also can use it to automate their
            customer service. The project aims to check emails every minute and
            if any new email is found, it will be processed by the AI model and
            the response will be sent to the user. The AI model can be trained
            by the user to improve the accuracy of the response. Replai provides
            a user-friendly interface manage data, view emails, and train the AI
            model etc. The project is developed using MERN stack.
          </Typography>
        </Box>
        <Typography variant="body1" align="center" sx={{ fontWeight: "bold" }}>
          Tech Stack
        </Typography>
        <Stack spacing={1} direction="row" sx={{ mt: 1 }}>
          <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
            alt="react"
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mt: 1,
              flexDirection: "row",
              height: 50,
              width: 50,
            }}
          />
          <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
            alt="typescript"
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mt: 1,
              flexDirection: "row",
              height: 50,
              width: 50,
            }}
          />
          <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
            alt="nodejs"
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mt: 1,
              flexDirection: "row",
              height: 50,
              width: 50,
            }}
          />
          <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
            alt="mongodb"
            sx={{
              display: "flex",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mt: 1,
              flexDirection: "row",
              height: 50,
              width: 50,
            }}
          />
        </Stack>
        <Card sx={{ p: 1.5, fontSize: 12, width: "85%", mt: 2 }}>
            <strong>My Role:</strong> I'm working as a full-stack developer in
            this project. I'm responsible for the backend and frontend
            development. I never used some of this tech stack before, so I had to learn
            it from scratch. I also had to learn how to use the Gmail API to
            fetch emails and send responses. But I'm happy with the result. The
            project is still ongoing and I'm looking forward to seeing the final
            product.
        </Card>
        <Button variant="contained" sx={{ mt: 2, mb: 2 }} href="https://replai.tech/">
          View Project
        </Button>
      </Card>
      {/* <Stack spacing={1} direction="row" sx={{ mt: 2 }}>
        <Card sx={{ width: "100%", maxWidth: 600, mt: 2, p: 1 }} variant="outlined">
            <Typography variant="h6" align="center">
              More projects coming soon...
            </Typography>
        </Card>
      </Stack> */}
    </Box>
  );
}
