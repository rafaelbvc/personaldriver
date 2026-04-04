import { TModal } from "../types/TModal"
import "./Modal_css.css"




export default function ModalRegister({ isOpen, children, setModalOpen }: TModal) {

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">
                    <button onClick={setModalOpen}>X</button>
                    <p className="content_modal_css">Modal Success Modal Success Modal Success</p>
                    <div>{children}</div>
                    
                </div>
            </div>

        )
    }

    return null
}

{/* 
    
    import "./Modal_register_css.css"
import { useState } from "react"
import jsPDF from "jspdf"

type TModalRegister = {
    isOpen: boolean
    children: any
    setModalOpen: any
}

export default function ModalRegister({ isOpen, children, setModalOpen }: TModalRegister) {

    const [userText, setUserText] = useState("")

    const handleGeneratePDF = () => {
        const doc = new jsPDF()

        // Conteúdo estático
        const staticText = "Modal Success Modal Success Modal Success"

        // Conteúdo dinâmico
        const dynamicText = userText

        // Montando PDF
        doc.setFont("helvetica", "bold")
        doc.setFontSize(16)
        doc.text("Relatório", 20, 20)

        doc.setFontSize(12)
        doc.setFont("helvetica", "normal")

        doc.text("Conteúdo fixo:", 20, 40)
        doc.text(staticText, 20, 50)

        doc.text("Conteúdo digitado:", 20, 70)
        doc.text(dynamicText || "Nenhum texto informado", 20, 80)

        // Download
        doc.save("meu-pdf.pdf")
    }

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">

                    <button onClick={setModalOpen}>X</button>

                    <p className="content_modal_css">
                        Modal Success Modal Success Modal Success
                    </p>

                    >> coment INPUT DO USUÁRIO 
                    <textarea
                        placeholder="Digite algo para incluir no PDF..."
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                        style={{ width: "100%", height: "80px", marginTop: "10px" }}
                    />

                    >>coment BOTÃO GERAR PDF 
                    <button onClick={handleGeneratePDF} style={{ marginTop: "10px" }}>
                        Gerar PDF
                    </button>

                    <div>{children}</div>

                </div>
            </div>
        )
    }

    return null
}
    
    */}



{/* security
    
    import "./Modal_register_css.css"
import { useState } from "react"

type TModalRegister = {
    isOpen: boolean
    children: any
    setModalOpen: any
}

export default function ModalRegister({ isOpen, children, setModalOpen }: TModalRegister) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // 🔐 Credenciais mockadas (front only)
    const MOCK_LOGIN = "admin"
    const MOCK_PASSWORD = "1234"

    const handleLogin = () => {
        if (login === MOCK_LOGIN && password === MOCK_PASSWORD) {
            setError("")
            setModalOpen() // fecha modal
        } else {
            setError("Login ou senha inválidos")
        }
    }

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">

                    <button onClick={setModalOpen}>X</button>

                    <p className="content_modal_css">
                        Modal Success Modal Success Modal Success
                    </p>

                    >>coment INPUT LOGIN 
                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        style={{ width: "100%", marginTop: "10px" }}
                    />

                    >>coment INPUT SENHA 
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", marginTop: "10px" }}
                    />

                    >> coment ERRO 
                    {error && (
                        <p style={{ color: "red", marginTop: "10px" }}>
                            {error}
                        </p>
                    )}

                    >>coment BOTÃO LOGIN 
                    <button onClick={handleLogin} style={{ marginTop: "10px" }}>
                        Entrar
                    </button>

                    <div>{children}</div>

                </div>
            </div>
        )
    }

    return null
}
    
    
    */}    