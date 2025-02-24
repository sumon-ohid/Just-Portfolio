import * as React from 'react';
import { useState } from 'react';
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
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';
import {
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Paper,
  Button,
  TextField,
  Avatar,
  Divider,
  Alert,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Footer from '../marketing-page/components/Footer';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import Info from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import { useAuth } from '../../AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `settings-tab-${index}`,
    'aria-controls': `settings-tabpanel-${index}`,
  };
}

export default function SettingsPage(props: { disableCustomTheme?: boolean }) {
  const [tabValue, setTabValue] = useState(0);
  const { user, updateProfilePicture, updateUserName, updatePassword } = useAuth();
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState<'idle' | 'deleting' | 'success' | 'error'>('idle');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleProfilePictureChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      setProfilePicture(URL.createObjectURL(file));
      await updateProfilePicture(file);
    }
  };

  const handleProfileChange = async () => {
    try {
      await updateUserName(fullName);
      showAlert('Profile updated successfully', 'success');
    } catch (error) {
      showAlert('Error updating profile', 'error');
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      showAlert('New passwords do not match', 'error');
      return;
    }
    try {
      await updatePassword(currentPassword, newPassword);
      showAlert('Password updated successfully', 'success');
    } catch (error) {
      showAlert('Error updating password', 'error');
    }
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  const handleDeleteAccount = async () => {
    setDeletionStatus('deleting');
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      
      const response = await fetch(`${apiBaseUrl}/api/user/account/delete`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete account');

      setDeletionStatus('success');
      setTimeout(() => (window.location.href = '/'), 2000);
    } catch (error) {
      setDeletionStatus('error');
      setTimeout(() => setDeletionStatus('idle'), 2000);
    }
  };

  const isDarkMode = localStorage.getItem("mui-mode") === "dark";

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto',
            minHeight: '100vh',
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
          <Typography variant="h4" gutterBottom ml={3}>
            Settings
          </Typography>
          <Typography variant="body1" color="textSecondary" align="left" ml={3} mb={2}>
            Manage your account settings
          </Typography>
          <Box sx={{ mx: 3, mb: 3 }}>
            <Paper square>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}
              >
                <Tab icon={<PersonIcon />} label="Profile" {...a11yProps(0)} />
                <Tab icon={<LockIcon />} label="Security" {...a11yProps(1)} />
                <Tab icon={<PaymentIcon />} label="Billing" {...a11yProps(2)} />
              </Tabs>
            </Paper>

            {/* Profile Tab */}
            <TabPanel value={tabValue} index={0}>
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Profile Details
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      value={email}
                      variant="outlined"
                      fullWidth
                      disabled
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ width: 56, height: 56 }} src={profilePicture} />
                      <Button variant="outlined" component="label" startIcon={<PhotoCameraIcon />}>
                        Change Profile Picture
                        <input type="file" hidden accept="image/*" onChange={handleProfilePictureChange} />
                      </Button>
                    </Box>
                    <Box>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        Account Deletion
                        <Info sx={{ ml: 1, fontSize: 18, color: 'text.secondary' }} />
                        <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                          Deleting your account will remove all data permanently
                        </Typography>
                      </Typography>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 1 }}
                        onClick={() => setOpenDeleteDialog(true)}
                        startIcon={<DeleteIcon />}
                      >
                        Delete Account
                      </Button>
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleProfileChange}>
                      Save Profile
                    </Button>
                    {alertVisible && <Alert severity={alertType}>{alertMessage}</Alert>}
                  </Stack>
                </CardContent>
              </Card>
            </TabPanel>

            {/* Security Tab */}
            <TabPanel value={tabValue} index={1}>
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Change Password
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      placeholder="Current Password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      placeholder="New Password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      placeholder="Confirm New Password"
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handlePasswordChange}>
                      Update Password
                    </Button>
                    {alertVisible && <Alert severity={alertType}>{alertMessage}</Alert>}
                  </Stack>
                </CardContent>
              </Card>
            </TabPanel>

            {/* Billing Tab */}
            <TabPanel value={tabValue} index={2}>
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Billing Information
                  </Typography>
                  <Stack spacing={2}>
                    <TextField placeholder="Card Number" variant="outlined" fullWidth />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <TextField placeholder="Expiry Date" variant="outlined" fullWidth />
                      <TextField placeholder="CVV" variant="outlined" fullWidth />
                    </Box>
                    <Button variant="contained" color="primary">
                      Update Payment Method
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </TabPanel>
          </Box>

          {/* Delete Account Dialog */}
          <Dialog
            open={openDeleteDialog}
            onClose={() => deletionStatus === 'idle' && setOpenDeleteDialog(false)}
            aria-labelledby="delete-account-dialog"
          >
            <DialogTitle id="delete-account-dialog" sx={{ backgroundColor: isDarkMode ? '#000000 !important' : '#ffffff !important' }}>
              {deletionStatus === 'success' ? 'Account Deleted' : 
              deletionStatus === 'error' ? 'Deletion Error' : 'Confirm Account Deletion'}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: isDarkMode ? '#000000 !important' : '#ffffff !important' }}>
              <Box sx={{ textAlign: 'center', py: 4 }}>
                {deletionStatus === 'deleting' ? (
                  <>
                    <CircularProgress 
                      size={80} 
                      thickness={4}
                      sx={{ 
                        color: 'primary.main',
                        animation: 'pulse 1.5s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)', opacity: 1 },
                          '50%': { transform: 'scale(1.1)', opacity: 0.7 },
                          '100%': { transform: 'scale(1)', opacity: 1 },
                        }
                      }}
                    />
                    <Typography variant="h6" sx={{ mt: 3 }}>
                      Securely Deleting Your Data...
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      This may take a few moments. Please don't close this window.
                    </Typography>
                  </>
                ) : deletionStatus === 'success' ? (
                  <>
                    <CheckCircleIcon 
                      sx={{ 
                        fontSize: 80, 
                        color: 'success.main',
                        animation: 'scaleUp 0.5s ease-in-out',
                        '@keyframes scaleUp': {
                          '0%': { transform: 'scale(0)', opacity: 0 },
                          '100%': { transform: 'scale(1)', opacity: 1 },
                        }
                      }}
                    />
                    <Typography variant="h6" sx={{ mt: 3 }}>
                      Account Successfully Deleted!
                    </Typography>
                  </>
                ) : deletionStatus === 'error' ? (
                  <>
                    <ErrorIcon 
                      sx={{ 
                        fontSize: 80, 
                        color: 'error.main',
                        animation: 'shake 0.5s ease-in-out',
                        '@keyframes shake': {
                          '0%, 100%': { transform: 'translateX(0)' },
                          '25%': { transform: 'translateX(-5px)' },
                          '75%': { transform: 'translateX(5px)' },
                        }
                      }}
                    />
                    <Typography variant="h6" sx={{ mt: 3 }}>
                      Failed to Delete Account
                    </Typography>
                  </>
                ) : (
                  <>
                    <Box sx={{ position: 'relative', width: 100, height: 100, mx: 'auto' }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          border: '3px solid',
                          borderColor: 'error.main',
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': {
                            '0%': { transform: 'scale(0.95)', opacity: 0.7 },
                            '70%': { transform: 'scale(1.1)', opacity: 0.4 },
                            '100%': { transform: 'scale(0.95)', opacity: 0.7 },
                          }
                        }}
                      />
                      <DeleteIcon 
                        sx={{ 
                          fontSize: 60, 
                          color: 'error.main',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 3 }}>
                      Are You Absolutely Sure?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      This action cannot be undone. All your data will be permanently removed.
                    </Typography>
                  </>
                )}
              </Box>
            </DialogContent>
            <DialogActions sx={{ pb: 3, justifyContent: 'center', backgroundColor: isDarkMode ? '#000000 !important' : '#ffffff !important' }}>
              {deletionStatus === 'idle' && (
                <>
                  <Button 
                    onClick={() => setOpenDeleteDialog(false)} 
                    variant="outlined" 
                    sx={{ width: 120 }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleDeleteAccount}
                    variant="contained" 
                    color="error"
                    sx={{ width: 120, ml: 2 }}
                  >
                    Confirm
                  </Button>
                </>
              )}
            </DialogActions>
          </Dialog>

          <Footer />
        </Box>
      </Box>
    </AppTheme>
  );
}