import React, { useState } from "react";
import axios from "axios";
import "../css/Receptor.css";

import Copy from "../imagens/copy.svg";
import Link from "../imagens/link32.svg";

export default function ReceptorURL() {
    const [maxURL, setMaxURL] = useState()
    const [minURL, setMinURL] = useState()

    const [chave, setChave] = useState(!true)

    const Api = axios.create({
        baseURL: `https://api.shrtco.de/v2/shorten?url=${maxURL}`,
    })

    const funcaoApi = (valor) => {
        Api.get("")
            .then((response) => setMinURL(response.data.result))
            .catch((erro) => {
                console.log(`Deu erro ${erro}`)
            })
        setChave(!true)
    }

    if (chave === true) {
        document.getElementById("areaCopy").style.display = "flex"
    } else {

    }

    return (

        <div id="contReceptor">

                <div className="areaURLS">
                    <div className="caixaText">
                        <h1>Cole a URL para ser encurtada</h1>
                    </div>

                    <div className="caixaInputs">

                        <input type="text" placeholder="Cole o link aqui! " id="textURL" />

                        <button type="button"
                            onClick={() => {
                                var textoUrl = document.getElementById("textURL").value
                                if(textoUrl == "") {
                                    console.log("vazio")
                                } else {   
                                    setMaxURL(textoUrl)
                                    setChave(!false)
                                }
                            }}
                        > <img src={Link} alt="" /> ENCURTAR </button>

                        {chave === true ? funcaoApi(maxURL) : null}

                    </div>

                </div>

                <div className="areaURLS" id="areaCopy">

                    <div className="caixaText">

                        <h1>Sua URL encurtada</h1>
                        <p>
                            Copie o link encurtado e compartilhe em mensagens, textos, publicações, sites e outros locais.
                        </p>

                    </div>

                    <div className="caixaInputs">

                        <input type="text" value={minURL?.full_short_link} id="textcopy"/>

                        <button type="button" onClick={() => {

                            const sistCopy = document.getElementById("textcopy")
                            sistCopy.select();
                            sistCopy.setSelectionRange(0, 9999)
                            document.execCommand("copy")

                        }} id="btnCopy"> <img src={Copy} alt="" /> COPIAR </button>

                    </div>

                </div>



        </div>
    )
}
