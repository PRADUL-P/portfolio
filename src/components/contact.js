// import { motion } from 'framer-motion';
import React from 'react';
// import { fadeIn } from '../variants';
import Header from './Header';
import Contact from './contact/Contact';
import Footer from './footer';
const Contacts = () => {
  return (
   <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
    <Header/>
    <Contact/>
    <Footer/>
   </div>
  )
};

export default Contacts;