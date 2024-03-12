import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import Apropos from './pages/Apropos.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;