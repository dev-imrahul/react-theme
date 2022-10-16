import { DefaultTheme } from "styled-components";
interface Itheme {
  type: 'dark' | 'light'
}
const INITIAL_THEME = ({type}:Itheme): DefaultTheme  => {
  return {
    borderRadius: '10px',
    palette: {
      primary: {
        main: type === 'dark' ? '#2C3333' : '#fff',
        contrastText: type === 'dark' ? '#fff' : '#2C3333',
      },
      secondary: {
        main: type === 'dark' ? '#395B64' : '#EEF1FF',
        contrastText: type === 'dark' ? '#EEF1FF' : '#395B64',
      }
    }
  }
};

export default INITIAL_THEME;