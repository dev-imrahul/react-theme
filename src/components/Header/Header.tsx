import { FC, useContext } from 'react';
import { HeaderStyled } from '../styled';
import SwitchBtn from '../Switch-btn/Switch-btn';
interface HeaderProps {}


const Header: FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <SwitchBtn />
    </HeaderStyled>
  )
};

export default Header;
