import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from '../assets/image.png';
import { fadeIn } from '../variants';

const HeroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" id='home'>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="md:w-1/2">
            {/* <motion.div 
             variants={fadeIn('down', 0.3)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
            className="md:hidden flex items-center justify-center mb-8">
              <div className="relative">
                <img
                  src={Image}
                  alt="Hero"
                  className="w-56 h-56 md:w-72 md:h-72  blend-image"
                />
         
              </div>
            </motion.div> */}
            <div className="flex items-center gap-y-8 lg:flex-row lg:items-center">
              <div className="flex-1 font-secondary lg:text-center items-center mt-12">
                <motion.h1
                  variants={fadeIn('down', 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-[55px] leading-[0.8] lg:text-[110px] m-5 font-nme uppercase"
                >
                  pradul p
                </motion.h1>
                <motion.div
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="mb-6 text-[26px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
                >
                  <span className="text-white mr-4 m-5">i am a </span>
                  <TypeAnimation
                    sequence={["civil engineer", 2000, "web developer", 2000]}
                    speed={50}
                    className="text-accent font-Nabla"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn('up', 0.7)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
                >
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
                  <a href="#contact" className="text-gradient btn-link">
                    contact
                  </a>
                </motion.div>
                
                <motion.div
                  variants={fadeIn('left', 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
                >
                  <a
                    href="https://github.com/PRADUL-P"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pradul/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/pradul_prashandan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
           <div className="md:w-1/2 hidden md:flex items-center justify-center">
          <motion.div 
             variants={fadeIn('left', 0.3)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
            className="flex items-center justify-center mb-8">
              <div className="relative">
                <img
                  src={Image}
                  alt="Hero"
                  className="w-56 h-56 md:w-72 md:h-72  rounded-full shadow-lg blend-image"
                />
               
         
              </div>
            </motion.div>
             {/* <div className="relative">
              <img
                src={Image}
                alt="Hero"
                className="w-56 h-56 md:w-72 md:h-72 blend-image"
                // className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg blend-image"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-75"></div> 
           
            </div>   */}
          </div> 
          <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.5 }}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  style={{ transform: "translateX(-50%)" }} // Added style property
>
  <a href="#about">
    <FaChevronDown className="text-white text-4xl animate-bounce" />
  </a>
</motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroPage;















// import { motion } from "framer-motion";
// import React from "react";

// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";
// import Image from "../assets/web1.png";
// import { fadeIn } from "../variants";
// const Banner = () => {
 
//   return (
//     <section className="min-h-[46vh] lg:min-h-[78vh]" >
//   <div className="container mx-auto flex justify-center items-center text-center">
//     <div className="flex items-center gap-y-8 lg:flex-row lg:items-center">
//       <div className="flex-1 font-secondary lg:text-center items-center mt-12">
//         <motion.h1
//           variants={fadeIn('down', 0.3)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once:false, amount:0.7}}
//           className="text-[55px] leading-[0.8] lg:text-[110px] m-5 font-nme uppercase"
//         >
//           pradul p
//         </motion.h1>
//         <motion.div
//           variants={fadeIn('up', 0.3)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once:false, amount:0.7}}
//           className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
//         >
//           <span className="text-white mr-4 m-5">i am a </span>
//           <TypeAnimation
//             sequence={["civil engineer", 2000, "web developer", 2000]}
//             speed={50}
//             className="text-accent font-Nabla"
//             wrapper="span"
//             repeat={Infinity}
//           />
//         </motion.div>
//         {/* <motion.p
//           variants={fadeIn('up', 0.4)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once:false, amount:0.7}}
//           className="mb-8 max-w-max mx-auto lg:mx-0 lg:text-center"
//         >
//           @ St. Thomas College of Engineering and Technology Mattannur, Kannur
//         </motion.p> */}
//         <motion.div
//           variants={fadeIn('up', 0.7)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once:false, amount:0.7}}
//           className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
//         >
//            {/* <button  
//         className='btn btn-sm'
//         type="button"
//         onClick={(e) => {
//           e.preventDefault();
//           window.location.href='http://google.com';
//           }}
//           > contact</button> */}
// <a
//  href={require("../resume.pdf")}
//   className="text-gradient btn-link lg:item-center text-center uppercase"
//   onClick={(e) => {
//     e.preventDefault();
//     const link = document.createElement("a");
//     link.download = "pradul_cv.pdf";
//     link.href = e.target.href;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }}
// >
//   download cv
// </a>
// <a href="#contact" className="text-gradient btn-link">
//                 contact 
//               </a>

//         </motion.div>
//         <motion.div 
//   variants={fadeIn('left',0.5)}
//   initial='hidden'
//   whileInView={'show'}
//   viewport={{once:false,amount:0.7}}
//   className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
// >
//   <a href="https://github.com/PRADUL-P"  target="_blank" rel="noopener noreferrer"> 
//     <FaGithub />
//   </a>
//   <a href="https://www.linkedin.com/in/pradul/" target="_blank" rel="noopener noreferrer">
//     <FaLinkedin />
//   </a>
//   <a href="https://www.instagram.com/pradul_prashandan/" target="_blank" rel="noopener noreferrer">
//     <FaInstagram />
//   </a>
// </motion.div>


//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default Banner;
