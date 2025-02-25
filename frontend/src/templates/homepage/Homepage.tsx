import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sitemark from "./components/logo";
import "./style.css"; // custom styles
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import programmer from "../../assets/Programmer-bro.png";
import { Box } from "@mui/system";

export function Github() {
  return (
    <button className="button">
      <p className="button__text">
        <span style={{ "--index": 0 } as React.CSSProperties}>C</span>
        <span style={{ "--index": 1 } as React.CSSProperties}>H</span>
        <span style={{ "--index": 2 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 3 } as React.CSSProperties}>C</span>
        <span style={{ "--index": 4 } as React.CSSProperties}>K</span>
        <span style={{ "--index": 5 } as React.CSSProperties}> </span>
        <span style={{ "--index": 6 } as React.CSSProperties}>M</span>
        <span style={{ "--index": 7 } as React.CSSProperties}>Y</span>
        <span style={{ "--index": 8 } as React.CSSProperties}> </span>
        <span style={{ "--index": 9 } as React.CSSProperties}>G</span>
        <span style={{ "--index": 10 } as React.CSSProperties}>I</span>
        <span style={{ "--index": 11 } as React.CSSProperties}>T</span>
        <span style={{ "--index": 12 } as React.CSSProperties}>H</span>
        <span style={{ "--index": 13 } as React.CSSProperties}>U</span>
        <span style={{ "--index": 14 } as React.CSSProperties}>B</span>
        <span style={{ "--index": 15 } as React.CSSProperties}> </span>
        <span style={{ "--index": 16 } as React.CSSProperties}>Y</span>
        <span style={{ "--index": 17 } as React.CSSProperties}>O</span>
      </p>

      <div className="button__circle">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon"
          width="14"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon button__icon--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
}

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
          sx={{
            width: 300,
            height: 300,
            borderRadius: 1,
            mt: 2,
            display: "block",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </AppTheme>
  );
}
