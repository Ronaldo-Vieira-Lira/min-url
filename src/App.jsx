import React from "react";
import "./css/App.css";

import Header from "./components/Header";
import Motivos from "./components/Motivos";
import ReceptorURL from "./components/ReceptosURL";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

import Free from "./imagens/free.svg";
import Link from "./imagens/link.svg";
import Respo from "./imagens/responsivo.svg";
import Cadeado from "./imagens/cadeado.svg";

export default function App() {
    return (
        <div id="container">
            <Header />
            <Sobre />
            <ReceptorURL />
            <div id="containerMotivos">
                <Motivos 
                    img={Link} 
                    title="Link" 
                    descricao="Encurte links de qualquer tamanho com o Encurtador"/>
                <Motivos 
                    img={Free} 
                    title="Gratuito"
                    descricao="Crie quantos links encurtados quiser e compartilhe"/>
                <Motivos 
                    img={Respo} 
                    title="Responsivo"
                    descricao="Compatível com desktop, tablets e com dispositivos móveis"/>
                <Motivos 
                    img={Cadeado} 
                    title="Seguro"
                    descricao="Usamos protocolo https com criptografia de dados"/>
            </div>
            <Footer />
        </div>
    )
};