import * as React from "react";
import { useState, useEffect } from "react";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import AppTheme from "../shared-theme/AppTheme";
import {
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Rating,
  Avatar,
  IconButton,
  Alert,
  AlertTitle,
} from "@mui/material";
import Footer from "../marketing-page/components/Footer";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";
import { FormControl } from "@mui/material";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

type FeedbackComment = {
  _id: string;
  userId: {
    name: string;
    profilePicture: string;
  };
  comment: string;
};

export default function FeedbackPage(props: { disableCustomTheme?: boolean }) {
  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [newComments, setNewComments] = useState<{ [key: string]: string }>({});
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/feedback/all`);
      const data = response.data as { userId: string };
      if (!data.userId) {
        console.log("No feedback found");
        return;
      }

      setFeedbackList(response.data as any[]);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        `${apiBaseUrl}/api/feedback/submit`,
        { rating, comments },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFeedbackList((prevList) => [response.data, ...prevList]);
      setRating(null);
      setComments("");
      setAlert({
        type: "success",
        message: "Feedback submitted successfully!",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setAlert({
        type: "error",
        message:
          "Rating and Comment both are required for submitting feedback.",
      });
    }
  };

  const handleCommentSubmit = async (feedbackId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        `${apiBaseUrl}/api/feedback/comment/${feedbackId}`,
        { comment: newComments[feedbackId] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFeedbackList((prevList) =>
        prevList.map((feedback) =>
          feedback._id === feedbackId ? response.data : feedback
        )
      );
      setNewComments((prevComments) => ({
        ...prevComments,
        [feedbackId]: "",
      }));
      // setAlert({ type: "success", message: "Comment submitted successfully!" });
    } catch (error) {
      console.error("Error submitting comment:", error);
      // setAlert({ type: "error", message: "Error submitting comment." });
    }
  };

  const handleLike = async (feedbackId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        `${apiBaseUrl}/api/feedback/like/${feedbackId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFeedbackList((prevList) =>
        prevList.map((feedback) =>
          feedback._id === feedbackId ? response.data : feedback
        )
      );
    } catch (error) {
      console.error("Error liking feedback:", error);
    }
  };

  const handleCommentChange = (feedbackId: string, value: string) => {
    setNewComments((prevComments) => ({
      ...prevComments,
      [feedbackId]: value,
    }));
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: "auto",
            minHeight: "100vh",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
          </Stack>
          <Typography variant="h4" align="center" sx={{ mt: 3 }}>
            Feedback Form
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            We value your feedback
          </Typography>
          <Box sx={{ mx: 3, mb: 3 }}>
            <Card
              sx={{
                maxWidth: 600,
                height: 500,
                mx: "auto",
                p: 2,
                overflow: "auto",
              }}
            >
              <CardContent>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <FeedbackIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography variant="h5">
                      We'd love to hear from you!
                    </Typography>
                  </Stack>
                  <Typography variant="body1">
                    Please share your thoughts and suggestions to help us
                    improve.
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    {alert && (
                      <Box sx={{ mb: 3 }}>
                        <Alert
                          severity={alert.type}
                          onClose={() => setAlert(null)}
                        >
                          <AlertTitle>
                            {alert.type === "success" ? "Success" : "Error"}
                          </AlertTitle>
                          {alert.message}
                        </Alert>
                      </Box>
                    )}
                    <Grid container spacing={2}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", ml: 2 }}
                      >
                        Rate us
                      </Typography>
                      <Grid item xs={12}>
                        <FormControl component="fieldset" fullWidth>
                          <Rating
                            name="feedback-rating"
                            value={rating}
                            onChange={(_, newValue) => setRating(newValue)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <textarea
                          name="textarea"
                          id="textarea"
                          rows={6}
                          cols={65}
                          required
                          style={{
                            width: "100%",
                            height: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: ".5px solid rgba(142, 142, 142, 0.48)",
                          }}
                          placeholder="Comments"
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        >
                          {comments}
                        </textarea>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Submit Feedback
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Typography variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>
            Feedback from other users
          </Typography>
          <Box sx={{ mx: 3, mb: 3 }}>
            {feedbackList.map((feedback) => (
              <Card key={feedback._id} sx={{ mb: 3 }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, borderBottom: "1px solid", borderColor: "divider", paddingBottom: "10px" }}>
                    <Avatar
                      alt={feedback.name || "anonymous"}
                      src={feedback.userId.profilePicture || ""}
                    />
                    <Typography variant="h6">{feedback.name}</Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, mb: 2 }}
                    color="text.secondary"
                  >
                    {feedback.comments}
                  </Typography>
                  <Rating value={feedback.rating} readOnly />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                      aria-label="like"
                      onClick={() => handleLike(feedback._id)}
                    >
                      <ThumbUpIcon
                        color={
                          feedback.likes.includes(
                            localStorage.getItem("userId")
                          )
                            ? "primary"
                            : "inherit"
                        }
                      />
                    </IconButton>
                    <Typography variant="body2">
                      {feedback.likes.length}
                    </Typography>
                  </Stack>
                  <Box>
                    {feedback.feedbackComments.map(
                      (comment: FeedbackComment) => (
                        <Box key={comment._id} sx={{ mt: 2, border: "1px solid", borderColor: "divider", borderRadius: "5px", padding: "10px" }}>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Avatar
                              alt={comment.userId.name || "anonymous"}
                              src={comment.userId.profilePicture || ""}
                            />
                            <Typography variant="body2">
                              {comment.comment}
                            </Typography>
                          </Stack>
                        </Box>
                      )
                    )}
                  </Box>
                  <Box
                    component="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCommentSubmit(feedback._id);
                    }}
                    noValidate
                    sx={{
                      mt: 2,
                      mb: 2,
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <TextField
                      placeholder="Add a comment"
                      variant="outlined"
                      fullWidth
                      value={newComments[feedback._id] || ""}
                      onChange={(e) =>
                        handleCommentChange(feedback._id, e.target.value)
                      }
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ mt: 1 }}
                    >
                      Comment
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Footer />
        </Box>
      </Box>
    </AppTheme>
  );
}
