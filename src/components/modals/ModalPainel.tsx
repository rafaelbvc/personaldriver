import { Link } from "react-router-dom"
import "./Modal_css.css"
import { IModal } from "../../interfaces/IModal";


export default function ModalPainel({ isOpen, children, setModalOpen }: IModal) {
    if (!isOpen) return null;

    return (
        <div className="background_modal_css">
            <div className="modal_modal_css">
                <nav className="modal_header">
                    <Link to="/" onClick={setModalOpen}>
                        <button className="btn_close">
                            ✕
                        </button>
                    </Link>
                </nav>
                
                <p className="content_modal_css">
                    Bem vindo Marco, qual seu login?
                </p>
                
                <div className="children_container">
                    {children}
                </div>
            </div>
        </div>
    )
}