import * as React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssessmentIcon from '@mui/icons-material/Assessment';

const PlanDetails: React.FC = () => {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        mt: 2,
        width: 300,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography variant="h5" component="div">
            Free Plan
          </Typography>
          <Chip label="Current" color="success" variant="outlined" />
        </Box>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          $0 / month
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" gutterBottom>
          Features:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="1 email account" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="10 emails per month" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Help center access" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Email support" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

const CustomerDetails: React.FC = () => {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        mt: 2,
        width: 300,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Customer Details
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <PersonIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="John Doe" secondary="Name" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <EmailIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="john.doe@example.com" secondary="Email" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CalendarTodayIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Member since: Jan 2020" secondary="Joined" />
          </ListItem>
        </List>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" size="small">
            Edit Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const UsageSummary: React.FC = () => {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        mt: 2,
        width: 300,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Usage Summary
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AssessmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Connected Accounts: 1" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AssessmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Emails Sent: 50" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AssessmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Emails Remaining: 10" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <AssessmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Data Usage: 1401 / 5000" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

const PlanDetailsWithCustomer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        my: 2,
      }}
    >
      <PlanDetails />
      <CustomerDetails />
      <UsageSummary />
    </Box>
  );
};

export default PlanDetailsWithCustomer;
