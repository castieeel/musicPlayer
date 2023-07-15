import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import React from "react";
import * as S from "./nav.styles";
import { useThemeContext } from "../../../contexts/theme";
const { useState } = React;


export const Nav = () => {
  const { theme} = useThemeContext();
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <S.MainNav theme={theme}>
      <Logo />
      <Burger onClick={toggleVisibility} />
      {visible && <Menu />}
    </S.MainNav>
  );
};
