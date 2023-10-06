import { createGlobalStyle } from "styled-components";
import { colorPrimario } from "./Componentes/UI/variables";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif!important;
        margin: 0;
        padding: 0;
        text-decoration: none;  
    } 
    
    /* SCROLL */
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    body::-webkit-scrollbar {
        width: 5px;
        background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-thumb{
        background-color: ${colorPrimario};	
        border-radius: 1rem;
        background-image: -webkit-linear-gradient(45deg,
                            rgba(255, 255, 255, .2) 25%,
                            transparent 25%,
                            transparent 50%,
                            rgba(255, 255, 255, .2) 50%,
                            rgba(255, 255, 255, .2) 75%,
                            transparent 75%,
                            transparent)
    }
`
export default GlobalStyle