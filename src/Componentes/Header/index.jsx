import React from "react";
import { ButtonOutlined, StyleHeader, Logo } from "./../UI/index";
import { img_Logo } from "../UI/images";

const Header = () => {
  return (
    <StyleHeader>
      <Logo src={img_Logo} alt="Aluraflix" />
      <div>
        <ButtonOutlined type='submit'>Nuevo Video</ButtonOutlined>
      </div>
    </StyleHeader>
  );
};

export default Header;
