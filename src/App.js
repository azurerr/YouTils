import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <h1 className="site-title">YouTils</h1>
      </header>
      <body className="App-body"> <Navigation /></body>
    </div>
  );
}

export default App;
