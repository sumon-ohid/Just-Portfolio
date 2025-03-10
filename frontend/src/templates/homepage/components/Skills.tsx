import React from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  useTheme,
  Chip,
  Divider,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import VerifiedIcon from "@mui/icons-material/Verified";

const moveRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const skills = [
  {
    src: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
    alt: "C",
    category: "Languages",
  },
  {
    src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    alt: "C++",
    category: "Languages",
  },
  {
    src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    alt: "JavaScript",
    category: "Languages",
  },
  {
    src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    alt: "Python",
    category: "Languages",
  },
  {
    src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    alt: "TypeScript",
    category: "Languages",
  },
  {
    src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    alt: "HTML",
    category: "Frontend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    alt: "CSS",
    category: "Frontend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    alt: "React",
    category: "Frontend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    alt: "Tailwind CSS",
    category: "Frontend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    alt: "Node.js",
    category: "Backend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=AksudKrBQryM&format=png&color=000000",
    alt: "Django",
    category: "Backend",
  },
  {
    src: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    alt: "MongoDB",
    category: "Database",
  },
  {
    src: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    alt: "PostgreSQL",
    category: "Database",
  },
  {
    src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    alt: "Docker",
    category: "DevOps",
  },
  {
    src: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
    alt: "GitHub",
    category: "Tools",
  },
  {
    src: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
    alt: "VSCode",
    category: "Tools",
  },
  {
    src: "https://img.icons8.com/?size=100&id=fG5Tnj4ARIoI&format=png&color=000000",
    alt: "Linux",
    category: "Tools",
  },
];

const skillCategories = ["Languages", "Frontend", "Backend", "DevOps", "Tools"];

const Skills = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // Group skills by category
  const skillsByCategory: { [key: string]: typeof skills } =
    skillCategories.reduce(
      (acc: { [key: string]: typeof skills }, category) => {
        acc[category] = skills.filter((skill) => skill.category === category);
        return acc;
      },
      {}
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 8,
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          p: 1.5,
          border: 1,
          borderColor: "divider",
          borderRadius: 5,
          textAlign: "center",
          width: "80%",
          maxWidth: 500,
          mb: 4,
          background: theme.palette.background.paper,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            background: isDarkMode
              ? "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 170, 255))"
              : "linear-gradient(135deg,rgb(0, 128, 255),rgb(0, 174, 255))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Skills & Certifications
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ width: "90%", maxWidth: 1200 }}>
        {/* Skills Section */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
            }}
            variant="outlined"
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                pb: 1,
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                display: "inline-block",
              }}
            >
              Technical Skills
            </Typography>

            <Typography variant="body2" sx={{ mb: 4, color: "text.secondary" }}>
              Mostly I learn by doing. I have a strong foundation in C and C++,
              with a good understanding of data structures and algorithms. I
              pick up new technologies as needed while working on projects. I
              have experience with Python and JavaScript and am currently
              learning React and Node.js.
            </Typography>

            {/* Skills cards by category */}
            {skillCategories.map((category) => (
              <Box key={category} sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: 1.5 }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {skillsByCategory[category].map((skill, index) => (
                    <Paper
                      key={index}
                      elevation={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                        borderRadius: 2,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Avatar
                        src={skill.src}
                        alt={skill.alt}
                        variant="rounded"
                        sx={{
                          width: 36,
                          height: 36,
                          mr: 1,
                          background: "white",
                          p: 0.5,
                        }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {skill.alt}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            ))}

            {/* Animated skills row */}
            <Box
              sx={{
                mt: "auto",
                pt: 3,
                position: "relative",
                overflow: "hidden",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  width: "100px",
                  height: "100%",
                  zIndex: 2,
                },
                // '&::before': {
                //   left: 0,
                //   background: `linear-gradient(to right, ${theme.palette.background.paper}, transparent)`,
                // },
                // '&::after': {
                //   right: 0,
                //   background: `linear-gradient(to left, ${theme.palette.background.paper}, transparent)`,
                // }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  animation: `${moveRightToLeft} 30s linear infinite`,
                  width: "fit-content",
                }}
              >
                {[...skills, ...skills].map((skill, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={skill.src}
                    alt={skill.alt}
                    sx={{
                      height: 40,
                      width: 40,
                      filter: isDarkMode ? "none" : "none",
                      opacity: 0.7,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Certifications Section */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                pb: 1,
                borderBottom: `2px solid ${theme.palette.primary.main}`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Certifications
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                borderRadius: 2,
                background: isDarkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.02)",
                width: "100%",
                mb: 2,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <VerifiedIcon
                color="primary"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontSize: 20,
                }}
              />
              <Box
                component="img"
                src="https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png"
                alt="github foundation"
                sx={{
                  width: 160,
                  height: 160,
                  // borderRadius: '50%',
                  mb: 2,
                  filter: isDarkMode ? "brightness(0.9)" : "none",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                GitHub Foundation Certification
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 1 }}
              >
                Verified March 2025
              </Typography>
              <Chip
                label="View credential"
                color="primary"
                variant="outlined"
                size="small"
                sx={{ mt: 2, cursor: "pointer" }}
                onClick={() => window.open("https://www.credly.com/badges/1b17bc24-0b38-4c1d-aacf-406160d11095/public_url", "_blank")}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
