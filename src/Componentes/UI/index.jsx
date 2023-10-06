
import styled from 'styled-components'; 
import { colorPrimario, fondoOscuro, colorGray, contenidoClaro } from './variables';

//HEADER
export const StyleHeader = styled.header`
    background-color: ${fondoOscuro};
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    height: 10vh;
    align-items: center;
`

//FOOTER
export const StyleFooter = styled.footer`
    background-color: ${fondoOscuro};
    color: ${colorPrimario};
    border-top: 2px solid ${colorPrimario};
    display: flex;
    justify-content: center; 
    align-items: center;    
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
`

//LOGO
export const Logo = styled.img`
    height: 30px; 
`

//IMAGE
export const ImageBanner = styled.img`
    border-radius: 1rem; 
`

//BUTTON
export const btn = styled.button`
    border: none;
    padding: .5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`

//BUTTON | OUTLINE
export const ButtonOutlined = styled(btn)`
    background-color: transparent;
    border: 1px solid ${contenidoClaro};
    color:${contenidoClaro};
    &:hover{
        background-color: transparent;
        border: 1px solid ${colorPrimario};
        color:${colorPrimario};
    }
`

//BUTTON | SAVE
export const BtnSave = styled(btn)`
    background-color:${colorPrimario};
    color:${contenidoClaro};
    &:hover{
        background-color: ${colorPrimario};
        color:${contenidoClaro};
    }
`

//BUTTON | DELETE
export const BtnDelete = styled(btn)`
    background-color:${colorGray};
    color:#000000E5;
    &:hover{
        background-color:#9b9a9a;
        color:#000000E5;
    }
`