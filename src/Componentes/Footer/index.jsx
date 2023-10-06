import { StyleFooter } from "../UI";
import { img_Logo } from "../UI/images";

const Footer = () => {
    return (
        <StyleFooter>
            <img width={150} src={img_Logo} alt="Aluraflix"/>
            <p>Desarrollado por Lenny Loor | 2023</p>
        </StyleFooter>
    )
}
export default Footer