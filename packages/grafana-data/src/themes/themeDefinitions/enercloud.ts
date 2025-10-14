import { NewThemeOptions } from '../createTheme';

const enercloudTheme: NewThemeOptions = {
  name: 'Enercloud',
  colors: {
    mode: 'light',
    border: {
      weak: 'rgba(128, 27, 94, 0.12)',
      medium: 'rgba(230, 3, 238, 0.2)',
      strong: 'rgba(250, 4, 197, 0.63)',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: 'rgba(0, 0, 0, 0.5)',
      link: '#1A82E2',
      maxContrast: '#000000',
    },
    primary: {
      main: '#FF6F61',
      text: '#FE6F61',
      border: '#E55B4D',
      name: 'primary',
      shade: '#E55B4D',
      transparent: '#FF6F6126',
      contrastText: '#FFFFFF',
      borderTransparent: '#FF6F6140',
    },
    secondary: {
      main: '#FFFFFF',
      text: '#695f53',
      border: '#d9cec0',
      name: 'secondary',
      shade: '#d9cec0',
      transparent: '#FFFFFF26',
      contrastText: '#4c4339',
      borderTransparent: '#FFFFFF40',
    },
    info: {
      main: '#1A82E2',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
    background: {
      canvas: '#FFF8F0',
      primary: '#FFFFFF',
      secondary: '#f9f3e8',
      elevated: '#FFFFFF',
    },
    action: {
      hover: 'rgba(140, 134, 168, 0.12)',
      selected: 'rgba(70, 61, 151, 0.36)',
      selectedBorder: '#FF6F61',
      focus: 'rgba(68, 168, 163, 0.5)',
      hoverOpacity: 0.08,
      disabledText: 'rgba(168, 156, 134, 0.5)',
      disabledBackground: 'rgba(168, 156, 134, 0.06)',
      disabledOpacity: 0.38,
    },

    gradients: {
      brandHorizontal: 'linear-gradient(270deg,rgb(54, 158, 132) 0%, rgb(96, 248, 26) 100%)',
      brandVertical: 'linear-gradient(0deg, rgb(97, 107, 255) 0%, rgb(17, 150, 238) 100%)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.03,
    tonalOffset: 0.15,
  },
  shape: {
    borderRadius: 6,
  },
};

export default enercloudTheme;
