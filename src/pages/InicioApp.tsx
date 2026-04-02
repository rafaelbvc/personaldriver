import "./Inicio_app_css.css"
import Inicio1jpg from "../assets/imagesInicio/inicio1jpg.jpg"

export const InicioApp = () => {
    return (
        <div className="inicio_app_css">
            <div style={{
                width: "100vw",
                height: "82vh",
                backgroundImage: `url(${Inicio1jpg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
            }}>
                <p className="inicio_inicio_css">Inicio teste</p>
            </div>
        </div>)
}
