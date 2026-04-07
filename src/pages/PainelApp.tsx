import "./Painel_app_css.css"
import Inicio2jpg from "../assets/imagesInicio/inicio2jpg.jpg"
import { useState } from "react"
import ModalMain from "../components/ModalMain"
import { SpacerPages } from "../components/SpacerPages"
import Formulario from "../components/Formulario"

export const PainelApp = () => {

    const [portos, setPortos] = useState(false)
    const [consultas, setConsultas] = useState(false)
    const [shows, setShows] = useState(false)
    const [viagens, setViagens] = useState(false)


    return (
        <div className="painel_app_css">

            {/* imagem de fundo da página */}
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio2jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>


                <div>

                    {/* espaçamento de 8vh para inicio da página */}
                    <SpacerPages />

                    <h2>Formulario para criar contrato:</h2>

                    <p style={{ cursor: "pointer" }} onClick={() => setPortos(true)}>Aeroportos/Portos</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setConsultas(true)}>Consultas Médicas</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setShows(true)}>Shows</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setViagens(true)}>Viagens para localidades/Serviços</p>

                    {/* Formulário importado ps: apenas painel*/}
                    <Formulario />

                    <ModalMain isOpen={portos} setModalOpen={() => setPortos(!portos)}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</ModalMain>

                    <ModalMain isOpen={consultas} setModalOpen={() => setConsultas(!consultas)}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</ModalMain>

                    <ModalMain isOpen={shows} setModalOpen={() => setShows(!shows)}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</ModalMain>

                    <ModalMain isOpen={viagens} setModalOpen={() => setViagens(!viagens)}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</ModalMain>

                </div>



            </div>

        </div >
    )
}