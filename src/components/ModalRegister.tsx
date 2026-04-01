import "./Modal_register_css.css"

type TModalRegister = {
    isOpen: boolean
}


export default function ModalRegister({ isOpen }: TModalRegister) {

    if (isOpen) {
        return (<p>Modal Registro</p>)
    }

    return null
}
