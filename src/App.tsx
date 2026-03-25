import './App.css';
import { Footer_app } from './components/Footer_app';
import { Header_app } from './components/Header_app';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Header_app />
      </header>
      <body>
        <p>oie</p>
      </body>
      <footer>
        <Footer_app />
      </footer>
    </div>
  );
}

export default App;
