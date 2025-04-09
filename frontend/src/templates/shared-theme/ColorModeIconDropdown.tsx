import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

export default function ColorModeIconDropdown(props: IconButtonOwnProps) {
  const { mode, setMode } = useColorScheme();
  
  // Initial setup - if system is detected, convert to either light or dark
  React.useEffect(() => {
    if (mode === 'system') {
      // You can choose which mode to default to when system is detected
      // For this implementation, we're using dark as default
      setMode('dark');
    }
  }, []);

  // Toggle between light and dark modes on click
  const handleToggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  
  if (!mode || mode === 'system') {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={(theme) => ({
          verticalAlign: 'bottom',
          display: 'inline-flex',
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: theme.shape.borderRadius,
          border: '1px solid',
          borderColor: theme.palette.divider,
        })}
      />
    );
  }
  
  const getIcon = () => {
    return mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />;
  };

  const getTooltipText = () => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  };
  
  return (
    <Tooltip title={getTooltipText()}>
      <IconButton
        data-screenshot="toggle-mode"
        onClick={handleToggleMode}
        size="small"
        aria-label="toggle color mode"
        {...props}
      >
        {getIcon()}
      </IconButton>
    </Tooltip>
  );
}