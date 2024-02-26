import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Table from './components/table/table';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* <Main /> */}
        <Table />
        <Footer />
      </>
    );
  }
};

export default App;
