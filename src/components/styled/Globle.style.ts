import { createGlobalStyle } from 'styled-components';
const GlobleStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body{
    font-family: 'Noto Sans', sans-serif;
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.primary.contrastText};
  }
`

export default GlobleStyle;