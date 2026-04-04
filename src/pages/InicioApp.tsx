import "./Inicio_app_css.css"
import Inicio1jpg from "../assets/imagesInicio/inicio1jpg.jpg"

export const InicioApp = () => {


    const inicioTeste = Array(28).fill(`Inicio Teste`);


    return (
        <div className="inicio_app_css">

            <div style={{

                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio1jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                <div style={{ width: "100vw", height: "8vh" }} />
                {inicioTeste.map((testeInicio) => (<p className="inicio_inicio_css">{testeInicio}</p>))}


            </div>
        </div>)
}
