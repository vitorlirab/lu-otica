import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray);
  color: var(--black);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Airbnb Cereal App Medium', serif;
}

h1, h2, h3, h4, h5, h6, strong {
 font-family: 'Airbnb Cereal App Bold';
}

button{
  cursor: pointer;
}

:root {
  --gray: #f2f2f2;
  --dark-gray: #d1d0d0;
  --white: #ffffff;
  --border-gray: #ebebeb;
  --black: #212121;
  --red: #e51618;
  --table-color: #ffffff;
}
`;
