import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/services';
import Portfolio from './components/projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer';
import MoveToTop from './components/moveToTop';

const App = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 bg-no-repeat bg-cover overflow-hidden">
      <Navbar />
      <Banner />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
      <MoveToTop />
    </div>
  );
};

export default App;
