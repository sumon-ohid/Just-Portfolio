import * as React from "react";
import Box from "@mui/material/Box";
import { Alert, Button, Card, Typography } from "@mui/material";
import { flexbox, fontFamily, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import Replai from "../../../assets/logo.png" 
import Chip from "@mui/material/Chip";

export function ProjectList() {
  const topProjects = [
    { 
      name: "Online Pong Game", 
      tech: ["Vanilla JavaScript", "Django", "Postgres", "Docker"],
      description: "Built a full-stack online pong game with Game, Chat, Dashboard, Leaderboard, Settings etc. It's a single page application.",
      year: 2025
    },
    {
      name: "Web Server",
      tech: ["C++ Programming language"],
      description: "Built a Nginx like web server. Supports CGI, Handle thousends of clients at the same time. Takes a Config file as argument.",
      year: 2024
    },
    {
      name: "Mini Shell",
      tech: ["C Programming language"],
      description: "Built a custom Bash like shell. Support Signals, All commands as well as some builtins like echo, cd, export, unset, env, pwd.",
      year: 2024
    },
    {
      name: "Easy Austria - Mobile and Web app",
      tech: ["flutterflow", "firebase"],
      description: "Built a low code app in Flutter. The goal of the app is to help EU citizens moving to Austria. It provides all the guidance.",
      year: 2024
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
      {/* New Top Projects Section */}
      <Box sx={{ width: "80%", maxWidth: 1200, mt: 2}}>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {topProjects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                p: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    mr: 2,
                    fontWeight: 'bold'
                  }}>
                    #{index + 2}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {project.name}
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{ 
                        borderRadius: 1,
                        bgcolor: 'action.selected',
                        '& .MuiChip-label': { fontSize: '0.75rem' }
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 2
                }}>
                  <Typography variant="caption" color="text.secondary">
                    {project.year}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderRadius: 2,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    View Code →
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained" sx={{ mt: 4, width: '50%', maxWidth: 200}} href="https://github.com/sumon-ohid?tab=repositories">
          View all projects
      </Button>
    </Box>
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
      <ProjectList />
    </Box>
  );
}
