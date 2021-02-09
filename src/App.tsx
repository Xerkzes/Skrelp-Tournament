import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Navbar/Nav";
import { Participants } from "./components/Participants/Participants";
import { Counter } from "./components/Count/Counter";
import { Generator } from "./components/RandomPokemonGenerator/Generator";
import { Matches } from "./components/Match/Match";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Nav />

        <div className="Content">
          <Route path="/" exact component={Participants} />
          <Route path="/random_pokemon_generator" exact component={Generator} />
          <Route path="/matches" exact component={Matches} />
        </div>
      </Router>
    </div>
  );
};

export default App;
