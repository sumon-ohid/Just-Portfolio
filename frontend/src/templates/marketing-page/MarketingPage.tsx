import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./style.css";
import CardAlert from "../dashboard/components/CardAlert";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AiCard from "./components/AiCard";
import { Policy } from "@mui/icons-material";
import { Box, fontStyle } from "@mui/system";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import tiredImg from "../../assets/Tiredness.svg";
import foundAppImg from "../../assets/Chatbot.svg";
import registeredImg from "../../assets/happy.svg";
import happyImg from "../../assets/holiday.svg";
import Container from "@mui/material/Container";

const UserJourney = () => (
  <Box sx={{ py: 8, bgcolor: "background.default" }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        How Mr. John transformed his business
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{ mt: 2, mb: 6, ml: "auto", mr: "auto", maxWidth: 600 }}
      >
        Mr. John is a small business owner who was tired of replying to emails
        manually. Then, he discovered our AI automation magic and registered his
        business email. Now, he no longer has to worry about emails and can
        focus on doing what he loves.
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
        wrap="nowrap"
      >
        {[
          { image: tiredImg, label: "Tired of manual work" },
          { image: foundAppImg, label: "AI Automation Magic" },
          { image: registeredImg, label: "No more email to reply" },
          { image: happyImg, label: "Do things you love" },
        ].map((step, index) => (
          <React.Fragment key={step.label}>
            <Grid component="div">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={step.image}
                  alt={step.label}
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: 4,
                    borderColor: "divider",
                    // boxShadow: 3,
                    m: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ maxWidth: 200 }}
                >
                  {step.label}
                </Typography>
              </Box>
            </Grid>
            {index < 3 && (
              <Grid
                component="div"
                sx={{
                  display: { xs: "none", md: "block" },
                  mx: { md: -4 },
                  color: "text.secondary",
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 40, opacity: .4 }} />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        {/* <Divider /> */}
        {/* <Divider />
        <Highlights /> */}
        <UserJourney />
        <AiCard />
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ mt: -6, mb: 3, fontWeight: "normal", fontSize: ".8rem" }}
        >
          Powered by powerful AI
        </Typography>
        <Features />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <FAQ />
        {/* <Divider /> */}
        <Box
          sx={{
            pt: 6,
            pb: 6,
            m: 2,
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            <Policy sx={{ fontSize: 40 }} />
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We take your privacy seriously. We do not share your data with third
            parties.
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Check our{" "}
            <a href="/privacy" style={{ textDecoration: "underline" }}>
              Privacy Policy{" "}
            </a>
            for more information.
          </Typography>
        </Box>
        <Footer />
      </div>
    </AppTheme>
  );
}
