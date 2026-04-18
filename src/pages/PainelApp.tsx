import "./Painel_app_css.css"
import Inicio2jpg from "../assets/imagesInicio/inicio2jpg.jpg"
//import { useState } from "react"
//import ModalMain from "../components/modals/ModalMain"
import { SpacerPages } from "../components/spacerPages/SpacerPages"
import Formulario from "../forms/Formulario"

export const PainelApp = () => {


    return (
        <div className="painel_app_css">

            {/* imagem de fundo da página */}
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${Inicio2jpg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>


                <div>

                    {/* espaçamento de 8vh para inicio da página */}
                    <SpacerPages />
                    {/*

*/}
                    {/* Formulário importado ps: apenas painel*/}
                    <Formulario />
                    {/* 
*/}
                </div>



            </div>

        </div >
    )
}