import React from 'react';
import './style/main.scss';
import Navbar from './components/Navbar'
import Header from './components/Header'
import UsersContainer from './components/UsersContainer'
import Acquaintion from './components/Acquaintion'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Acquaintion />
      <UsersContainer />
      <Footer />
    </>
  )
}

export default App;
