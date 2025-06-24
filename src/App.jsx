



import React from 'react';
import Header from './Components/header/header';
import Nav from './Components/nav/nav';
import Service from './Components/service/service';
import About from './Components/about/about';
import Projects from './Components/projects/projects';
import Technology from './Components/technology/technology';
import Clients from './Components/clients/clients';
import Questions from './Components/questions/questions';
import Footer from './Components/footer/footer';



const App = () => {
  return (
    <>
      <Nav />
      <Header/>
      <Service/>
      <About/>
      <Projects/>
      <Technology/>
      <Clients/>
      <Questions/>
      <Footer/>
    </>
  );
};

export default App;
