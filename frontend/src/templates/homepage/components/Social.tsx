import React from "react";
import { Box } from "@mui/material";
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
        <div
          className={`profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 ${
            isDarkMode ? "border-gray-600" : "border-gray-400/50"
          }`}
        >
          {[
            { icon: "PXTY4q2Sq2lG", alt: "js", position: "left-[45px] -top-[4px]" },
            { icon: "13441", alt: "python", position: "right-[45px] -top-[4px]" },
            { icon: "40670", alt: "c", position: "-left-4 top-20" },
            { icon: "wPohyHO_qO1a", alt: "react", position: "-right-4 top-20" },
            { icon: "22813", alt: "docker", position: "bottom-8 -left-0" },
            { icon: "40669", alt: "c++", position: "bottom-8 -right-0" },
            { icon: "hsPbhkOH4FMe", alt: "node", position: "right-[40%] -bottom-4" },
          ].map(({ icon, alt, position }) => (
            <button
              key={alt}
              className={`profile_item ${position} absolute rounded-full cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 ${
                isDarkMode ? "border-gray-600 bg-gray-800" : "border-gray-400/50 bg-white"
              }`}
            >
              <span
                className={`block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] p-1 ${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                <img src={`https://img.icons8.com/?size=100&id=${icon}&format=png&color=000000`} alt={alt} />
              </span>
            </button>
          ))}

          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
            <div
              className={`w-full h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 ${
                isDarkMode ? "bg-black" : "bg-black"
              }`}
            >
              <Box
                component="img"
                src={profile}
                alt="Sitemark"
                sx={{ borderRadius: 10, height: 180, width: 180 }}
              />
            </div>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Social;
