import { Link } from 'react-router-dom';
import LogoImage from 'src/assets/images/logos/logo.jpg'; // Importa la imagen JPG
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={LogoImage} alt="Logo" style={{ height: '100%', width: '100%' }} /> {/* Utiliza la imagen JPG */}
    </LinkStyled>
  )
};

export default Logo;
