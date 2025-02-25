import * as React from "react";
import Box from "@mui/material/Box";
import { Alert, Button, Card, Typography } from "@mui/material";
import { fontFamily, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import Replai from "../../../assets/logo.png" 


export function ProjectList() {
  return (
<div className="relative group inline-block">
  <div
    className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 14"
      height="25"
      width="25"
    >
      <path
        fill="#FFA000"
        d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
      ></path>
      <path
        fill="#FFCA28"
        d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
      ></path>
    </svg>
    <p>Project Structure</p>
  </div>

  <div
    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
  >
    <ul className="p-4 space-y-1">
      <li className="py-1">📁 src</li>
      <li className="pl-4 py-1">📁 app</li>
      <li className="pl-8 py-1">📄 layout.js</li>
      <li className="pl-8 py-1">📄 page.js</li>
      <li className="pl-4 py-1">📁 components</li>
      <li className="pl-8 py-1">📄 header.js</li>
      <li className="pl-8 py-1">📄 footer.js</li>
      <li className="pl-4 py-1">📁 styles</li>
      <li className="pl-8 py-1">📄 globals.css</li>
    </ul>
  </div>
</div>

  );
}

export default function Projects() {

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
            src={Replai}
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
      {/* <Typography variant="h6" sx={{justifyContent: 'centre', display:"flex", fontSize: 18, alignContent: "center", textAlign: "center", mt: 4 }}>
        Top 10 Projects
      </Typography> */}
      {/* <ProjectList /> */}
    </Box>
  );
}
