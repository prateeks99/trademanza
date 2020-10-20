import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css';
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
