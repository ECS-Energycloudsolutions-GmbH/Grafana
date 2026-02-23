import { NewThemeOptions } from '../createTheme';

/**
 * Torkel's GrafanaCon theme
 * very WIP state
 */

const whiteBase = `0, 0, 0`;
const secondaryBase = `0, 139, 69`;

//const brandMain = '#3d71d9';
//const brandText = '#6e9fff';
const brandMain = '#008B45';
const brandText = '#F29725';
const disabledText = `rgba(${whiteBase}, 0.38)`;

const gloomTheme: NewThemeOptions = {
  name: 'WertE',
  colors: {
    mode: 'light',
    border: {
      weak: `rgba(${whiteBase}, 0.12)`,
      medium: `rgba(${whiteBase}, 0.20)`,
      strong: `rgba(${secondaryBase}, 0.30)`,
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: `rgba(${whiteBase}, 0.38)`,
      link: brandMain,
      maxContrast: '#000000',
    },
    primary: {
      main: brandMain,
      text: brandText,
      border: brandMain,
      name: 'primary',
    },
    secondary: {
      main: '#F5F5F5',
      shade: '#E0E0E0',
      transparent: `rgba(${secondaryBase}, 0.08)`,
      text: '#333333',
      contrastText: '#000000',
      border: '#E0E0E0',
    },
    info: {
      main: '#F3921F',
      text: '#F3921F',
      border: '#F3921F',
    },
    background: {
      canvas: '#F5F5F5',
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      elevated: '#FFFFFF',
    },
    action: {
      hover: `rgba(${secondaryBase}, 0.08)`,
      selected: `rgba(${secondaryBase}, 0.16)`,
      selectedBorder: brandMain,
      focus: `rgba(${secondaryBase}, 0.12)`,
      hoverOpacity: 0.08,
      disabledText: disabledText,
      disabledBackground: `rgba(${whiteBase}, 0.12)`,
      disabledOpacity: 0.38,
    },

    // gradients: {
    //   brandHorizontal: 'linear-gradient(270deg, #ff934d 0%, #FEAC34 100%)',
    //   brandVertical: 'linear-gradient(0.01deg, #ff934d 0.01%, #FEAC34 99.99%)',
    // },

    contrastThreshold: 3,
    hoverFactor: 0.03,
    tonalOffset: 0.15,
  },
  shape: {
    borderRadius: 5,
  },
};

export default gloomTheme;
