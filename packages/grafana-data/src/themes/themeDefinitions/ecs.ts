import { NewThemeOptions } from '../createTheme';

const theme: NewThemeOptions = {
  name: 'ECS',
  colors: {
    mode: 'light',
    primary: {
      main: '#4A3270',
    },
    secondary: {
      main: '#F4F5F7',
      text: '#2D1B4E',
      border: '#E2E4EA',
    },
    background: {
      canvas: '#F4F5F7',
      primary: '#FFFFFF',
      secondary: '#F4F5F7',
      elevated: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#6C6B7B',
      disabled: '#a3a2af',
      link: '#4A3270',
      maxContrast: '#000000',
    },
    border: {
      weak: '#EDEDF0',
      medium: '#E2E4EA',
      strong: '#4A3270',
    },
    action: {
      hover: 'rgba(74, 50, 112, 0.05)',
      selected: 'rgba(74, 50, 112, 0.09)',
      selectedBorder: '#E8760E',
      focus: 'rgba(74, 50, 112, 0.07)',
      hoverOpacity: 0.08,
      disabledText: '#a3a2af',
      disabledBackground: 'rgba(26, 26, 46, 0.04)',
      disabledOpacity: 0.38,
    },
    warning: {
      main: '#EAB308',
    },
    gradients: {
      brandHorizontal: 'linear-gradient(90deg, #2D1B4E, #4A3270)',
      brandVertical: 'linear-gradient(0deg, #4A3270, #E8760E)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.04,
    tonalOffset: 0.15,
  },
};

export default theme;
