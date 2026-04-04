import "./Contato_app_css.css"
import Inicio4jpg from "../assets/imagesInicio/inicio4jpg.jpg"
export const ContatoApp = () => {

    const contatoTeste = Array(30).fill(`Contato Teste`)


    return (
        <div className="contato_app_css">
                        <div style={{

                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio4jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
            <div style={{width: "100vw", height: "8vh"}}/>
            
            {contatoTeste.map((testeContato) => (<p className="contato_contato_css">{testeContato}</p>))}


            </div>

        </div>
    )
}