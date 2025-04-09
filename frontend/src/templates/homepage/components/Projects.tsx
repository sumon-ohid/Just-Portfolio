import * as React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  Chip,
  Stack,
  Container,
  useMediaQuery,
  useTheme,
  alpha,
  Divider,
  Paper,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import StarIcon from "@mui/icons-material/Star";
import Replai from "../../../assets/logo.png";

export function ProjectList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = theme.palette.mode === "dark";

  const topProjects = [
    {
      name: "Online Pong Game",
      tech: ["Vanilla JavaScript", "Django", "Postgres", "Docker"],
      description:
        "Built a full-stack online pong game with Game, Chat, Dashboard, Leaderboard, Settings etc. It's a single page application.",
      year: 2025,
      github: "https://github.com/sumon-ohid/42-ft_transcendence",
      color: isDarkMode ? "#8e44ad" : "#9b59b6",
    },
    {
      name: "Web Server",
      tech: ["C++ Programming language"],
      description:
        "Built a Nginx like web server. Supports CGI, Handle thousands of clients at the same time. Takes a Config file as argument.",
      year: 2024,
      github: "https://github.com/sumon-ohid/42-Webserv",
      color: isDarkMode ? "#16a085" : "#1abc9c",
    },
    {
      name: "Mini Shell",
      tech: ["C Programming language"],
      description:
        "Built a custom Bash like shell. Support Signals, All commands as well as some builtins like echo, cd, export, unset, env, pwd.",
      year: 2024,
      github: "https://github.com/sumon-ohid/42-minishell",
      color: isDarkMode ? "#2980b9" : "#3498db",
    },
    {
      name: "Easy Austria - Mobile and Web app",
      tech: ["flutterflow", "firebase"],
      description:
        "Built a low code app in Flutter. The goal of the app is to help EU citizens moving to Austria. It provides all the guidance.",
      year: 2024,
      github: "https://github.com/sumon-ohid/Easy-Austria",
      color: isDarkMode ? "#d35400" : "#e67e22",
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mt: 5 }}>
      <Box sx={{ width: "100%", mb: 4, position: "relative" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          Featured Projects
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "120px",
            height: "8px",
            background: isDarkMode
              ? "linear-gradient(90deg, rgba(106, 90, 205, 0.8), rgba(75, 0, 130, 0))"
              : "linear-gradient(90deg, rgba(147, 112, 219, 0.8), rgba(147, 112, 219, 0))",
            left: "50%",
            bottom: { xs: "-5px", sm: "-8px" },
            transform: "translateX(-50%)",
            borderRadius: "4px",
            zIndex: 1,
          }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            maxWidth: 600,
            mx: "auto",
            textAlign: "center",
            px: 2,
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
          }}
        >
          A selection of my recent software development projects, showcasing my
          skills in various technologies.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {topProjects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: (theme) =>
                    `0 20px 30px ${
                      isDarkMode ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"
                    }`,
                },
                border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "none",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: "6px",
                  width: "100%",
                  background: project.color,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <Box
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  pt: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 36, sm: 40 },
                        height: { xs: 36, sm: 40 },
                        background: `linear-gradient(135deg, ${
                          project.color
                        }, ${alpha(project.color, 0.7)})`,
                        color: "white",
                        mr: 2,
                        fontWeight: "bold",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      #{index + 1}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: {
                          xs: "0.95rem",
                          sm: "1.1rem",
                          md: "1.25rem",
                        },
                        color: isDarkMode
                          ? theme.palette.grey[100]
                          : theme.palette.grey[900],
                        lineHeight: 1.3,
                      }}
                    >
                      {project.name}
                    </Typography>
                  </Box>
                  <Chip
                    size="small"
                    label={project.year}
                    icon={<DateRangeIcon sx={{ fontSize: "0.9rem" }} />}
                    sx={{
                      backgroundColor: alpha(project.color, 0.15),
                      color: project.color,
                      height: 24,
                      fontSize: "0.7rem",
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    lineHeight: 1.6,
                    flexGrow: 1,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {project.description}
                </Typography>

                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.6,
                    borderColor: isDarkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                  }}
                />

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      gap: 0.5,
                      color: alpha(project.color, 0.9),
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  >
                    <CodeIcon fontSize="small" sx={{ fontSize: "0.9rem" }} />
                    Technologies
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                    {project.tech.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          borderRadius: 1,
                          fontSize: "0.65rem",
                          height: 22,
                          backgroundColor: alpha(
                            project.color,
                            isDarkMode ? 0.15 : 0.1
                          ),
                          color: isDarkMode
                            ? alpha(project.color, 0.9)
                            : project.color,
                          fontWeight: 500,
                          border: `1px solid ${alpha(project.color, 0.2)}`,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderRadius: 6,
                    textTransform: "none",
                    alignSelf: "flex-start",
                    borderColor: alpha(project.color, 0.5),
                    color: project.color,
                    "&:hover": {
                      borderColor: project.color,
                      backgroundColor: alpha(project.color, 0.1),
                    },
                  }}
                  href={project.github}
                  target="_blank"
                >
                  View Code
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          endIcon={<LaunchIcon />}
          sx={{
            borderRadius: 6,
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: 600,
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
            background: isDarkMode
              ? "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 170, 255))"
              : "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 174, 255))",
            "&:hover": {
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              background: isDarkMode
                ? "linear-gradient(45deg,rgb(15, 152, 197) 0%, #1f6eec 100%)"
                : "linear-gradient(45deg,rgb(36, 82, 210) 0%, #3b00c4 100%)",
            },
          }}
          href="https://github.com/sumon-ohid?tab=repositories"
          target="_blank"
        >
          View all projects
        </Button>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: { xs: 6, sm: 8 },
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Background decoration element */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            background: isDarkMode
              ? "radial-gradient(circle, rgba(111, 66, 193, 0.15) 0%, rgba(70, 11, 136, 0) 70%)"
              : "radial-gradient(circle, rgba(147, 112, 219, 0.15) 0%, rgba(147, 112, 219, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(30px)",
            opacity: 0.8,
            zIndex: -1,
          }}
        />
      )}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "250px",
            height: "250px",
            background: isDarkMode
              ? "radial-gradient(circle, rgba(26, 188, 156, 0.15) 0%, rgba(0, 0, 0, 0) 70%)"
              : "radial-gradient(circle, rgba(26, 188, 156, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(25px)",
            opacity: 0.7,
            zIndex: -1,
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "90%", sm: "80%", md: "70%" },
            maxWidth: 500,
            p: 1.5,
            border: 1,
            borderColor: "divider",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            background: theme.palette.background.paper,
            mb: 5,
            backdropFilter: "blur(10px)",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 600,
              background: isDarkMode
                ? "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 170, 255))"
                : "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 174, 255))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Projects & Applications
          </Typography>
        </Box>

        <Paper
          elevation={isDarkMode ? 4 : 2}
          sx={{
            width: "100%",
            maxWidth: 800,
            mb: 6,
            borderRadius: { xs: 3, sm: 4 },
            overflow: "hidden",
            transition: "all 0.4s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            },
            background: theme.palette.background.paper,
            border: isDarkMode ? "1px solid rgba(255,255,255,0.05)" : "none",
          }}
        >
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              background: isDarkMode
                ? "linear-gradient(135deg,rgb(0, 88, 176),rgb(0, 170, 255))"
                : "linear-gradient(135deg,rgb(0, 74, 147),rgb(0, 174, 255))",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background pattern */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                backgroundImage: `url(https://www.transparenttextures.com/patterns/${isDarkMode ? "dark" : "light"}-paper.png)`,
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
                flexWrap: "wrap",
                gap: 1,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <StarIcon sx={{ color: "#FFD700" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                >
                  Featured Project
                </Typography>
                <Chip
                  label="Current"
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{
                    color: "white",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    height: 20,
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Chip
                  label="2025"
                  size="small"
                  variant="outlined"
                  color="primary"
                  icon={<DateRangeIcon sx={{ color: "white !important" }} />}
                  sx={{
                    color: "white",
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                    fontSize: "0.7rem",
                    height: 24,
                  }}
                />
                <Chip
                  label="Ongoing"
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "white",
                    fontSize: "0.7rem",
                    height: 24,
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: isMobile ? "center" : "flex-start",
                flexDirection: isMobile ? "column" : "row",
                gap: 3,
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={Replai}
                alt="Replai"
                sx={{
                  width: isMobile ? 150 : 180,
                  height: "auto",
                  borderRadius: 2,
                  mt: 5,
                  boxShadow: isDarkMode
                    ? "0 8px 20px rgba(0,0,0,0.25)"
                    : "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => window.open("https://replai.tech/")}
              />

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    textAlign: isMobile ? "center" : "left",
                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    color: isDarkMode
                      ? theme.palette.primary.light
                      : theme.palette.primary.dark,
                  }}
                >
                  Replai - AI Email Agent
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: isMobile ? "center" : "left",
                    fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  }}
                >
                  <strong>Replai</strong> is a platform that helps user to
                  automate their email. Small businesses also can use it to
                  automate their customer service. The project aims to check
                  emails every minute and if any new email is found, it will be
                  processed by the AI model and the response will be sent to the
                  user. The AI model can be trained by the user to improve the
                  accuracy of the response.
                </Typography>
              </Box>
            </Box>

            <Divider
              sx={{
                my: 3,
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)",
              }}
            />

            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                <CodeIcon fontSize="small" />
                Tech Stack
              </Typography>

              <Grid
                container
                spacing={2}
                sx={{
                  mb: 3,
                }}
              >
                {[
                  {
                    src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
                    alt: "React",
                  },
                  {
                    src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
                    alt: "TypeScript",
                  },
                  {
                    src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
                    alt: "Node.js",
                  },
                  {
                    src: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
                    alt: "MongoDB",
                  },
                ].map((tech, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Paper
                      elevation={isDarkMode ? 2 : 1}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 1.5,
                        borderRadius: 2,
                        height: "100%",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: isDarkMode
                            ? "0 8px 16px rgba(0,0,0,0.3)"
                            : "0 8px 16px rgba(0,0,0,0.1)",
                        },
                        backgroundColor: isDarkMode
                          ? alpha(theme.palette.background.paper, 0.8)
                          : theme.palette.background.paper,
                        border: isDarkMode
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                      }}
                    >
                      <Box
                        component="img"
                        src={tech.src}
                        alt={tech.alt}
                        sx={{
                          height: { xs: 36, sm: 40 },
                          width: { xs: 36, sm: 40 },
                          mb: 1,
                          filter: isDarkMode
                            ? "brightness(0.9) contrast(1.1)"
                            : "none",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          color: isDarkMode
                            ? theme.palette.grey[300]
                            : theme.palette.grey[800],
                        }}
                      >
                        {tech.alt}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  mb: 3,
                  backgroundColor: isDarkMode
                    ? alpha(theme.palette.primary.dark, 0.1)
                    : alpha(theme.palette.primary.light, 0.05),
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                  border: isDarkMode
                    ? "1px solid rgba(147, 112, 219, 0.1)"
                    : "1px solid rgba(147, 112, 219, 0.1)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  <FeaturedPlayListIcon fontSize="small" />
                  My Role
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  }}
                >
                  I'm working as a full-stack developer in this project. I'm
                  responsible for the backend and frontend development. I never
                  used some of this tech stack before, so I had to learn it from
                  scratch. I also had to learn how to use the Gmail API to fetch
                  emails and send responses. The project is still ongoing and
                  I'm looking forward to seeing the final product.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                variant="contained"
                size="medium"
                endIcon={<LaunchIcon />}
                sx={{
                  p: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  pl: 3,
                  pr: 3,
                  borderRadius: 6,
                }}
                href="https://replai.tech/"
                target="_blank"
              >
                Visit Website
              </Button>
            </Box>
          </Box>
        </Paper>

        <ProjectList />
      </Box>
    </Container>
  );
}
