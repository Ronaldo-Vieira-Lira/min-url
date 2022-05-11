import React, { useState } from "react";
import axios from "axios";
import "../css/Receptor.css";

import Copy from "../imagens/copy.svg";
import Linkimg from "../imagens/link32.svg";

export default function ReceptorURL() {
    const [maxURL, setMaxURL] = useState()
    const [minURL, setMinURL] = useState()

    const [funcao, setFuncao] = useState(!true)
    const [alerta, setAlerta] = useState(!true)

    setTimeout(() => {
        setAlerta(!true)
    }, 7000)
    
    const Api = axios.create({
        baseURL: `https://api.shrtco.de/v2/shorten?url=${maxURL}`,
    })
    const funcaoApi = () => {
        Api.get("")
            .then((response) => {
                setMinURL(response.data.result)
            })
            .catch((erro) => {
                setAlerta(!false)    
                console.log(`Deu erro ${erro}`)
            })
        setFuncao(!true)
    };
    return (

        <div id="contReceptor">

                <div className="areaURLS">
                    <div className="caixaText">
                        <h2>Cole a URL para ser encurtada</h2>
                
                        {
                            alerta === true ? 
                            <p id="alerta">
                                Por favor verifique se a URL digitada está correta.
                            </p> : null
                        } 
                    </div>

                    <div className="caixaInputs">

                        <input type="text" placeholder="Cole o link aqui! " id="textURL" />

                        <button type="button"
                            onClick={(e) => {
                                e.preventDefault()

                                var textoUrl = document.getElementById("textURL").value;

                                if(textoUrl == "") {
                                    setAlerta(!false)
                                } else {   
                                    setMaxURL(textoUrl)
                                    setFuncao(!false)
                                }
                            }}
                        > <img src={Linkimg} alt="" /> ENCURTAR </button>

                        {funcao === true ? funcaoApi() : null}

                    </div>

                </div>

                <div className="areaURLS" id="areaCopy">

                    <div className="caixaText">

                        <h2>Sua URL encurtada</h2>
                        <p>
                            Copie o link encurtado e compartilhe em mensagens, textos, publicações, sites e outros locais.
                        </p>

                    </div>

                    <div className="caixaInputs">

                        <input type="text" value={minURL?.full_short_link} id="textcopy"/>

                        <button type="button" onClick={(e) => {
                            e.preventDefault()
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
