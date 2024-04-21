import { Link } from "react-router-dom";
import banner from "../../../assets/products/banner.jpg";

const History = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1">
          <img src={banner} alt="banner" className="w-full rounded-lg" />
        </div>
        <div className="md:order-2">
          <p className="text-2xl">
            <Link to="" className="text-blue-500">
              <span>Usonlineesmm</span>
            </Link>{" "}
            is a digital service provider agency based in the United States
            that specializes in social media marketing, search engine
            optimization, web development, and content creation. With a team of
            experienced marketers, web developers, designers, and content
            creators, the agency offers customized solutions to businesses and
            individuals who seek to establish their online presence and improve
            their visibility. USONLINEESMM Club is committed to delivering excellent
            customer service and providing results that exceed clients’
            expectations. Whether a client seeks to increase their revenue or
            build their brand, usonlineesmm Club offers the expertise and services
            to help them achieve their objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
