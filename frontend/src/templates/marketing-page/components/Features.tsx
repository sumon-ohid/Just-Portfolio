import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ailight from '../../../assets/aitrain-light.png';
import aidark from '../../../assets/aitrain-dark.png';
import dashlight from '../../../assets/dash-light.png';
import dashdark from '../../../assets/dash-dark.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 123, 255, 1);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'We provide a beautify and easy to use dashboard for you to monitor your data.',
    imageLight: `url(${dashlight})`,
    imageDark: `url(${dashdark})`,
  },
  {
    icon: <AutoFixHighIcon />,
    title: 'Custom AI Training',
    description:
      'Train your AI with text input, file and website. We use the latest encryption technology to keep your data safe.',
    imageLight: `url(${ailight})`,
    imageDark: `url(${aidark})`,
  },
  // {
  //   icon: <DevicesRoundedIcon />,
  //   title: 'Available on all platforms',
  //   description:
  //     'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
  //   imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
  //   imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
  // },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ 
        display: 'flex',
        gap: 1,
        overflow: 'auto',
        pb: 1,
        mx: -2,
        px: 2,
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        {items.map(({ title }, index) => (
          <Chip
            size={isSmallMobile ? 'small' : 'medium'}
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
            sx={{ 
              flexShrink: 0,
              '&:first-of-type': { ml: 'auto' },
              '&:last-of-type': { mr: 'auto' }
            }}
          />
        ))}
      </Box>
      <Card variant="outlined" sx={{ overflow: 'visible' }}>
        <Box
          component="div"
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: { xs: 200, sm: 280 },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            mx: 2,
            mt: 2,
            backgroundImage: 'var(--items-imageLight)',
            animation: `${glow} 2s infinite`,
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={{
            '--items-imageLight': items[selectedItemIndex].imageLight,
            '--items-imageDark': items[selectedItemIndex].imageDark,
          } as React.CSSProperties}
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ 
              color: 'text.primary', 
              fontWeight: 'medium',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary', 
              mb: 1.5,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 6, sm: 12, md: 16 } }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: { md: 1200 },
        mx: 'auto',
        px: { md: 4 }
      }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ 
            color: 'text.primary',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          Features
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            color: 'text.secondary',
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: '0.875rem', md: '1rem' },
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          Here are some of the features we provide to help you to make things easier.
        </Typography>
        <Box sx={{ 
          width: '100%',
          maxWidth: { md: '60%', lg: '50%' },
          mb: { xs: 4, sm: 6, md: 8 }
        }}>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            gap: { xs: 4, md: 6 },
            alignItems: 'flex-start',
          }}
        >
          <Box sx={{ 
            width: '100%',
            maxWidth: { md: '55%' },
            flexShrink: 0,
            position: { md: 'sticky' },
            top: 100
          }}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                width: '100%',
                display: { xs: 'none', sm: 'flex' },
                aspectRatio: '1.2',
                overflow: 'hidden',
              }}
            >
              <Box
                component="div"
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'var(--items-imageLight)',
                  animation: `${glow} 2s infinite`,
                  ...theme.applyStyles('dark', {
                    backgroundImage: 'var(--items-imageDark)',
                  }),
                  borderRadius: 1,
                })}
                style={{
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                } as React.CSSProperties}
              />
            </Card>
          </Box>

          <Box sx={{ 
            flex: 1,
            width: '100%',
            maxWidth: { md: '45%' }
          }}>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: { xs: 2, md: 3 },
                height: '100%',
              }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Box
                  key={index}
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={[
                    (theme) => ({
                      p: { sm: 2, md: 3 },
                      height: '100%',
                      width: '100%',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        backgroundColor: theme.palette.action.hover,
                      },
                    }),
                    selectedItemIndex === index && {
                      backgroundColor: 'action.selected',
                      boxShadow: 2,
                    },
                  ]}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    }}
                  >
                    {React.cloneElement(icon, {
                      sx: { fontSize: isDesktop ? '2rem' : '1.5rem' }
                    })}
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontSize: { sm: '1.1rem', md: '1.25rem' },
                        fontWeight: 600 
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: { sm: '0.875rem', md: '1rem' },
                        lineHeight: 1.5 
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <MobileLayout
              selectedItemIndex={selectedItemIndex}
              handleItemClick={handleItemClick}
              selectedFeature={selectedFeature}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}