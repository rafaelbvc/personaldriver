import './App.css';
import { ContatoApp } from './pages/ContatoApp';
import { FooterApp } from './components/footerApp/FooterApp';
import { HeaderApp } from './components/headerApp/HeaderApp';
import { InicioApp } from './pages/InicioApp';
import { MidiaApp } from './pages/MidiaApp';
import { PainelApp } from './pages/PainelApp';
import { Route, Routes } from 'react-router-dom';
import { ErrorApp } from './pages/ErrorApp';



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

          <Route path="*" element={<ErrorApp />} />

        </Routes>

      </div>

      <footer>
        <FooterApp />
      </footer>

    </div>
  );
}

export default App;
