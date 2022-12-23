import './App.css';
import React from 'react';
import Header from './components/Header'
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        {routes}
      </div>
    </div>
  );
}

export default App;
