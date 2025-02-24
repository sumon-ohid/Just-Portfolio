import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ConnectedEmails() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleViewConnectedEmails = () => {
    navigate('/connected');
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <AttachEmailIcon />
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          Connected Emails
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          View and manage your connected email accounts.
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleViewConnectedEmails}
        >
          Connected Emails
        </Button>
      </CardContent>
    </Card>
  );
}
