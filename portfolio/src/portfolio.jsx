import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;