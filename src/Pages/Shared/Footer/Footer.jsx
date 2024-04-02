import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { TiSocialSkype } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <aside>
        <div className="text-2xl font-bold">
          <span>
            Questions? Reach us <br /> 24-HOUR REPLY/CONTACT.
          </span>
          <br />
          <Link><h3><span>Whats : +1 (240) 466-1831</span></h3></Link>
          <br />
          <button className="btn btn-primary">Request for quote</button>
        </div>
      </aside>
      <nav>
        
      <h3 className="text-4xl font-bold">Payment Methods</h3>
        <ul className="text-2xl">
          <li>
            <Link href="/">Bitcoin :– Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">Ethereum :– Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">USDT :– Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">Any Cryptocurrency Coin :- Contact Us</Link>
          </li>
          <li>
            <Link href="/">PayPal :- Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">Cash App :– Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">Wise :– Accpet Contact Us</Link>
          </li>
          <li>
            <Link href="/">Visa/Master Card :- Accpet Contact Us</Link>
          </li>
        </ul>
      </nav>
      <nav>
        
      <h3 className="text-4xl font-bold">SERVICES</h3>
        <ul className="text-2xl">
          <li>
            <Link href="/">Web Design & Development</Link>
          </li>
          <li>
            <Link href="/">Branding & Creative Services</Link>
          </li>
          <li>
            <Link href="/">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/">E-Commerce</Link>
          </li>
          <li>
            <Link href="/">Email Marketing</Link>
          </li>
          <li>
            <Link href="/">Sales Marketing</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <h3 className="text-3xl font-bold">CONNECT</h3>
          <div className="connect pt-2 pb-2">
            <ul className="flex gap-3 text-purple-600">
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaWhatsappSquare size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <ImTelegram size={25} />
                </Link>
              </li>
              <li>
                <Link to="https://join.skype.com/invite/yi3czZYCLwTs" target="_black">
                  <TiSocialSkype size={25} />
                </Link>
              </li>
            </ul>
          </div>
          
          <h3 className="text-3xl font-bold">24-HOUR REPLY/CONTACT.</h3>
          <ul className="text-2xl">
            <li>
              <Link to="mailto:usonlinesmm@gmail.com" target="_black">Email: <span className="text-blue-600">usonlinesmm@gmail.com</span></Link>
            </li>
            <li>
              <Link to="https://join.skype.com/invite/yi3czZYCLwTs" target="_black">Skype: <span className="text-rose-500"> usonlinesmm </span></Link>
            </li>
            <li>
              <Link to='https://t.me/usonlinesmm' target="_black">Telegram: <span className="text-teal-400">@usonlinesmm</span></Link>
            </li>
            <li>
              <Link to='https://wa.link/n3hjji' target="_black"> Whats nambar : +1 (240) 466-1831</Link>
            </li>
          </ul>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
