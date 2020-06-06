import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color:black;
}

li {
  list-style: none;
}
`;

export default GlobalStyle;
