import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import StadiumIcon from '@mui/icons-material/Stadium';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';

const Curso = () => {
  return (
    <>
      <div className="Presencial_Div">
        <img
          className="Presencial_img"
          src="https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FDisen%CC%83o%20sin%20ti%CC%81tulo%20(3).png?alt=media&token=a2afd118-45eb-4f3e-964d-d812d306694e"
          alt="presencial"
        />
        <h1>PRESENCIAL</h1>
        <p>{<CardGiftcardIcon />} Kit de bienvenida</p>
        <p>{<SchoolIcon />} 3 clases semanales de 1h 45m</p>
        <p>{<CampaignIcon />} 2 Challenges semanales</p>
        <p>{<StadiumIcon />} 1 inmersión incluida (día sabado)</p>
        <p>{<Diversity3Icon />} Máximo 5 personas por clase</p>
        <p>{<MonetizationOnIcon />} Precio: $300.000</p>
      </div>

      <div className="Virtual_Div">
        <img
          className="Virtual_img"
          src="https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FDisen%CC%83o%20sin%20ti%CC%81tulo%20(4).png?alt=media&token=3d18a574-5839-4059-a102-df5bc9188589"
          alt="Virtual"
        />
        <h1>VIRTUAL</h1>
        <p>{<SchoolIcon />} 2 clases semanales de 1h 15m</p>
        <p>{<CampaignIcon />} 2 Challenges semanales</p>
        <p>{<ShuffleOnIcon />} Horarios flexibles</p>
        <p>{<Diversity3Icon />} Personalizadas y grupales</p>
        <p>{<MonetizationOnIcon />} Precio: $180.000</p>
      </div>
    </>
  );
};

export default Curso;
