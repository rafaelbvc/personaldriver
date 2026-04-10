import "./Inicio_app_css.css"
import Inicio1jpg from "../assets/imagesInicio/inicio1jpg.jpg"
import { SpacerPages } from "../components/spacerPages/SpacerPages";


export const InicioApp = () => {


    return (
        <div className="inicio_app_css">

            {/* imagem de fundo da página */}
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio1jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                {/* espaçamento de 8vh para inicio da página */}
                <SpacerPages />

                <div className="inicio_conteudo_css">

                    <div className="inicio_conteudo_primeiro_container_css">

                        <p className="inicio_conteudo_primeiro_css">Segurança</p>
                        <p className="inicio_conteudo_primeiro_css">Conforto</p>
                        <p className="inicio_conteudo_primeiro_css">Rapidez</p>
                        <p className="inicio_conteudo_primeiro_css">Disponibilidade</p>
                        <p className="inicio_conteudo_primeiro_css">Confiança</p>
                        <p className="inicio_conteudo_primeiro_css">Luxo</p>

                    </div>


                    <div className="inicio_conteudo_segundo_css">

                        <p className="inicio_conteudo_text_css">

                            <h4>Marco Personal Driver:<br /> Excelência em cada trajeto.</h4>

                            Ofereço serviços de transporte executivo com foco em pontualidade, segurança e discrição.
                            Meu veículo é de alto padrão, conduzido por motorista treinado para atender agendas exigentes.
                            Seja para transfer de aeroportos, eventos corporativos, shows, consultas ou logística diária,
                            garanto um deslocamento eficiente e confortável para quem não pode perder tempo.

                        </p>

                    </div>

                </div>


            </div>
        </div>
    )
}
