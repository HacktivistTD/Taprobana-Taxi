import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faInstagram, faFacebook, faTiktok, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Footerbar = () => {
  return (
    <footer className="bg-gray-800 text-black py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-white hover:text-yellow-400">
          <FontAwesomeIcon icon={faAppStore} size="xl" className='px-3' />
          <FontAwesomeIcon icon={faGooglePlay} size="xl" className='px-3' />
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start text-white ">
          <a href="#" className=" px-2 hover:text-yellow-400 ">T & C</a>
          <a href="#" className=" px-2  hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className=" px-2  hover:text-yellow-400">Contact Us</a>
          <a href="#" className=" px-2  hover:text-yellow-400">Careers</a>
        </nav>

        <div className="text-center font-bold mt-4 md:mt-0 text-yellow-400">
          <p className="text-sm">
            &copy; Copyright 2024 - Taprobana Cab Service.<br/>
            All rights reserved - Realisation: "HACKTIVIST"<br/>
            Using this website means you accept our terms and conditions.
          </p>
        </div>

        <div className="flex mt-4 md:mt-0  text-white ">
          <a href="#" className='mx-2 hover:text-yellow-400 '>
            <FontAwesomeIcon icon={faYoutube} size="xl" />
          </a>
          <a href='#' className='mx-2 hover:text-yellow-400 '>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </a>
          <a href='#' className='mx-2  hover:text-yellow-400'>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a href='#' className='mx-2  hover:text-yellow-400'>
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
          <a href='#' className='mx-2  hover:text-yellow-400'>
            <FontAwesomeIcon icon={faTiktok} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;
