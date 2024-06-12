

<> contact card
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { styles } from "../styles";
import { contact } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ServiceCard = ({ index, title, contact,whatsapp,role }) => (
  
  <Tilt className="xs:w-[25px] w-full" >
    <motion.div
  id='Contacts'
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
>
  <div
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  >
    <h3 className="text-white text-[20px] font-bold text-center">
      {title}
    </h3>
    <p>{role}</p>
    <div className="flex items-center justify-center">
    <a href={`tel:${contact}`}>
 {contact}
</a>
{/* <FontAwesomeIcon icon="fa-solid fa-phone" shake /> */}
    </div>
    <div className="flex flex-row">
    <a href={`tel:${contact}`}>
      <FontAwesomeIcon icon={faPhone} className="text-white text-2xl mr-2 "shake />

      
  
</a>
    <a
        href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Enquiring%20about%20Techfest`}
        target="_blank"
        rel="noopener noreferrer"
      ><FontAwesomeIcon icon={faWhatsapp} className="text-green-400 mx-5 text-2xl mr-2" beat fade />

        {/* <FaWhatsapp className="text-white text-2xl" /> */}
      </a>
    </div>
  </div>
</motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>contact us</p>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
 
      </motion.p>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
      >
        {contact.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

</>





// <> contatc form

// import { useState } from "react";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     // Perform message sending logic here
//     setTimeout(() => {
//       setIsSending(false);
//       setIsSent(true);
//       setIsPopupOpen(true);
//     }, 2000); // Simulating sending delay with a setTimeout
//   };

//   return (
//     <div className="md:w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             placeholder="Enter your subject"
//             className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter your message"
//             className="border border-gray-400 text-gray-700 font-semibold  p-2 w-full h-48 rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="flex items-center justify-center">
//           {!isSending && !isSent && (
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
//             >
//               Send Message
//             </button>
//           )}
//           {isSending && (<button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50"
//         disabled
//       >
//         Sending...
//       </button>
//       )}
//       {isSent && (
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50"
//           disabled
//         >
//           Message Sent!
//         </button>
//       )}
//     </div>
//   </form>
//   {isPopupOpen && (
//     <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Message Sent!</h2>
//       <p className="mb-4">
//         Thank you for your message. We will get back to you as soon as possible.
//       </p>
//       <button
//         className="bg-blue-500 text-gray-800 py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
//         onClick={() => setIsPopupOpen(false)}
//       >
//         Close
//       </button>
//     </div>
//   )}
// </div>
// );
// }

// export default ContactForm;
// </>