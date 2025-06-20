



import React from 'react';
import Header from './Components/header/header';
import Nav from './Components/nav/nav';
import Service from './Components/service/service';
import About from './Components/about/about';
import Footer from './Components/footer/footer';


const App = () => {
  return (
    <>
      <Nav />
      <Header/>
      <Service/>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
