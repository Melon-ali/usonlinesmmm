import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import socialData from "../../../../public/socialData";
import googleData from "../../../../public/googleData";
import developmentData from "../../../../public/developmentData";
import "../NavbarTree/style/nav.css";
import emailData from "../../../../public/emailData";

const HoverMenu = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <Link tabIndex={0} to={"/"} className="btn m-1">
          Home
        </Link>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Email Services
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {emailData.map((product) => (
            <li key={product?.title}>
              <Link to={`/products/${product?.title}`}>{product?.title1}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Social Services
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {socialData.map((product) => (
            <li key={product?.title}>
              <Link to={`/products/${product?.title}`}>{product?.title1}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Reviews Services
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {/* <li>
            <Link to="/">Trustpilot Reviews</Link>
          </li>
          <li>
            <Link to="/">Yelp Reviews</Link>
          </li>
          <li>
            <Link to="/">Sitejabber Reviews</Link>
          </li> */}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Google Services{" "}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {googleData.map((product) => (
            <li key={product?.id}>
              <Link to={`/products/${product?.title}`}>{product?.title1}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Design Develop{" "}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {developmentData.map((product) => (
            <li key={product?.id}>
              <Link to={`/products/${product?.title}`}>{product?.title1}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoverMenu;
