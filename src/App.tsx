import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Sobre from "./views/Sobre";
import Pagina404 from "./views/Erros";
import Cabecalho from "./components/Cabecalho";
import Post from "./views/Post";
import Categoria from "./views/Categoria";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
