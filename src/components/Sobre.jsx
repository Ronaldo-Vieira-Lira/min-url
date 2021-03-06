import React from "react";
import "../css/Sobre.css";
import ImgSobre from "../imagens/imgSobre.svg";

export default function Sobre() {
    return (
        <div id="containerSobre">

            <div id="textSobre">
                <h1>Encurtador de URL</h1>
                <p>
                    Encurtador de URL Blynders é uma ferramenta poderosa para encurtar link. Use o nosso Encurtador de link para diminuir uma URL longa e gerar uma nova URL curta. Cole a URL longa na caixa de texto e clique no botão Encurtar.
                </p>
            </div>
            
            <img src={ImgSobre} alt="Imagem ilustrativa" id="imgSobre"/>

        </div>
    )
}