import type { GlobalThemeOverrides } from 'naive-ui'

export const defaultTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4456FE',
  },

  Button: {
    textColor: '#FFFFFF',
    fontWeight: 600,

    borderRadiusTiny: '8px',
    borderRadiusSmall: '8px',
    borderRadiusMedium: '8px',
    borderRadiusLarge: '8px',

    colorPrimary: '#4456FE',
    colorHoverPrimary: '#4456FE',
    colorFocusPrimary: '#4456FE',
    colorPressedPrimary: '#4456FE',
    borderPrimary: 'none',
    borderHoverPrimary: 'none',
    borderFocusPrimary: 'none',
    borderPressedPrimary: 'none',

    colorSecondary: '#232640',
    colorSecondaryHover: '#232640',

    heightMedium: '40px',
  },

  Input: {
    borderRadius: '12px',
    border: 'none',
    borderHover: 'none',
    borderFocus: 'none',

    paddingMedium: '20px 18px',

    heightMedium: '60px',

    textColor: '#FFFFFF',

    color: '#080911',
    colorFocus: '#080911',
    loadingColor: '#080911',

    placeholderColor: '#3F446D',
  },

  Form: {
    labelTextColor: '#FFFFFF',
    labelFontWeight: 600,
  },
}
