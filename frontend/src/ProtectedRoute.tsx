import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, checkAuthStatus } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyAuth = async () => {
      await checkAuthStatus();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    verifyAuth();
  }, [checkAuthStatus]);

  if (loading) {
    const theme = useTheme();
    const isDarkMode = localStorage.getItem("mui-mode") === "dark";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: isDarkMode ? "black" : "white",
        }}
      >
      <div className="animate-pulse flex flex-col items-center gap-4 w-60">
        <div>
          <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
          <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
        </div>
        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
        <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
      <Typography variant="h6" component="h2" gutterBottom style={{color: isDarkMode ? "white" : "black"}}>
          Loading...
      </Typography>
      </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
