import { TModal } from "../types/TModal"
import "./Modal_css.css"




export default function ModalMain({ isOpen, children, setModalOpen }: TModal) {

    if (isOpen) {
        return (
            <div className="background_modal_css">
                <div className="modal_modal_css">
                    <button onClick={setModalOpen} style={{ fontSize: "14px", marginLeft: "432px" }}>X</button>
                    <p className="content_modal_css">Modal Success Modal Success Modal Success</p>
                    <div>{children}</div>

                </div>
            </div>

        )
    }

    return null
}

