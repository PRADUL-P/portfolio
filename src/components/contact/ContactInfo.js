import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const ContactInfo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const callFunction = () => {
    window.location.href = "tel:+918078376902";
  };

  const whatsappFunction = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+918078376902&text=Hello",
      "_blank"
    );
  };
  const emailFunction = () => {
    window.open("mailto:pradul.p123@gmail.com", "_blank");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`inline-flex items-center justify-center rounded-full h-16 w-16 ${
          isHovered
            ? "bg-gradient-to-br  from-blue-400 to-blue-500"
            : "bg-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faPhone} shake 
          className={`text-blue-500 text-3xl transition-transform ${
            isHovered ? "animate-bounce text-gray-50" : ""
          }`}
          onClick={callFunction}
        />
      </div>
      <div
        className={`inline-flex items-center justify-center rounded-full h-16 w-16 mx-4 ${
          isHovered
            ? "bg-gradient-to-br from-green-400 to-green-500"
            : "bg-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       <FontAwesomeIcon icon={faWhatsapp}  beat fade 
          className={`text-green-400 text-3xl transition-transform ${
            isHovered ? "animate-pulse text-white" : "animate-bounce"
          }`}
          onClick={whatsappFunction}
        />
      </div>
      <div
        className={`inline-flex items-center justify-center rounded-full h-16 w-16 ${
          isHovered
            ? "bg-gradient-to-br  from-pink-500 to-red-500"
            : "bg-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaEnvelope
          className={`text-red-500 text-3xl transition-transform ${
            isHovered ? "animate-spin text-white" : " animate-pulse"
          }`}
          onClick={emailFunction}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
