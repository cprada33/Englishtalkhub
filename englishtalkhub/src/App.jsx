import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './Views/HomeView';
import CursosView from './Views/CursosView';
import NavBar from './Components/Home/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer';
import { ThemeProvider } from 'react-bootstrap';
import HistoriaView from './Views/HistoriaView';
import ComingSoon from './Components/ComingSoon';
// import InmersionesView from './Views/InmersionesView';

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="cursos" element={<CursosView />}></Route>
            <Route path="historia" element={<HistoriaView />}></Route>
            <Route path="estudiantes" element={<ComingSoon />}></Route>
            <Route path="challenges" element={<ComingSoon />}></Route>
            <Route path="metodologia" element={<ComingSoon />}></Route>
            <Route path="inmersiones" element={<ComingSoon />}></Route>
            <Route path="empresas" element={<HomeView />}></Route>
            <Route path="politicas-privacidad" element={<HomeView />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
