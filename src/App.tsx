import './App.css';
import { ContatoApp } from './pages/ContatoApp';
import { FooterApp } from './components/FooterApp';
import { HeaderApp } from './components/HeaderApp';
import { InicioApp } from './pages/InicioApp';
import { MidiaApp } from './pages/MidiaApp';
import { PainelApp } from './pages/PainelApp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-Header">
        <HeaderApp />
      </header>

      <div>
        <Routes>
          <Route path="/" element={<InicioApp />} />
          <Route path="/painel" element={<PainelApp />} />
          <Route path="/midia" element={<MidiaApp />} />
          <Route path="/contato" element={<ContatoApp />} />
        </Routes>
      </div>

      <footer>
        <FooterApp />
      </footer>

    </div>
  );
}

export default App;
