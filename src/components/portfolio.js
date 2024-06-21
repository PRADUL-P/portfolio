
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { fadeIn } from "../variants";
import { useInView } from 'react-intersection-observer';
import { Tilt } from "react-tilt";
import { BiChevronRight} from "react-icons/bi";
import myImage from '../assets/me.jpg';
import Events  from './events';
import Counter  from './counter';
import Skills from './skills';
import Interest from './interest';
import Experience from "./experience";
import Education from "./education";import Projects from "./projects copy";
import Header from './Header';
import Footer from './footer';
import MoveToTop from './moveToTop';
const portfolio = () => {
   // Calculate age based on date of birth
   const birthdate = new Date('2002-09-04');
   const diffInMs = Date.now() - birthdate.getTime();
   const ageDate = new Date(diffInMs);
   const age = Math.abs(ageDate.getUTCFullYear() - 1970);
 
  return (
    <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <Header/>
    <div
    
    className='container mx-auto'>
    <motion.div
    
    className='flex-1'>  
          <h2 className='h2 text-accent'>About <span className='text-white'>me</span> </h2>
          <h3 className='h3 mb-4'></h3>
         <p>I am a dedicated Civil Engineer, with a Bachelor of Technology degree from St. Thomas College of Engineering and Technology in Kannur. Throughout my academic journey, I have demonstrated a deep commitment to innovation and excellence in civil engineering. During my studies, I specialized in structural analysis, design, and drafting, gaining proficiency in industry-standard software such as AutoCAD, Revit, Twinmotion, Enscape, ETABS, and others. This expertise allows me to effectively convey ideas and enhance productivity across diverse projects, always with a keen eye for detail. Collaboration is central to my approach as I thrive in team environments, leveraging collective expertise to achieve outstanding results. Furthermore, my proficiency in web development and coding adds a modern dimension to my skill set, facilitating innovative approaches to project execution and communication. My current areas of passion lie in 3D modeling, design, and Building Information Modeling (BIM), where I aim to enhance collaboration, streamline workflows, and improve project outcomes. Whether crafting architectural marvels, optimizing construction processes, or ensuring structural integrity, my attention to detail remains unwavering. As a civil engineering graduate, I am enthusiastic about the myriad opportunities this field offers. My goal is to consistently deliver exceptional work that exceeds expectations and contributes positively to projects. I am eager to embark on new challenges and collaborations that foster mutual growth and success.</p> 
      </motion.div>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:mt-10 lg:gap-x-20 lg:gap-y-0 my-10'> 
     
       <Tilt className="xs:w-[20px] w-1/3" >
       <motion.div>
       <div className="w-full bg-gradient-to-r from-green-400 to-pink-400 p-1 rounded-2xl shadow-card h-96"
 style={{ backgroundImage: `url(${myImage})`, backgroundSize: "cover", height: "25rem",width:"25rem" }}>
</div>

</motion.div>
  </Tilt>


        <motion.div
    variants={fadeIn('left',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.1}}
        
        className='flex-1'>  
          <div className="col-lg-8 pt-4 pt-lg-0 ">
  <h3 className="text-white"></h3>
  <p className="fst-italic"></p>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap- mt-4">
    <div>
      <ul className=" list-inside ">
        <li  className='p-2.5' >
          <strong>Birthday:</strong> <span>09-04-2002</span></li>
        <li  className='p-2.5' > <strong>Website:</strong> <span> <a href="#" className="text-white">PRADUL-P</a></span></li>
        <li   className='p-2.5'> <strong>Phone:</strong> <span><a href="https://wa.me/+918078376902?text=Hello" target="_blank" className="text-white">+918078376902</a></span></li>
        <li  className='p-2.5' > <strong>City:</strong> <span>kannur,kerala</span></li>
      </ul>
    </div>
    <div>
      <ul className="list-inside ">
        <li className='p-2.5' > <strong>Age:</strong> <span>{age+1}</span></li>
        <li  className='p-2.5' > <strong>Degree:</strong> <span>B-Tech </span></li>
        <li  className='p-2.5' > <strong>Email:</strong> <span>pradul.p123@gmail.com</span></li>
        <li  className='p-2.5' > <strong>Freelance:</strong> <span>Available</span></li>
      </ul>
    </div>
  </div>
  <Counter/>
</div>

        
        </motion.div>
       
      </div>
      <div className='my-14 py-10'>
      <Skills/>  </div>
      <div className='my-14 py-10'>
      <Interest/></div>
      <div className='my-14 py-10'>
      <Experience /></div>
      <div className='my-14 py-10'>
      <Education /></div>
      <div className='my-14 py-10'>
      <Projects /></div>
      <MoveToTop/>
      </div>
      <motion.div
        
          className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
        >
           {/* <button  
        className='btn btn-sm'
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='http://google.com';
          }}
          > contact</button> */}
<a
 href={require("../resume.pdf")}
  className="text-gradient btn-link lg:item-center text-center uppercase"
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.download = "pradul_cv.pdf";
    link.href = e.target.href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  download cv
</a>
{/* <a href="#contact" className="text-gradient btn-link">
                contact 
              </a> */}

        </motion.div>
      {/* <a
 href={require("../resume.pdf")}
  className="btn  flex justify-center uppercase p-8 my-10 mx-96 py-10"
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.download = "pradul_cv.pdf";
    link.href = e.target.href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  download cv
</a> */}
<Footer/>
    </div>
  )

}

export default portfolio