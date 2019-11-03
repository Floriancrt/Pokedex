import React from 'react';
import './App.css';
import PokeList from './components/PokeList'
import PokeFind from './components/PokemonSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        

      <Switch>
     <Route path="/about">
     
     </Route>
    <Route exact path="/pokemon/:id" component={PokeFind}>
     
    </Route>
     <Route path="/">
       <PokeList />
     </Route>
   </Switch>
      </div>
    </Router>
  );
}






