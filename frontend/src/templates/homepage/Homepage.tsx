import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sitemark from './components/logo';
import "./style.css"; // custom styles
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import programmer from "../../assets/Programmer-bro.png";
import { Box } from "@mui/system";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <Box 
          component="img"
          src={programmer}
          alt="Programmer"
          sx={{ width: 300, height: 300, borderRadius: 1, mt: 2, display: "block", margin: "auto", justifyContent: "center", alignItems: "center", alignContent: "center" }}
        />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </AppTheme>
  );
}
