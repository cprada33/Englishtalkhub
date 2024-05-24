import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomeBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="HomeBanner_div">
        <div className="HomeBanner_foto"></div>
        <img
          className="HomeBanner_title"
          src="https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2FNombreDelineado.png?alt=media&token=8cdb0bfe-d296-439b-a155-78ffdef47a51"
          alt="nombre"
        />
        <p className="HomeBanner_p1">¡Es momento de volver a intentarlo</p>
        <p className="HomeBanner_p2">de una manera diferente!</p>
        <Button
          onClick={() => {
            navigate('/cursos');
          }}
          className="HomeBanner_botonCursos"
          variant="contained"
        >
          Cursos e inscripciones
        </Button>
        <Button
          onClick={() => {
            navigate('/inmersiones');
          }}
          className="HomeBanner_botonInscribete"
          variant="contained"
        >
          Inmersiones
        </Button>
      </div>
    </>
  );
};

export default HomeBanner;
