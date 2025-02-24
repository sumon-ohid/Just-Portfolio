import * as React from 'react';
import Box from '@mui/material/Box';
import logo from '../../../../logo/logo_light.png';

export default function SitemarkIcon() {
  return (
    <Box
      component="img"
      src={logo}
      alt="Logo"
      sx={{ width: 110, height: 40, display: 'block', ml: 1 }}
    />
  );
}
