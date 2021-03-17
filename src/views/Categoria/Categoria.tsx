import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { search } from "../../api/api";
import "../../assets/css/blog.css";
import ListaCategorias from "../../components/ListaCategorias";
import ListaPost from "../../components/ListaPost";
import { CategoriaModel } from "../../models/CategoriaModel";
import SubCategoria from "../SubCategoria";

interface ParamsType {
  id: string;
}

export default function Categoria() {
  const { id } = useParams<ParamsType>();
  const { path, url } = useRouteMatch();
  const [subcategorias, setSubcategorias] = useState<string[]>();

  useEffect(() => {
    search(`/categorias/${id}`, (categoria: CategoriaModel) => {
      setSubcategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias?.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
        <Route exact path={`${path}`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
      </Switch>
    </>
  );
}
