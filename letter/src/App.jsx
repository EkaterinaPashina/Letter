import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './pages/Main/Main';
import Cards from './pages/Cards/Cards';
import Missing from './components/missing/missing';
import Game from './pages/Game/Game';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/game' element={<Game />} />
          <Route path='/vocabulary' element={<Vocabulary />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
};
