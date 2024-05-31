import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Cards from './pages/Cards/Cards';
import Missing from './components/Missing/Missing';
import Game from './pages/Game/Game';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';



export default function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Header />
          <Routes>
            <Route path='/Letter' element={<Main />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/game' element={<Game />} />
            <Route path='/vocabulary' element={<Vocabulary />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </DataProvider>
      </div>
    </Router >
  );
};
