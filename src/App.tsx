import './App.css';
import { ContatoApp } from './pages/ContatoApp';
import { FooterApp } from './components/FooterApp';
import { HeaderApp } from './components/HeaderApp';
import { InicioApp } from './pages/InicioApp';
import { MidiaApp } from './pages/MidiaApp';
import { PainelApp } from './pages/PainelApp';

function App() {
  return (
    <div className="App">

      <header className="App-Header">
        <HeaderApp />
      </header>

      <body>
        <InicioApp />
        <PainelApp />
        <MidiaApp />
        <ContatoApp />
      </body>

      <footer>
        <FooterApp />
      </footer>

    </div>
  );
}

export default App;
