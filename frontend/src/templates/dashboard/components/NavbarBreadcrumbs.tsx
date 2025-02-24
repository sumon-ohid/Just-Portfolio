import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useLocation, Link } from 'react-router-dom';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1">Dashboard</Typography>
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Replace "dashboard" with "Home"
        const breadcrumbLabel = value === 'dashboard' ? 'Home' : value.charAt(0).toUpperCase() + value.slice(1);

        return last ? (
          <Typography key={to} variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
            {breadcrumbLabel}
          </Typography>
        ) : (
          <Link key={to} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="body1">
              {breadcrumbLabel}
            </Typography>
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}
