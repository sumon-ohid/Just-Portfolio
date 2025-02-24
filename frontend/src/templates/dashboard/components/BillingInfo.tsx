import * as React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

const BillingInfo: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Typography variant="body1">
        Visa ending in 1234
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Exp: 12/2027
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Billing Address
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body1">
            John Doe
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            1234 Elm Street
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Springfield, IL 62704
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            United States
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillingInfo;
