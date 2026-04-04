import "./Midia_app_css.css"
import Inicio3jpg from "../assets/imagesInicio/inicio3jpg.jpg"


export const MidiaApp = () => {


    const midiaTeste = Array(30).fill(`Midia Teste`)


    return (

        <div className="midia_app_css">
            <div style={{

                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio3jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>


                <div style={{ width: "100vw", height: "8vh" }} />
                {midiaTeste.map((testeMidia) => (<p className="midia_midia_css">{testeMidia}</p>))}

            </div>

        </div>
    )
}