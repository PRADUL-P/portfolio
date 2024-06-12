import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image.png'


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      
       <Link to='/'>
          <h1 className='h-[60px] font-monton uppercase'>pradul p</h1>
          {/* <img className='h-[50px]' src={Logo} alt=''/> */}
        </Link>
        <Link to='/Contact'>
          <h1 className='h-[60px] font-primary uppercase'>Contact</h1>
          {/* <img className='h-[50px]' src={Logo} alt=''/> */}
        </Link>
        {/* <Link to=''> */}
        {/* <button  
        className='btn btn-sm'
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='http://google.com';
          }}
          > REGISTER</button> */}
        {/* </Link> */}
        {/* <a
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
</a> */}
      </div>

    </div>
  </header>;
};

export default Header;
