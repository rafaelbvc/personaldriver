import "./Header_app_css.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ModalMain from "./ModalMain"
import ModalPainel from "./ModalPainel"




export const HeaderApp = () => {

  //pega a url
  const location = useLocation();

  //const [modalOpen, setModalOpen] = useState(false)
  //const [modalOpenRegister, setModalOpenRegister] = useState(false)
  const [modalPainel, setModalPainel] = useState(false)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
 
  //colocar em um .env afim de mvp
  const MOCK_LOGIN = "admin"
  const MOCK_PASSWORD = "1234"

  // verifica se for /painel e se for abre a modal
  useEffect(() => {
    if (location.pathname === "/painel") {
      setModalPainel(true);
    }
  }, [location]);

  //compara os dados caso sejam iguais libera a rota
  const handleLogin = () => {
    if (login === MOCK_LOGIN && password === MOCK_PASSWORD) {
      setModalPainel(false) // fecha modal
    } else {
      setError("Login ou senha inválidos")
    }
  }
  //limpa os forms
  useEffect(() => {
    if (modalPainel) {
      setLogin("")
      setPassword("")
      setError("")
    }
  }, [modalPainel])



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

       {/* <p className="entrar_login_css" onClick={() => setModalOpen(true)}>Entrar</p>
        <p>|</p>
        <p className="registrar_login_css" onClick={() => setModalOpenRegister(true)}>Registrar</p>
        <p>|</p>
        <p className="sair_login_css" onClick={() => { console.log("cliquei sair") }}>Sair</p>
        <p className="sair_decoration_css">|</p>

        <ModalMain isOpen={modalOpen} setModalOpen={() => setModalOpen(!modalOpen)}>conteudo modal entrar</ModalMain>
        <ModalMain isOpen={modalOpenRegister} setModalOpen={() => setModalOpenRegister(!modalOpenRegister)}>conteudo modal registro</ModalMain> */}
        <ModalPainel isOpen={modalPainel} setModalOpen={() => setModalPainel(!modalPainel)}>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{ height: "30px", width: "92%", marginTop: "90px", fontSize: "16px" }}
          />


          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ height: "30px", width: "92%", marginTop: "16px", fontSize: "16px" }}
          />


          {error && (
            <p style={{ color: "red", marginTop: "26px", marginLeft: 0 }}>
              {error}
            </p>

          )}


          <button onClick={handleLogin} style={{ height: "30px", width: "100px", marginTop: "16px", marginLeft: "350px", fontSize: "15px" }}>
            Entrar
          </button>

        </ModalPainel>

      </div>


    </div>
  )
}