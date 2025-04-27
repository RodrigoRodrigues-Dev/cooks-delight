import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    font-size: 14px;
  }
`;
