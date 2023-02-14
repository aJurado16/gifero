import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import SearchResult from './Pages/SearchResult';
import { Link, Route } from "wouter";
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Link to="/">
          <img className='App-logo' alt='gif-logo' src='/logo_transparent.png'/>
        </Link>
        <h1>Gifs</h1>
        <Route
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResult}
          path="/search/:keyword"/>
        {/* <Route 
          component={ListOfGifs}
          path="/search/:keyword"/> */}
      </section>
    </div>
  );
}

export default App;
