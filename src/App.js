import React from 'react';

import './App.css';
import Routes from './routes';
import Header from './Components/Header/Header'

function App() {
  return (
    <main className="App">
      <Header />
      {Routes}
    </main>
  );
}

export default App;
