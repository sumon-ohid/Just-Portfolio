import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';
import { Typography } from '@mui/material';
import  GetConnectedEmails from './components/GetConnectedEmails';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {

    const handleCreateBot = async () => {
        // if (!user) {
        //   console.error('User not authenticated');
        //   return;
        // }
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
    
        try {
          const response = await axios.get(`${apiBaseUrl}/api/emails/auth/google`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const authUrl = (response.data as { authUrl: string }).authUrl;
          window.location.href = authUrl;
        } catch (error) {
          console.error('Error creating bot:', error);
        }
      };

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
          </Stack>
            <Typography variant="h5" component="h5" align='left' gutterBottom ml={3}>
            Email Manager
            </Typography>
            <Typography variant="body1" component="p" align='left' ml={3}>
            View and manage your connected email accounts.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleCreateBot}
                sx={{ mt: 2, ml: 3 }}
            >
                Add Email Account
            </Button>
            <GetConnectedEmails />
        </Box>
      </Box>
    </AppTheme>
  );
}
