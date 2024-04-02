import { Link } from "react-router-dom";
import { TiSocialSkype } from "react-icons/ti";
import { FaTelegram, FaLocationArrow, FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-violet-700 nav text-white flex flex-col md:flex-row justify-between items-center">
        <Link className="ml-5 mb-3 md:mb-0">
          <p className="flex">
            <FaLocationArrow /> 90001, LA, CA, Usa
          </p>
        </Link>
        <Link to='https://wa.link/n3hjji' target="_black" className="mb-3 md:mb-0">
          <p className="flex">
            <FaWhatsappSquare /> Whats App +1 (240) 466-1831
          </p>
        </Link>
        <Link to='https://t.me/usonlinesmm' target="_black" className="mb-3 md:mb-0">
          <p className="flex">
            <FaTelegram /> Telegram: @usonlinesmm
          </p>
        </Link>
        <Link className="mr-5" to="https://join.skype.com/invite/yi3czZYCLwTs" target="_black">
          <p className="flex">
            <TiSocialSkype /> Skype: usonlinesmm
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
