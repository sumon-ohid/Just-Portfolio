import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sitemark from './components/logo';
import "./style.css"; // custom styles
import Education from "./components/Education";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <Education />
        <Footer />
      </div>
    </AppTheme>
  );
}
