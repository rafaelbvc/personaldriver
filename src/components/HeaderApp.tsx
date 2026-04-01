import "./Header_app_css.css"
import { Link } from "react-router-dom"



export const HeaderApp = () => {

  return (
    <div className="header_app_css">
      <div className="menu_header_css">
        <nav>
          <Link to="/" className="inicio_menu_css">Inicio</Link>

          <span>|</span>

          <Link to="/painel" className="painel_menu_css">Painel</Link>

          <span>|</span>

          <Link to="/midia" className="midia_menu_css">Mídia</Link>

          <span>|</span>

          <Link to="/contato" className="contato_menu_css">Contato</Link>
        </nav>
        <span>|</span>

      </div>
      <div className="login_header_css">

        <p className="entrar_login_css" onClick={() => { console.log("cliquei entrar") }}>Entrar</p>
        <p>|</p>
        <p className="registrar_login_css" onClick={() => { console.log("cliquei registrar") }}>Registrar</p>
        <p>|</p>
        <p className="sair_login_css" onClick={() => { console.log("cliquei sair") }}>Sair</p>
        <p className="sair_decoration_css">|</p>

      </div>


    </div>
  )
}


