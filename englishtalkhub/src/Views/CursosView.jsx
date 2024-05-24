import Curso from '../Components/Curso';
import Inscripcion from '../Components/Inscripcion';

const CursosView = () => {
  return (
    <>
      <h1 className="CursosView_title">PROGRAMAS</h1>
      <Curso />
      <Inscripcion />
    </>
  );
};

export default CursosView;
