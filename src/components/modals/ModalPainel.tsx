import { Link } from "react-router-dom"
import "./Modal_css.css"
import { TModal } from "../../types/TModal"





export default function ModalPainel({ isOpen, children, setModalOpen }: TModal) {

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">
                    <nav>
                        <Link to="/" onClick={setModalOpen} >
                            <button style={{ fontSize: "14px", marginLeft: "432px" }}>
                                X
                            </button>
                        </Link>
                    </nav>
                    <p className="content_modal_css" >Bem vindo Marco, qual seu login?</p>
                    <div>{children}</div>

                </div>
            </div>

        )
    }

    return null
}