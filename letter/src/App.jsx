import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Table from './components/table/table';
import Card from './components/card/card';
import Missing from './components/missing/missing';
import Game from './components/game/game';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/game' element={<Game />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
};
