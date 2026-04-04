import "./Header_app_css.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import ModalRegister from "./ModalRegister"




export const HeaderApp = () => {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpenRegister, setModalOpenRegister] = useState(false)
  const [modalPainel, setModalPainel] = useState(false)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const MOCK_LOGIN = "admin"
  const MOCK_PASSWORD = "1234"

  const handleLogin = () => {
    if (login === MOCK_LOGIN && password === MOCK_PASSWORD) {
      setLogin("")
      setPassword("")
      setError("")
      setModalPainel(false) // fecha modal
    } else {
      setError("Login ou senha inválidos")
    }
  }

  return (
    <div className="header_app_css">
      <div className="menu_header_css">
        <nav>
          <Link to="/" className="inicio_menu_css">Inicio</Link>

          <span>|</span>

          <Link to="/painel" className="painel_menu_css" onClick={() => setModalPainel(true)}>Painel</Link>

          <span>|</span>

          <Link to="/midia" className="midia_menu_css">Mídia</Link>

          <span>|</span>

          <Link to="/contato" className="contato_menu_css">Contato</Link>
        </nav>
        <span>|</span>

      </div>
      <div className="login_header_css">

        <p className="entrar_login_css" onClick={() => setModalOpen(true)}>Entrar</p>
        <p>|</p>
        <p className="registrar_login_css" onClick={() => setModalOpenRegister(true)}>Registrar</p>
        <p>|</p>
        <p className="sair_login_css" onClick={() => { console.log("cliquei sair") }}>Sair</p>
        <p className="sair_decoration_css">|</p>
        <ModalRegister isOpen={modalOpen} setModalOpen={() => setModalOpen(!modalOpen)}>conteudo modal entrar</ModalRegister>
        <ModalRegister isOpen={modalOpenRegister} setModalOpen={() => setModalOpenRegister(!modalOpenRegister)}>conteudo modal registro</ModalRegister>
        <ModalRegister isOpen={modalPainel} setModalOpen={() => setModalPainel(!modalPainel)}>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{ width: "92%", marginTop: "160px" }}
          />


          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "92%", marginTop: "10px" }}
          />


          {error && (
            <nav>
            <p style={{ color: "red", marginTop: "10px", marginLeft: 0 }}>
              {error}
            </p>
            
            <Link to="/" className="painel_menu_two_css" onClick={() => setModalPainel(false)}>Voltar</Link>
            </nav>
          )}


          <button onClick={handleLogin} style={{ marginTop: "10px" }}>
            Entrar
          </button>

        </ModalRegister>

      </div>


    </div>
  )
}


