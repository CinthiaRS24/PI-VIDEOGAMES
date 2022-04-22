import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateVideogame from "./components/CreateVideogame";
import DetailVideogame from "./components/DetailVideogame";
import About from "./components/About"



function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/create'>
          <CreateVideogame />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/videogame/:id'>
          <DetailVideogame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
