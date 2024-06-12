import { useState } from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { projects } from "../database/datas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };
    

  const handleBtnClick = (category) => {
    setActiveBtn(category);
  };

  const filteredProjects = activeBtn === "all" ? projects : projects.filter(project => project.category === activeBtn);

  return (
    <div className="container mx-auto py-12" id="projects">
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "all" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("all")}
        >
          All
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "civilengg" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("civilengg")}
        >
          Civil Engineering
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "webdesign" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("webdesign")}
        >
          Web Design
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
    <motion.div
      key={project.id}
      className="relative rounded-lg overflow-hidden shadow-lg bg-tertiary"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Tilt className="tilt" options={{ max: 25 }}>
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={project.imgSrc}
          alt={project.title}
        />
       <a
  href={project.hostedPage}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-3 right-3 m-2 p-2 rounded-full text-gray-700  text-sm font-medium hover:bg-slate-800-800 transition-colors duration-300"
>
  <Link to={project.hostedPage}>
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade />
    </Link>
</a>
      </Tilt>
      <Tilt className="tilt" options={{ max: 25 }}>
        <div className="p-4 transition-transform duration-500 ease-in-out transform hover:scale-95">
          <motion.h2
            className="font-bold text-lg mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            {project.title}
          </motion.h2>
          <motion.p
            className="text-gray-700 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            {project.description.length > 200 ? project.description.slice(0,200) + "..." : project.description} 
            {project.description.length > 200 ? (
              <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300 focus:outline-none" onClick={() => openModal(project)}>More</button>
            ) : null}
          </motion.p>
        </div>
      </Tilt>
    </motion.div>
  ))}
  
</div>
{selectedProject && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm




:w-11/12">
<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div
           className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
         >
<svg
             className="h-6 w-6 text-blue-600"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             aria-hidden="true"
           >
<path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M5 13l4 4L19 7"
             />
</svg>
</div>
<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
<h3
             className="text-lg leading-6 font-medium text-gray-900"
             id="modal-title"
           >
{selectedProject.title}
</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">
{selectedProject.description}
</p>
</div>
</div>
</div>
</div>
<div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
<button
type="button"
className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
onClick={() => setSelectedProject(null)}
>
Close
</button>
</div>
</div>
</div>

  </div>
)}
    </div>
  );
  
};

export default Portfolio;










