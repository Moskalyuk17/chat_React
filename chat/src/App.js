import React from 'react';
import './Scss/index.css';
import Aside from './Componets/Aside';
import Main from './Componets/Main';
import Header from './Componets/Header';

function App() {
  return (
    <div className="App">
      <Aside /> 
      <Header />
      <Main />
    </div>
  );
}

export default App;
