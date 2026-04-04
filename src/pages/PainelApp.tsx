import "./Painel_app_css.css"
import Inicio2jpg from "../assets/imagesInicio/inicio2jpg.jpg"

export const PainelApp = () => {


    const painelTeste = Array(28).fill(`Painel Teste`)


    return (
        <div className="painel_app_css">

            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio2jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                <div style={{ width: "100vw", height: "8vh" }} />
                {painelTeste.map((testePainel) => (<p className="painel_painel_css">{testePainel}</p>))}


            </div>

        </div>
    )
}