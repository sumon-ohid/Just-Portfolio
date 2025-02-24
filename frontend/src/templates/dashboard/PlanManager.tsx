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
} from '@mui/material';
import Footer from '../marketing-page/components/Footer';

// Placeholder components – replace with your actual components
import PlanDetailsWithCustomer from './components/PlanDetails';
import Pricing from './components/Pricing';
import UnderConstruction from './components/ComingSoon';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function PlanBillingManagement(props: { disableCustomTheme?: boolean }) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
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
          <Header/>
          </Stack>
          <Box sx={{ mx: 3, mb: 3 }}>
            <Typography variant="h4" ml={1}>Plan & Billing</Typography>
            <Typography variant="body1" color="textSecondary" align='left' ml={1}>
              Manage your subscription and billing details
            </Typography>
            <UnderConstruction />
            {/* <PlanDetailsWithCustomer />
            <Pricing />
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Payment Method
                  </Typography>
                  <Typography variant="body1">
                    Comming Soon..
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Exp: never
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>
                    Update Payment Method
                  </Button>
                </CardContent>
              </Card>
            </Box> */}
          </Box>
        <Footer />
        </Box>
      </Box>
    </AppTheme>
  );
}
