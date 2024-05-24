import React from 'react';
import Skip from '../components/SkipNav';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Work from '../components/Work';
import Site from '../components/Site';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <AboutMe />
        <Work/>
        <Site />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView;