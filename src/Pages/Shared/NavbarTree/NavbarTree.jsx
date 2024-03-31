import NavLinks from "../../NavbarTwo/NavLinks"
import NavLinksFive from "../../NavbarTwo/NavLinksFive";
import NavLinksFour from "../../NavbarTwo/NavLinksFour";
import NavLinksSix from "../../NavbarTwo/NavLinksSix";
import NavLinksTree from "../../NavbarTwo/NavLinksTree";
import NavLinksTwo from "../../NavbarTwo/NavLinksTwo"
import HoverMenu from "./HoverMenu"
import './style/nav.css';

const NavbarTree = () => {
  return (
    <div className="navBackground">
        <div className="navbar bg-violet-400 rounded nav">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLinks></NavLinks>
                    <NavLinksTwo></NavLinksTwo>
                    <NavLinksTree></NavLinksTree>
                    <NavLinksFour></NavLinksFour>
                    <NavLinksFive></NavLinksFive>
                    <NavLinksSix></NavLinksSix>
                </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            <HoverMenu></HoverMenu>
                
            </div>
            
            <div className="navbar-end">
                <a className="btn">Menu</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarTree