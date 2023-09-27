import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Card from './components/card/card';
import dictionary from './components/words/words';

class App extends React.Component {
  render() {
    return(
      <>
      <Header />
      {dictionary.map((word) =>
        <Card english = {word.english}
        russian = {word.russian}
        src = {word.src}
        transcription = {word.transcription}
        topic = {word.topic} />)} 
      <Footer />
      </>
    );
  }
};

export default App;
