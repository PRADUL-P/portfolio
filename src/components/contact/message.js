import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { fadeIn } from '../../variants';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { FaCheckCircle,
  // FaTimes
} from "react-icons/fa";
// import { Link } from 'react-router-dom';


// email.js url : https://dashboard.emailjs.com/admin

const Contact = () => {
  const form = useRef();
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
function handlePopupClose() {
    setIsPopupOpen(false);
    window.location.reload(); // Reloads the current section
  }
//   const [showModal, setShowModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    // const handleSubmit = (e) => {
    //         e.preventDefault();
    //         setIsSending(true);
    //         // Perform message sending logic here
    //         setTimeout(() => {
    //           setIsSending(false);
    //           setIsSent(true);
              
    //         }, 2000); // Simulating sending delay with a setTimeout
    //       };
    emailjs.sendForm('service_4o9iuyq', 'template_n73jr3r', form.current, 'IqjV-GrAd-SbsJIud')
      .then((result) => {
          console.log(result.text);
          
          // setIsSuccess(true);
          e.target.reset();
          setIsPopupOpen(true);
          setIsSending(false);
              setIsSent(true);
        //   setShowModal(true); // show modal on success

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="md:w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter your subject"
          className="border border-gray-400 text-gray-700 font-semibold p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="border border-gray-400 text-gray-700 font-semibold  p-2 w-full h-48 rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        {!isSending && !isSent && (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        )}
        {isSending && (<button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50"
      disabled
    >
      Sending...
    </button>
    )}
    {isSent && (
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded cursor-not-allowed opacity-50"
        disabled
      >
        Message Sent!
      </button>
    )}
  </div>
</form>
{isPopupOpen && (
//   <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg">
//     <h2 className="text-xl font-semibold mb-4">Message Sent!</h2>
//     <p className="mb-4">
//       Thank you for your message. We will get back to you as soon as possible.
//     </p>
//     <button
//       className="bg-blue-500 text-gray-800 py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
//       onClick={handlePopupClose}
//     >
//       Close
//     </button>
//   </div>
<div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-green-500">Message Sent!</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Thank you for your message. We will get back to you as soon as possible.</p>
                  <p className="mt-4 text-lg font-bold text-gray-900"></p>
                  <p className="mt-2 text-sm text-gray-500"> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
             onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
)}
</div>
  )
};


export default Contact;