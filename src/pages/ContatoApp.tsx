import "./Contato_app_css.css"
import Inicio4jpg from "../assets/imagesInicio/inicio4jpg.jpg"
import { SpacerPages } from "../components/SpacerPages"
export const ContatoApp = () => {

    const contatoTeste = Array(28).fill(`Contato Teste`)


    return (
        <div className="contato_app_css">

            {/* imagem de fundo da página */}
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio4jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                {/* espaçamento de 8vh para inicio da página */}
                <SpacerPages />

                {contatoTeste.map((testeContato) => (<p className="contato_contato_css">{testeContato}</p>))}


            </div>

        </div>
    )
}