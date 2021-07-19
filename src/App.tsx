import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div className="App">
   <Header />
  <Projects />
  <Footer />
    </div>
  );
}

export default App;
