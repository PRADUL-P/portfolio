import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { fadeIn } from "../variants";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
   })
  return( 
  <section className='section ' ref={ref}>
   
        <div  className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={18} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
           Projects
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={18} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            Happy <br/>
           client
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={15} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            awards <br/>
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={5} duration={3}/>:null
            }k+

           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            hours of support <br/>
            </div>
          </div>
        </div>
     
 
    
  </section>)
};

export default About;
