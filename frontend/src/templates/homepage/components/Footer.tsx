import * as React from "react";
import { 
  Link, 
  Typography, 
  Card, 
  Box, 
  Container, 
  Stack, 
  IconButton, 
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      sx={{ 
        color: "text.secondary", 
        fontWeight: 500,
        fontSize: "0.75rem"
      }}
    >
      {"© "}
      <Link 
        color="inherit" 
        href="#"
        sx={{ 
          textDecoration: 'none', 
          '&:hover': { 
            textDecoration: 'underline',
          } 
        }}
      >
        Sumon Oahid
      </Link>
      {" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      variant="outlined"
      sx={{
        py: 3,
        px: 2,
        mt: 4,
        mx: { xs: 1.5, sm: 3 },
        borderRadius: 2,
        background: isDarkMode ? 'rgba(26, 32, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: isDarkMode 
          ? '0 4px 20px rgba(0, 0, 0, 0.3)'
          : '0 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 0.5,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                background: isDarkMode 
                  ? 'linear-gradient(90deg, #9c88ff, #8c7ae6)'
                  : 'linear-gradient(90deg, #7158e2, #574b90)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sumon Oahid
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align={isMobile ? "center" : "left"}
              sx={{ 
                maxWidth: 400,
                fontSize: "0.75rem" 
              }}
            >
              Aspiaring Software Engineer & Tech enthusiast.
            </Typography>
          </Box>

          <Stack 
            direction="row" 
            spacing={1} 
            divider={
              <Divider 
                orientation="vertical" 
                flexItem 
                sx={{ borderColor: theme.palette.divider }} 
              />
            }
            sx={{ my: isMobile ? 2 : 0 }}
          >
            <IconButton 
              href="https://github.com/sumon-ohid" 
              target="_blank"
              aria-label="GitHub Profile"
              sx={{ 
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: isDarkMode ? '#9c88ff' : '#7158e2',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s'
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton 
              href="https://www.linkedin.com/in/sumon-md-ohiduzzaman/" 
              target="_blank"
              aria-label="LinkedIn Profile"
              sx={{ 
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: isDarkMode ? '#9c88ff' : '#7158e2',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s'
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton 
              href="mailto:oahid.sumon@gmail.com" 
              aria-label="Email Contact"
              sx={{ 
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: isDarkMode ? '#9c88ff' : '#7158e2',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s'
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Copyright />
        </Box>
      </Container>
    </Card>
  );
}