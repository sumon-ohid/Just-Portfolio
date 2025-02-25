import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import profile from "../../../assets/profile.jpg";

const Social = () => {

    const isDarkMode = localStorage.getItem("mui-mode") === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
        mt: 1,
      }}
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
             <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="js" />
            </span>
          </button>

          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="python" />
            </span>
          </button>

          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src="https://img.icons8.com/?size=100&id=40670&format=png&color=000000" alt="c" />
            </span>
          </button>

          <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
             <img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" alt="react" />
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000" alt="docker" />
            </span>
          </button>

          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000" alt="c++" />
            </span>
          </button>

          <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="node" />
            </span>
          </button>

          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
            <div className="w-full bg-black h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <Box component="img" src={profile} alt="Sitemark" sx={{borderRadius: 10, height: 180, width: 180}} />
              <span className="w-20 h-20 inline-block">
              </span>
            </div>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Social;
