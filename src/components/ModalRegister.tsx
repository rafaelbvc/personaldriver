import "./Modal_register_css.css"

type TModalRegister = {
    isOpen: boolean
    children: any
    setModalOpen: any
}



export default function ModalRegister({ isOpen, children, setModalOpen }: TModalRegister) {

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
