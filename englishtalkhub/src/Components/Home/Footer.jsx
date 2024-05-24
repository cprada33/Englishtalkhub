import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="Footer_div">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FLogoN.ico?alt=media&token=cca1d671-7981-4e18-aa61-11c14961eb76"
          alt="logo"
        />
        <a href="https://www.Facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/etalkhub/">
          <InstagramIcon />
        </a>
        <a href="mailto:esquea69@gmail.com">
          <MarkunreadIcon />
          <p>esquea69@gmail.com</p>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=573134467268&text&type=phone_number&app_absent=0">
          <WhatsAppIcon />
          <p>+57 314 446 7268</p>
        </a>
        <Link to="/empresas">
          <HandshakeIcon />
          <p>Programas empresariales</p>
        </Link>
        <Link to="/politicas-privacidad">
          <PrivacyTipIcon />
          <p>Politicas de privacidad</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
