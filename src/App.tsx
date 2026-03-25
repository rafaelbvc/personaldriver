import './App.css';
import { Contato_app } from './components/Contato_app';
import { Footer_app } from './components/Footer_app';
import { Header_app } from './components/Header_app';
import { Inicio_app } from './components/Inicio_app';
import { Midia_app } from './components/Midia_app';
import { Painel_app } from './components/Painel_app';

function App() {
  return (
    <div className="App">

      <header className="App-Header">
        <Header_app />
      </header>

      <div>
        <Inicio_app />
        <Painel_app />
        <Midia_app />
        <Contato_app />
      </div>

      <footer>
        <Footer_app />
      </footer>

    </div>
  );
}

export default App;
