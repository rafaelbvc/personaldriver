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
                    <p>Modal Success com margin 2vw vindo do css</p>
                    <div>{children}</div>
                    <button onClick={setModalOpen}>X</button>
                </div>
            </div>

        )
    }

    return null
}
