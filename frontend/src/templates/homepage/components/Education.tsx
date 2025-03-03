import React from "react";
import {
  Box,
  Card,
  Typography,
  useTheme,
  Chip,
  Avatar,
  Paper,
  alpha,
  useMediaQuery,
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Education() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const techSkills = [
    {
      src: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
      alt: "C",
    },
    {
      src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
      alt: "C++",
    },
    {
      src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      alt: "JavaScript",
    },
    {
      src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      alt: "Python",
    },
  ];

  const toolsUsed = [
    {
      src: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
      alt: "GitHub",
    },
    {
      src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
      alt: "Docker",
    },
    {
      src: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
      alt: "VS Code",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: 1200,
        mx: "auto",
        width: "100%",
        px: isMobile ? 2 : 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: isMobile ? "95%" : "80%",
          maxWidth: 500,
          p: 1.5,
          border: 1,
          borderColor: "divider",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          background: theme.palette.background.paper,
          mb: 4,
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
            fontSize: isMobile ? "1.1rem" : "1.5rem",
          }}
        >
          Education & Training
        </Typography>
      </Box>

      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={{
          p: 0,
          m: 0,
          width: "100%",
          maxWidth: 800,
          "& .MuiTimelineItem-root::before": 1
            ? {
                display: "none",
              }
            : {},
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ px: isMobile ? 1 : 2 }}>
            <Card
              sx={{
                p: 0,
                overflow: "hidden",
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transform: "perspective(1000px) rotateY(0deg)",
                transition: "transform 0.5s",
                "&:hover": {
                  transform: !isMobile
                    ? "perspective(1000px) rotateY(2deg)"
                    : "none",
                },
              }}
              variant="outlined"
            >
              <Box sx={{ position: "relative" }}>
                {/* Header section with background */}
                <Box
                  sx={{
                    height: isMobile ? 100 : 120,
                    background: isDarkMode
                      ? "linear-gradient(135deg,rgba(0, 128, 255, 0.62),rgb(0, 132, 255))"
                      : "linear-gradient(135deg,rgba(0, 128, 255, 0.62),rgb(0, 132, 255))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* School logo circle */}
                  <Avatar
                    src="https://www.42vienna.com/img/42vienna.jpg"
                    alt="42 Vienna Coding School"
                    sx={{
                      width: isMobile ? 90 : isTablet ? 100 : 120,
                      height: isMobile ? 90 : isTablet ? 100 : 120,
                      border: "5px solid",
                      borderColor: theme.palette.background.paper,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                      position: "absolute",
                      bottom: isMobile ? "-40px" : "-50px",
                    }}
                  />
                </Box>

                {/* Main content */}
                <Box sx={{ pt: isMobile ? 6 : 7, px: isMobile ? 2 : 3, pb: 3 }}>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: isMobile ? "1.1rem" : "1.25rem",
                    }}
                  >
                    Software Engineering
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    gutterBottom
                  >
                    42 Vienna Coding School
                  </Typography>

                  {/* Date badges */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: isMobile ? 1 : 2,
                      mt: 2,
                      mb: 3,
                      flexWrap: isMobile ? "wrap" : "nowrap",
                    }}
                  >
                    <Chip
                      label="September 2023"
                      size="small"
                      sx={{
                        borderRadius: 4,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    />
                    {!isMobile && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: theme.palette.text.secondary,
                        }}
                      >
                        —
                      </Box>
                    )}
                    <Chip
                      label="February 2025"
                      size="small"
                      sx={{
                        borderRadius: 4,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    />
                  </Box>

                  {/* Description */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: isMobile ? 2 : 2.5,
                      borderRadius: 3,
                      bgcolor: isDarkMode
                        ? alpha(theme.palette.background.default, 0.4)
                        : alpha(theme.palette.primary.light, 0.05),
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.7,
                        color: theme.palette.text.secondary,
                        fontSize: isMobile ? "0.8rem" : "0.875rem",
                      }}
                    >
                      42 Vienna is a free programming school with no teachers,
                      no books, and no lectures. The school is open 24/7 and the
                      students learn how to code by working on real-world
                      projects in a peer-to-peer learning environment. The
                      curriculum is project-based and covers a wide range of
                      programming languages and technologies. Main campus of
                      École 42 is located in Paris, France.
                    </Typography>
                  </Paper>

                  {/* Tech stack section */}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 1.5,
                      fontWeight: 600,
                      textAlign: "center",
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                    }}
                  >
                    Tech Stack & Languages
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: isMobile ? 1 : 2,
                      mb: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    {techSkills.map((skill, index) => (
                      <Paper
                        key={index}
                        elevation={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: isMobile ? 0.75 : 1,
                          px: isMobile ? 1.25 : 1.5,
                          borderRadius: 2,
                          backgroundColor: theme.palette.background.paper,
                          transition: "all 0.3s",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <Avatar
                          src={skill.src}
                          alt={skill.alt}
                          variant="rounded"
                          sx={{
                            width: isMobile ? 24 : 28,
                            height: isMobile ? 24 : 28,
                            backgroundColor: "white",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            fontSize: isMobile ? "0.75rem" : "inherit",
                          }}
                        >
                          {skill.alt}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>

                  {/* Tools section */}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 1.5,
                      fontWeight: 600,
                      textAlign: "center",
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                    }}
                  >
                    Tools Used
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: isMobile ? 1 : 2,
                      mb: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    {toolsUsed.map((tool, index) => (
                      <Paper
                        key={index}
                        elevation={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: isMobile ? 0.75 : 1,
                          px: isMobile ? 1.25 : 1.5,
                          borderRadius: 2,
                          backgroundColor: theme.palette.background.paper,
                          transition: "all 0.3s",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <Avatar
                          src={tool.src}
                          alt={tool.alt}
                          variant="rounded"
                          sx={{
                            width: isMobile ? 24 : 28,
                            height: isMobile ? 24 : 28,
                            backgroundColor: "white",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            fontSize: isMobile ? "0.75rem" : "inherit",
                          }}
                        >
                          {tool.alt}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>

                  {/* Status badge */}
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Chip
                      icon={
                        <CheckCircleIcon
                          sx={{ fontSize: isMobile ? "1rem" : "1.2rem" }}
                        />
                      }
                      label="Completed"
                      color="success"
                      variant="filled"
                      sx={{
                        fontWeight: 600,
                        px: 1,
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
