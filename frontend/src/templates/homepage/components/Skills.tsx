import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const moveRightToLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const skills = [
  { src: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000", alt: "C" },
  { src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", alt: "C++" },
  { src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000", alt: "JavaScript" },
  { src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", alt: "Python" },
  { src: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000", alt: "GitHub" },
  { src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000", alt: "Docker" },
  { src: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000", alt: "VSCode" },
  { src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000", alt: "React" },
  { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "TypeScript" },
  { src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", alt: "Node.js" },
  { src: "https://img.icons8.com/?size=100&id=fG5Tnj4ARIoI&format=png&color=000000", alt: "Linux" },
  { src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", alt: "HTML" },
  { src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000", alt: "CSS" },
  { src: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000", alt: "Tailwind CSS" },
];

const Skills = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
      <Box sx={{ p: 1, border: 1, borderColor: "divider", borderRadius: 5, textAlign: "center", width: "80%", maxWidth: 500 }}>
        <Typography variant="h6" gutterBottom>Skills & Certifications</Typography>
      </Box>
      <Card sx={{ width: "80%", maxWidth: 800, mt: 4, p: 2, textAlign: "center" }} variant="outlined">
        <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>Technical Skills</Typography>
        <Typography variant="body2" sx={{ mt: 2, fontSize: 12, p: 2 }}>
          Mostly I learn by doing. I have a strong foundation in C and C++, with a good understanding of data structures and algorithms. 
          I pick up new technologies as needed while working on projects. I have experience with Python and JavaScript and am currently learning React and Node.js.
        </Typography>
        <Box sx={{ mt: 2, overflow: "hidden", width: "100%" }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              display: "flex",
              // animation: `${moveRightToLeft} 30s linear infinite`,
              width: "100%",
              overflow: "auto",
            }}
          >
            {[...skills].map((skill, index) => (
              <Box key={index} component="img" src={skill.src} alt={skill.alt} sx={{ height: 50, width: 50, border: 1, borderColor: "divider", borderRadius: 1, p: 0.5 }} />
            ))}
          </Stack>
        </Box>
      </Card>
      <Card sx={{mt: 2}}>
          <Typography variant="h6" sx={{fontSize: 12}}>
            Github Foundation Certification
          </Typography>
          <img src="https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png" alt="github foundation" height={200} width={200} ></img>
      </Card>
    </Box>
  );
};

export default Skills;
