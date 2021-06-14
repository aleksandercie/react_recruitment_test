import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
html{
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: rgb(252,186,3);
    background: linear-gradient(90deg, rgba(252,186,3,1) 0%, rgba(255,141,0,1) 100%);
  }
`;
 
export default GlobalStyle;