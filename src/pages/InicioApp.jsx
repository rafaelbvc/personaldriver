import "./Inicio_app_css.css"
import Inicio1jpg from "../assets/imagesInicio/inicio1jpg.jpg"
import Inicio2jpg from "../assets/imagesInicio/inicio2jpg.jpg"

export const InicioApp = () => {
    return (
        <div className="inicio_app_css">

                <div style={{

                     width: "50vw",
                     height: "82vh",
                     marginLeft: "2.5vw",
                     backgroundImage: `url(${Inicio1jpg})`,
                     backgroundSize: "contain",
                     backgroundRepeat: "no-repeat",
                }}>

                <div style={{

                     width: "50vw",
                     height: "82vh",
                     marginLeft: "47.4vw",
                     backgroundImage: `url(${Inicio2jpg})`,
                     backgroundSize: "contain",
                     backgroundRepeat: "no-repeat",
                }}>

                </div>

                <p className="inicio_inicio_css">Inicio teste</p>

            </div>
        </div>)
}
