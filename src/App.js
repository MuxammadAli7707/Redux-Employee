import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  let [search, setSearch] = useState([]);
  return (
    
    <div className="App">
        <Header/>
        <Hero search={search} setSearch={setSearch}/>
    </div>  
  );
}

export default App;
