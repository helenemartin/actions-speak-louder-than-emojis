import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F0E6DB;
        font-size: 16px;
        margin:0;
    }
`;