import "./Inicio_app_css.css"
import Inicio1jpg from "../assets/imagesInicio/inicio1jpg.jpg"
import { SpacerPages } from "../components/SpacerPages";

export const InicioApp = () => {


    const inicioTeste = Array(1).fill(`Inicio Teste`);


    return (
        <div className="inicio_app_css">

            <div style={{

                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio1jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                {/* espaçamento de 8vh para inicio da página */}
                <SpacerPages />
                {inicioTeste.map((testeInicio) => (<p className="inicio_inicio_css">{testeInicio}</p>))}


            </div>
        </div>)
}
