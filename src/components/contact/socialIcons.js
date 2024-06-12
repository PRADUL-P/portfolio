import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="inline-flex items-center justify-center space-x-6 align-middle">
      <a href="https://www.facebook.com/pradul.prashandan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 duration-300 mx-2 hover:scale-110 transition-transform">
        <FaFacebookF className="w-6 h-6 text-6xl" />
      </a>
      <a href="https://www.instagram.com/pradul_prashandan/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 duration-300 mx-2 hover:scale-110 transition-transform">
        <FaInstagram className="w-6 h-6 text-6xl" />
      </a>
      <a href="https://www.linkedin.com/in/pradul/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 duration-300 mx-2 hover:scale-110 transition-transform">
        <FaLinkedinIn className="w-6 h-6 text-6xl" />
      </a>
    
      <a href="https://www.youtube.com/channel/UC13ZcNIVcB1-3F0xV8y1F0w" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 duration-300 mx-2 hover:scale-110 transition-transform">
        <FaYoutube className="w-6 h-6 text-6xl" />
      </a>
      <a href="https://github.com/PRADUL-P" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 duration-300 mx-2 hover:scale-110 transition-transform">
        <FaGithub className="w-6 h-6 text-6xl" />
      </a>
    </div>
  );
}

export default SocialIcons;
