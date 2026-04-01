import { Link } from "react-router-dom"
import "./Header_app_css.css"


export const HeaderApp = () => {

  return (
    <div className="header_app_css">
      <div className="menu_header_css">
        <nav>
          <Link to="/" className="inicio_menu_css">Inicio</Link>
        </nav>
        <span>|</span>
        <nav>
          <Link to="/painel" className="painel_menu_css">Painel</Link>
        </nav>
        <span>|</span>
        <nav>
          <Link to="/midia" className="midia_menu_css">Mídia</Link>
        </nav>
        <span>|</span>
        <nav>
          <Link to="/contato" className="contato_menu_css">Contato</Link>
        </nav>
        <span>|</span>

      </div>
      <div className="login_header_css">

        <p className="entrar_login_css">Entrar</p>
        <p>|</p>
        <p className="registrar_login_css">Registrar</p>
        <p>|</p>
        <p className="sair_login_css">Sair</p>
        <p className="sair_decoration_css">|</p>

      </div>


    </div>
  )
}


{/* function MeuComponente() {
  return (
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      Ir para o Google
    </a>
  );
}

interno

npm install react-router-dom

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}



 */}


