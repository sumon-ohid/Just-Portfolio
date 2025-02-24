import * as React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const UnderConstruction: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        backgroundColor: 'background.default',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 600, p: 2, textAlign: 'center' }}>
        <CardContent>
          <ConstructionIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Under Construction
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            This page is coming soon. Stay tuned for updates!
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UnderConstruction;
