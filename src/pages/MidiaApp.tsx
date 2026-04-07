import "./Midia_app_css.css"
import Inicio3jpg from "../assets/imagesInicio/inicio3jpg.jpg"
import { SpacerPages } from "../components/SpacerPages"


export const MidiaApp = () => {


    const midiaTeste = Array(28).fill(`Midia Teste`)


    return (

        <div className="midia_app_css">

            {/* imagem de fundo da página */}
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio3jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                {/* espaçamento de 8vh para inicio da página */}
                <SpacerPages />
                {midiaTeste.map((testeMidia) => (<p className="midia_midia_css">{testeMidia}</p>))}

            </div>

        </div>
    )
}