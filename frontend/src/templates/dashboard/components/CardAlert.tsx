import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { useNavigate } from 'react-router-dom';


export default function CardAlert() {

  const navigate = useNavigate();

  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Boost your plan
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Upgrade to a premium plan to get access to more features.
        </Typography>
        <Button variant="contained" size="small" fullWidth onClick={() => navigate('/billing')}>
          Upgrade plan
        </Button>
      </CardContent>
    </Card>
  );
}
