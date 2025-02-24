import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import Footer from '../marketing-page/components/Footer';

const teamMembers = [
  {
    name: 'Md Ohiduzzaman Sumon',
    role: 'Founder',
    image: 'https://i.ibb.co/Ps3KsPVy/IMG-8313-1.jpg',
    bio: 'Great problem solver, passionate about technology, and always eager to learn new things.',
    quote: '"The best way to predict the future is to create it."',
  },
  // Add more team members here when needed
];

export default function AboutPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
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
          <Box sx={{ mx: 3, mb: 3 }}>
            <Typography variant="h4" ml={1} gutterBottom>
              About Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, borderRadius: 1, border: 1, borderColor: 'divider', flexDirection: 'column' }}>
            <Typography variant="body1" color="textSecondary" align="left" ml={1} paragraph>
              Replai is an AI-driven email automation platform that helps businesses manage their email communication more effectively. 
              Our platform leverages advanced machine learning algorithms to analyze incoming emails, generate intelligent responses, and automate repetitive tasks. 
              By integrating with your existing email client, Replai enables you to respond to emails faster, reduce manual effort, and improve customer satisfaction.
            </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" ml={1} gutterBottom>
              Our Mission
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, borderRadius: 1, border: 1, borderColor: 'divider', flexDirection: 'column' }}>
              
              <Typography variant="body1" color="textSecondary" align="left" ml={1} paragraph>
              At Replai, we empower developers and businesses to streamline email communication with AI-driven automation.
              Our goal is to provide intelligent, efficient, and personalized email responses that save time, enhance productivity, 
              and drive success. With cutting-edge AI technology, seamless integration, and dedicated support, 
              we help you stay ahead by transforming the way you manage your emails.
              </Typography>

              <Typography variant="body1" color="textSecondary" align="left" ml={1} paragraph>
                Our vision is to be the leading provider of AI-driven email automation solutions that revolutionize the way businesses communicate. 
                We aim to deliver innovative, reliable, and scalable products that transform the email experience for users worldwide.
              </Typography>
    
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" ml={1} gutterBottom>
              Meet the Team
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Stack direction="column" alignItems="center" spacing={2}>
                        <Avatar alt={member.name} src={member.image} sx={{ width: 150, height: 150, alignContent: 'center', justifyContent: 'center', mt: 1 }} />
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {member.role}
                        </Typography>
                        <Typography variant="body2" align="center">
                          {member.bio}
                        </Typography>
                        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', fontWeight: 'bold', p: 2 }}>
                          {member.quote}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" ml={1} gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" color="textSecondary" align="left" ml={1} paragraph>
              If you have any questions or would like to learn more about our services, please feel free to reach out to us.
            </Typography>
            <Button variant="contained" color="primary" sx={{ ml: 1 }} href="https://www.linkedin.com/in/sumon-md-ohiduzzaman/" target="_blank">
              Get in Touch
            </Button>
          </Box>
          <Footer />
        </Box>
      </Box>
    </AppTheme>
  );
}