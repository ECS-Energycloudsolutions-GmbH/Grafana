import { NewThemeOptions } from '../createTheme';

const desertBloomTheme: NewThemeOptions = {
  name: 'Elbe Energie',
  colors: {
    mode: 'light',
    border: {
      weak: `rgba(28, 84, 140, 0.15)`,
      medium: `rgba(28, 84, 140, 0.25)`,
      strong: `rgba(28, 84, 140, 0.40)`,
    },
    text: {
      primary: '#050505',
      secondary: '#1C548C',
      disabled: `rgba(0, 0, 0, 0.38)`,
      link: '#00AF3F',
      maxContrast: '#000000',
    },
    primary: {
      main: '#1C548C',
      text: '#1C548C',
      border: '#154070',
      name: 'primary',
      shade: '#154070',
      transparent: '#1C548C26',
      contrastText: '#FFFFFF',
      borderTransparent: '#1C548C40',
    },
    secondary: {
      main: '#F5F7FA',
      text: '#1C548C',
      border: '#E1E6EB',
      name: 'secondary',
      shade: '#D8E0E8',
      transparent: '#FFFFFF26',
      contrastText: '#1C548C',
      borderTransparent: '#FFFFFF40',
    },
    info: {
      main: '#1C548C',
    },
    success: {
      main: '#00AF3F',
    },
    warning: {
      main: '#1C548C',
    },
    background: {
      canvas: '#EEF3F7',
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      elevated: '#FFFFFF',
    },
    action: {
      hover: `rgba(28, 84, 140, 0.08)`,
      selected: `rgba(28, 84, 140, 0.16)`,
      selectedBorder: '#00AF3F',
      focus: `rgba(28, 84, 140, 0.24)`,
      hoverOpacity: 0.08,
      disabledText: `rgba(0, 0, 0, 0.38)`,
      disabledBackground: `rgba(0, 0, 0, 0.06)`,
      disabledOpacity: 0.38,
    },
    gradients: {
      brandHorizontal: 'linear-gradient(90deg, #00AF3F 0%, #1C548C 100%)',
      brandVertical: 'linear-gradient(180deg, #00AF3F 0%, #1C548C 100%)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.03,
    tonalOffset: 0.15,
  },
  shape: {
    borderRadius: 6,
  },
};

export default desertBloomTheme;
