import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faGlobe,faImage,faDesktop,faCode,faDraftingCompass,faCube,faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { services } from "../database/datas";
function Service({ service, onClick }) {
  return (
    <motion.div 
    variants={fadeIn("up", "spring", 0.5, 0.75)}
    className="rounded-lg shadow-md my-8 w-full cursor-pointer  " 
    onClick={onClick}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl border-2 border-x-fuchsia-800'
    >
      <div className="p-4 relative h-62 flex flex-col justify-center items-center">
      <FontAwesomeIcon icon={service.icon}  beatFade  className='h-10 justify-center items-center p-5' />
  <h3 className="text-base font-medium mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm  h-20  ">{service.description}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2 m-4 flex justify-between items-center">
        {/* <span className="text-gray-600 font-medium">{service.amount}</span>  */}
        <span className="text-gray-500">{service.projects} Projects</span>
        <span className="text-green-500"><FontAwesomeIcon icon={faArrowRight} /></span>
      </div>
    </Tilt>
  </motion.div>
  );
}

function ServiceModal({ service, showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <p className="mt-4 text-lg font-bold text-gray-900">{service.amount}</p>
                  <p className="mt-2 text-sm text-gray-500">{service.projects} Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null}
</>
);
}

function App() {
const [selectedService, setSelectedService] = useState(null);
const [showModal, setShowModal] = useState(false);

const handleServiceClick = (service) => {
setSelectedService(service);
setShowModal(true);
};

return (
<div className="bg-transparent" id='services'>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="py-12">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-extrabold text-slate-100 uppercase">my Services</h2>
{/* <p className="mt-4 text-lg text-slate-300">We offer a wide range of services to help grow your business.</p> */}
<div className="mt-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{services.map((service) => (
<Service key={service.id} service={service} onClick={() => handleServiceClick(service)} />
))}
</div>
</div>
</div>
</div>
</div>
<ServiceModal service={selectedService} showModal={showModal} setShowModal={setShowModal} />
</div>
);
}

export default App;