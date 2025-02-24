import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import HighlightedCard from './HighlightedCard';
import ConnectedEmails from './ConnectedEmails';
import CustomizedDataGrid from './CustomizedDataGrid';
import StatCard, { StatCardProps } from './StatCard';
import axios from 'axios';
import Footer from '../../marketing-page/components/Footer';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default function MainGrid() {
  const [data, setData] = React.useState<StatCardProps[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get<StatCardProps[]>(`${apiBaseUrl}/api/emails/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching stats data:', error);
      setError('Error fetching stats data');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ConnectedEmails />
        </Grid>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* <SessionsChart /> */}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* <PageViewsBarChart /> */}
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Emails Sent
      </Typography>
      <Grid size={{ xs: 12, lg: 9 }}>
        <CustomizedDataGrid />
      </Grid>
      {/* <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
        
      </Grid> */}
      {/* <Copyright sx={{ my: 4 }} /> */}
    </Box>
  );
}