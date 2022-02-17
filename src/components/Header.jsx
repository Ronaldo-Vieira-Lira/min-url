import React from "react";
import "../css/Header.css";

import Icon from "../imagens/iconMarca.svg";

export default function Header() {
    return (
        <header>
            <img src={Icon} alt="Icon Marca" />
            <h1> BLYNDERS </h1>
        </header>
    )
}