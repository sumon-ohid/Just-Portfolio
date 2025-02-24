import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Hero from './components/Hero';
import FAQ from './components/FAQ';

export default function PrivacyTermsPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container maxWidth="md" sx={{ mt: 20, mb: 8 }}>
        <Card variant="outlined" sx={{ p: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              Our AI Email Agent requires access to your Google account for reading and sending emails on your behalf, but only if you grant permission. 
              We strictly follow Google OAuth security guidelines to protect your data. We do not store, share, or misuse your emails. Your access can be revoked anytime via Google account settings.
            </Typography>
            <Typography variant="body1" paragraph>
              We collect minimal data necessary for functionality, such as your email content and sender details. This data is processed in real-time and is not retained beyond its intended use.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ p: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              GDPR Compliance
            </Typography>
            <Typography variant="body1" paragraph>
              If you are located in the European Union, we process your personal data in accordance with the General Data Protection Regulation (GDPR). 
              You have the right to access, rectify, or delete your personal data. You can also request restrictions on processing or object to data processing.
            </Typography>
            <Typography variant="body1" paragraph>
              If you wish to exercise any of these rights or have concerns regarding your data, please contact us at [contact email].
            </Typography>
            <Typography variant="body1" paragraph>
              We ensure appropriate security measures to protect your data and comply with applicable legal requirements.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Terms & Conditions
            </Typography>
            <Typography variant="body1" paragraph>
              By using our AI Email Agent, you agree to grant necessary access to your email account for automated replies. You are responsible for reviewing AI-generated responses before sending.
            </Typography>
            <Typography variant="body1" paragraph>
              You must not use the service for illegal or unethical activities. We reserve the right to suspend access if misuse is detected.
            </Typography>
            <Typography variant="body1" paragraph>
              We may update these terms from time to time. Continued use of the service implies acceptance of the latest version.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <FAQ />
      <Footer />
    </AppTheme>
  );
}
