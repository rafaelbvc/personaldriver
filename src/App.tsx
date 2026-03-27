import './App.css';
import { ContatoApp } from './components/ContatoApp';
import { FooterApp } from './components/FooterApp';
import { HeaderApp } from './components/HeaderApp';
import { InicioApp } from './components/InicioApp';
import { MidiaApp } from './components/MidiaApp';
import { PainelApp } from './components/PainelApp';

function App() {
  return (
    <div className="App">

      <header className="App-Header">
        <HeaderApp />
      </header>

      <div>
        <InicioApp />
        <PainelApp />
        <MidiaApp />
        <ContatoApp />
      </div>

      <footer>
        <FooterApp />
      </footer>

    </div>
  );
}

export default App;
