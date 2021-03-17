import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../api/api";
import "../../assets/css/blog.css";
import { CategoriaModel } from "../../models/CategoriaModel";
export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<CategoriaModel[]>([]);

  useEffect(() => {
    search(`/categorias`, setCategorias);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
}
