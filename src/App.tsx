import './App.css';
import { Footer_app } from './components/Footer_app';
import { Header_app } from './components/Header_app';
import { Inicio_app } from './components/Inicio_app';

function App() {
  return (
    <div className="App">

      <header className="App-Header">
        <Header_app />
      </header>

      <div>
        <Inicio_app />
      </div>

      <footer>
        <Footer_app />
      </footer>

    </div>
  );
}

export default App;
