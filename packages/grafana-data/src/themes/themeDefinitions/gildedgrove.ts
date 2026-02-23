import { NewThemeOptions } from '../createTheme';

const gildedGroveTheme: NewThemeOptions = {
  name: 'ECS',
  colors: {
    mode: 'light',
    border: {
      weak: `rgba(124, 43, 207, 0.20)`,
      medium: `rgba(124, 43, 207, 0.30)`,
      strong: `rgba(124, 43, 207, 0.50)`,
    },
    text: {
      primary: '#240046',
      secondary: '#3D004D',
      disabled: `rgba(0, 0, 0, 0.38)`,
      link: '#D97706',
      maxContrast: '#000000',
    },
    primary: {
      main: '#8F4EDB',
      text: '#FFFFFF',
      border: '#8F4EDB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EDE7F6',
      shade: '#D1C4E9',
      transparent: `rgba(143, 78, 219, 0.08)`,
      text: '#240046',
      contrastText: '#240046',
      border: '#D1C4E9',
    },
    info: {
      main: '#52E8FF',
      text: '#000871',
      border: '#52E8FF',
    },
    background: {
      canvas: '#F5F0E6',
      primary: '#FFFFFF',
      secondary: '#EDE7F6',
      elevated: '#FFFFFF',
    },
    action: {
      hover: `rgba(143, 78, 219, 0.08)`,
      selected: `rgba(143, 78, 219, 0.16)`,
      selectedBorder: '#FE9B1A',
      focus: `rgba(143, 78, 219, 0.12)`,
      hoverOpacity: 0.08,
      disabledText: `rgba(0, 0, 0, 0.38)`,
      disabledBackground: `rgba(0, 0, 0, 0.12)`,
      disabledOpacity: 0.38,
    },
    gradients: {
      brandHorizontal: 'linear-gradient(270deg, #FE9B1A 0%, #7C2BCF 100%)',
      brandVertical: 'linear-gradient(0deg, #FE9B1A 0%, #7C2BCF 100%)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.03,
    tonalOffset: 0.15,
  },
  shape: {
    borderRadius: 5,
  },
};

export default gildedGroveTheme;
