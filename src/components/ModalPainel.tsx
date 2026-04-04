import { Link } from "react-router-dom"
import "./Modal_css.css"
import { TModal } from "../types/TModal"





export default function ModalPainel({ isOpen, children, setModalOpen }: TModal) {

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">
                    <nav>
                        <Link to="/" onClick={setModalOpen} style={{ textDecoration: "none", color: "black", fontSize: "22px", marginLeft: "432px" }}>
                            <button >
                                X
                            </button>
                        </Link>
                    </nav>
                    <p className="content_modal_css" style={{ marginTop: "70px", fontSize: "20px" }}>Bem vindo Marco, qual seu login?</p>
                    <div>{children}</div>

                </div>
            </div>

        )
    }

    return null
}