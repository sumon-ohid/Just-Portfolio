import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import { Divider, useMediaQuery, IconButton } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Alert from "@mui/material/Alert";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
    width: 1,
    borderRadius: 2,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: 56,
  minWidth: 110,
  margin: 10,
  textTransform: "none",
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  border: "0.1px solid",
  borderColor: "divider",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
}));

function TabPanel({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3, width: "100%" }}>{children}</Box>}
    </div>
  );
}

export default function DataTabs() {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const [textData, setTextData] = React.useState("");
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [error, setError] = React.useState("");
  const [dataPrompt, setDataPrompt] = React.useState("");
  const [isTraining, setIsTraining] = React.useState(false);
  const [trainingCompleted, setTrainingCompleted] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState("");
  const [fileSize, setFileSize] = React.useState(0);
  const [url, setUrl] = React.useState("");
  const [urlList, setUrlList] = React.useState<{ url: string; charCount: number }[]>([]);
  const [charCount, setCharCount] = React.useState(0);

  const handleTrainAI = async () => {
    setIsTraining(true);
    setTrainingCompleted(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setTrainingCompleted(true);
    } catch (error) {
      console.error("Error training AI:", error);
    } finally {
      setIsTraining(false);
    }
  };

  React.useEffect(() => {
    const fetchDataPrompt = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`${apiBaseUrl}/api/data/get-text`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setDataPrompt((response.data as { text: string }).text);
        }
      } catch (error) {
        console.error("Error fetching data prompt:", error);
      }
    };

    const fetchUrlList = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`${apiBaseUrl}/api/data/get-urls`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUrlList((response.data as { urls: { url: string; charCount: number }[] }).urls);
        }
      } catch (error) {
        console.error("Error fetching URL list:", error);
      }
    };

    fetchDataPrompt();
    fetchUrlList(); 
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTextDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextData(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);
      setFileSize(file.size);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSaveData = async () => {
    if (!textData) {
      setError("Text data cannot be empty.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (textData.length > 1000) {
      setError("Text data cannot exceed 1000 characters.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        `${apiBaseUrl}/api/data/save-text`,
        { text: textData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
      }
    } catch (error) {
      console.error("Error saving text data:", error);
      setError("Error saving text data.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleUploadFile = async () => {
    if (!selectedFile) {
      setError("No file selected.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(`${apiBaseUrl}/api/data/upload-file`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Only Max 4 MB size and *.pdf file is allowed. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleAnalyzeUrl = async () => {
    if (!url) {
      setError("URL cannot be empty.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        `${apiBaseUrl}/api/data/analyze-url`,
        { url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const { charCount } = response.data as { charCount: number };
        setCharCount(charCount);
        setUrlList((prevList) => [...prevList, { url, charCount }]);
        setUrl("");
      }
    } catch (error) {
      console.error("Error analyzing URL:", error);
      setError("Error analyzing URL.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleDeleteUrl = async (urlToDelete: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.delete(`${apiBaseUrl}/api/data/delete-url/${encodeURIComponent(urlToDelete)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUrlList((response.data as { urls: { url: string; charCount: number }[] }).urls);
      }
    } catch (error) {
      console.error("Error deleting URL:", error);
      setError("Error deleting URL.");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 3, gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          bgcolor: "background.default",
          border: "2px solid",
          borderColor: "divider",
          borderRadius: 2,
          width: isSmallScreen ? "100%" : "auto",
        }}
      >
        <StyledTabs
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            justifyContent: "center",
            borderRight: isSmallScreen ? 0 : 1,
            borderBottom: isSmallScreen ? 1 : 0,
            borderColor: "divider",
            p: 1,
            width: isSmallScreen ? "100%" : 200,
          }}
        >
          <StyledTab icon={<TextFieldsIcon />} label="Text" />
          <StyledTab icon={<UploadFileIcon />} label="File" />
          <StyledTab icon={<LanguageIcon />} label="Website" />
          <StyledTab icon={<EmailIcon />} label="Mail" />
        </StyledTabs>

        <TabPanel value={value} index={0}>
          <Typography variant="h4" sx={{ ml: 2 }}>
            Text data training
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ ml: 2 }}>
            Enter the text data you want to use for training. Maximum 1000
            characters.
          </Typography>
          {alertVisible && (
            <Alert severity="success" sx={{ mt: 2, ml: 1 }}>
              Data saved successfully
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2, ml: 1 }}>
              {error}
            </Alert>
          )}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: isSmallScreen ? "100%" : "400px",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                padding: 2,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                required
                id="standard-multiline-flexible"
                multiline
                maxRows={8}
                variant="standard"
                value={textData}
                onChange={handleTextDataChange}
                placeholder={dataPrompt}
              />
            </div>
          </Box>
          <Button
            variant="contained"
            size="small"
            color="primary"
            endIcon={<ChevronRightRoundedIcon />}
            fullWidth={isSmallScreen}
            sx={{ borderRadius: 2, px: 4, py: 1.5, ml: isSmallScreen ? 1 : 2 }}
            onClick={handleSaveData}
          >
            Save Data
          </Button>
        </TabPanel>

        <TabPanel value={value} index={1}>
          {alertVisible && (
            <Alert severity="success" sx={{ mt: 2, mb: 2 }}>
              Data saved successfully
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box
            sx={{
              width: isSmallScreen ? "100%" : 500,
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 2,
              p: 6,
              textAlign: "center",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            <UploadFileIcon
              sx={{ fontSize: 40, mb: 1, color: "text.secondary" }}
            />
            <Typography variant="body1" sx={{ mb: 2 }}>
              Drag and drop files here
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Supported formats: PDF (Max 4MB)
            </Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadFileIcon />}
            >
              Browse Files
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {selectedFile && (
              <Box sx={{ mt: 2, textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>File Name:</strong> {fileName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>File Size:</strong> {(fileSize / 1024 / 1024).toFixed(2)} MB
                </Typography>
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            size="small"
            color="primary"
            endIcon={<ChevronRightRoundedIcon />}
            fullWidth={isSmallScreen}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              ml: isSmallScreen ? 1 : 2,
              mt: 2,
            }}
            onClick={handleUploadFile}
          >
            Save Data
          </Button>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Website data training
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="https://example.com"
            value={url}
            onChange={handleUrlChange}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <LanguageIcon sx={{ color: "action.active", mr: 1 }} />
              ),
              sx: { borderRadius: 2 },
            }}
          />
          <Button
            variant="contained"
            size="large"
            startIcon={<LanguageIcon />}
            sx={{ borderRadius: 2 }}
            onClick={handleAnalyzeUrl}
          >
            Analyze Website
          </Button>
          {charCount > 0 && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Characters found: {charCount}
            </Typography>
          )}
          <Typography variant="h6" sx={{ mt: 3 }}>
            Analyzed URLs:
          </Typography>
          <Box sx={{ mt: 1 }}>
            {urlList.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",  
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "background.default",
                  borderRadius: 2,
                  p: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {item.url.length > 50 ? `${item.url.slice(0, 50)}...` : item.url} ({item.charCount} chars)
                </Typography>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleDeleteUrl(item.url)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Email data training
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Coming Soon...
          </Typography>
        </TabPanel>
      </Box>

      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid",
          borderRadius: 2,
          borderColor: "divider",
          width: "100%",
        }}
      >
        {isTraining ? (
          <CircularProgress size={60} sx={{ color: "primary.main", mb: 2 }} />
        ) : trainingCompleted ? (
          <CheckCircleIcon sx={{ fontSize: 60, color: "green", mb: 2 }} />
        ) : (
          <SettingsSuggestIcon
            sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
          />
        )}
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          AI Training Section
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          After providing data, train your AI model to update data and improve
          its performance.
        </Typography>
        {trainingCompleted ? (
          <Alert variant="outlined" severity="success">
            AI Model trained successfully with new data!
          </Alert>
        ) : (
          <Alert variant="outlined" severity="info">
            AI Model is not trained yet. Please train the model to use it.
          </Alert>
        )}
        <Divider sx={{ width: "100%", my: 2 }} />
        <Button
          variant="outlined"
          startIcon={<SettingsSuggestIcon />}
          sx={{ borderRadius: 2, px: 4, py: 1.5 }}
          onClick={handleTrainAI}
          disabled={isTraining}
        >
          {isTraining ? "Training..." : "Train AI Model"}
        </Button>
      </Box>
    </Box>
  );
}
