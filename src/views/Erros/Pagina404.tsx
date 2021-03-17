import React from "react";

import imagem from "../../assets/img/doguito404.svg";
import "../../assets/css/404.css";

export default function Pagina404() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img src={imagem} alt="" className="doguito-imagem" />
      <p className="naoecontrado-texto">Ops, essa página não existe!</p>
    </main>
  );
}
