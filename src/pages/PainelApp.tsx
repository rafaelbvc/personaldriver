import "./Painel_app_css.css"
import Inicio2jpg from "../assets/imagesInicio/inicio2jpg.jpg"
import { useState } from "react"
import ModalMain from "../components/ModalMain"

export const PainelApp = () => {

    const [portos, setPortos] = useState(false)
    const [consultas, setConsultas] = useState(false)
    const [shows, setShows] = useState(false)
    const [viagens, setViagens] = useState(false)


    return (
        <div className="painel_app_css">

            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio2jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>  


                <div>
                    <div style={{ width: "100vw", height: "8vh" }} />
                    <p style={{ cursor: "pointer" }} onClick={() => setPortos(true)}>Aeroportos/Portos</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setConsultas(true)}>Consultas Médicas</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setShows(true)}>Shows</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setViagens(true)}>Viagens para localidades/Serviços</p>


                    <ModalMain isOpen={portos} setModalOpen={() => setPortos(!portos)}>Conteudo Modal Portos</ModalMain>
                    <ModalMain isOpen={consultas} setModalOpen={() => setConsultas(!consultas)}>Conteudo Modal Consultas</ModalMain>
                    <ModalMain isOpen={shows} setModalOpen={() => setShows(!shows)}>Conteudo Modal Shows</ModalMain>
                    <ModalMain isOpen={viagens} setModalOpen={() => setViagens(!viagens)}>Conteudo Modal Viagens</ModalMain>

                </div>



            </div>

        </div >
    )
}