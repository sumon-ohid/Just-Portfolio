import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// Keyframes for subtle floating animation
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Styled 404 text
const Styled404 = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  animation: `${float} 3s ease-in-out infinite`,
  textShadow: `0px 0px 10px ${theme.palette.primary.light}`,
}));

// Styled button
const HomeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  borderRadius: "8px",
  boxShadow: "none",
}));

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Styled404>404</Styled404>
      <Typography variant="h5" fontWeight="bold" color="text.primary">
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>

      {/* Illustration */}
      {/* <Box
        component="img"
        src="404-illustration.jpg"
        alt="Not Found"
        sx={{ width: "80%", maxWidth: 400, mt: 3 }}
      /> */}

      {/* Home Button */}
      <HomeButton
        variant="contained"
        color="primary"
        startIcon={<ErrorOutlineIcon />}
        onClick={() => navigate("/")}
      >
        Go to Home
      </HomeButton>
    </Container>
  );
}
