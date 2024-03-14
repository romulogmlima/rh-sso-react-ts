import { ThemeConfig } from 'antd/es/config-provider/context'

const token = {
  colorPrimary: '#1351B4',
  colorPrimaryHover: '#265FBA',
  colorInfo: '#155BCB',
  colorSuccess: '#168821',
  colorWarning: '#FFCD07',
  colorError: '#E52207',
  colorTextBase: '#1e1e1e',
  sizeStep: 4,
  wireframe: false,
  borderRadius: 4,
  fontFamily: 'Rawline',
}

const components = {
  Select: {
    optionHeight: 57,
    optionLineHeight: 3,
    multipleItemBorderColor: 'red',
    optionSelectedFontWeight: 400,
    optionActiveBg: 'var(--gray-20)',
    optionSelectedBg: 'var(--blue-warm-vivid-50)',
    optionSelectedColor: 'var(--pure)',
    colorBorder: 'var(--gray-warm-40)',
  },
}

export const antdTheme: ThemeConfig = { token, components }