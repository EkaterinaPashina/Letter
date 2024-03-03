import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Table from './components/table/table';
import AddLine from './components/addLine/addLine';
import Card from './components/card/card';



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddLine />
        {/* <Main /> */}
        <Table />
        <Card />
        <Footer />

      </>
    );
  }
};

export default App;
