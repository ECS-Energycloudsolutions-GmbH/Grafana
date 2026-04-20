import { NewThemeOptions } from '../createTheme';

const theme: NewThemeOptions = {
  name: 'WertE',
  colors: {
    mode: 'light',
    primary: {
      main: '#ee9218',
    },
    secondary: {
      main: '#F1F3F5',
      text: '#212529',
      border: '#DEE2E6',
    },
    background: {
      canvas: '#F1F3F5',
      primary: '#FFFFFF',
      secondary: '#F1F3F5',
      elevated: '#FFFFFF',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
      disabled: '#adb5bd',
      link: '#3D1E6D',
      maxContrast: '#000000',
    },
    border: {
      weak: '#E9ECEF',
      medium: '#DEE2E6',
      strong: '#ee9218',
    },
    action: {
      hover: 'rgba(33, 37, 41, 0.04)',
      selected: 'rgba(238, 146, 24, 0.08)',
      selectedBorder: '#ee9218',
      focus: 'rgba(238, 146, 24, 0.06)',
      hoverOpacity: 0.08,
      disabledText: '#adb5bd',
      disabledBackground: 'rgba(33, 37, 41, 0.04)',
      disabledOpacity: 0.38,
    },
    warning: {
      main: '#dc2626',
    },
    gradients: {
      brandHorizontal: 'linear-gradient(90deg, #3D1E6D, #ee9218)',
      brandVertical: 'linear-gradient(0deg, #ee9218, #f5b34a)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.04,
    tonalOffset: 0.15,
  },
};

export default theme;
