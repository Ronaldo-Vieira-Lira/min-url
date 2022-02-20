import React from "react";
import "../css/Motivos.css";

export default function Motivos({ img, title, descricao }) {
    return (
        <>
            <div className="caixaMotivo">
                <img src={img} alt="Icones que representão o contexto descrito nos parágrafos abaixo" />
                <div className="areaTextMotivo">
                    <h2>{title}</h2>
                    <p>{descricao}</p>
                </div>
            </div>
        </>
    )
}