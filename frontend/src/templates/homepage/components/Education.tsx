import * as React from "react";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import fourtytwolight from "../../../assets/42light.jpg";
import fourtytwodark from "../../../assets/42dark.jpg";
import theme from "../../../theme";
import { Stack } from "@mui/system";

export default function Education() {
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
          Education & Training
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
        {/* <Box
          component="img"
          src={fourtytwo}
          alt="42 Vienna Coding School"
          sx={{ width: 100, height: 100, borderRadius: 10, mt: 2 }}
        /> */}
        <Box
            component="img"
            src="https://images.credly.com/size/680x680/images/a6e3d74d-5acb-4519-91ce-70220c9f287b/image.png"
            alt="42badge"
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1,
                flexDirection: "row",
                height: 120,
                width: 120,
            }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" align="center" sx={{ mt: 1 }}>
            <strong>Software Engineering</strong>
            <br />
            42 Vienna Coding School
            <br />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 2,
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
              September 2023
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
              February 2025
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
            mt: 2,
            p: 2,
          }}
        >
          <Typography variant="body2" align="center" sx={{ fontSize: 12 }}>
            42 Vienna is a free programming school with no teachers, no books,
            and no lectures. The school is open 24/7 and the students learn how
            to code by working on real-world projects in a peer-to-peer learning
            environment. The curriculum is project-based and covers a wide range
            of programming languages and technologies. Main campus of École 42
            is located in Paris, France. Google 42 School for more information.
          </Typography>
        </Box>
        <Typography variant="body1" align="center" sx={{ fontWeight: "bold" }}>
          Tech Stack & Tools Used
        </Typography>
        <Stack  spacing={1} direction="row" sx={{ mt: 1 }}>
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=40670&format=png&color=000000"
            alt="C"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
            }}
            />
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
            alt="C++"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
            }}
            />
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
            alt="js"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
            }}
            />
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
            alt="python"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
            }}
            />
        </Stack>
        <Stack  spacing={1} direction="row" sx={{ mt: 1 }}>
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
            alt="github"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
            }}
            />
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
            alt="docker"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
                p: .4,
            }}
            />
            <Box
            component="img"
            src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
            alt="vscode"
            sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "divider",
                borderRadius: 10,
                mt: 1,
                flexDirection: "row",
                height: 50,
                width: 50,
                p: 1,
            }}
            />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: 1,
            borderColor: "divider",
            borderRadius: 5,
            mt: 1,
            background: theme.palette.success.main,
            flexDirection: "row",
            p: 1,
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: 12, pr: 1, pl: 1 }}
          >
            Completed
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
