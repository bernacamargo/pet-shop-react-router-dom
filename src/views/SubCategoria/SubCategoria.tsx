import React from "react";
import { useParams } from "react-router-dom";
import ListaPost from "../../components/ListaPost";

interface ParamsType {
  subcategoria: string;
}

export default function SubCategoria() {
  const { subcategoria } = useParams<ParamsType>();

  return <ListaPost url={`/posts?subcategoria=${subcategoria}`} />;
}
