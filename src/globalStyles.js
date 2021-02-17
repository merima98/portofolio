import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #001920;

    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    }
`;
export default GlobalStyle;
