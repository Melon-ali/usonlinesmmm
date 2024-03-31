import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, title1, cover, description, price } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
      <figure>
        <Link to={`/products/${title}`}>
          <img src={cover} alt={title1} />
        </Link>
      </figure>
      <div className="card-body">
        <Link to={`/products/${title}`}>
          <h2 className="card-title">{title1}</h2>
        </Link>
        <p>{description}</p>
        <p className="text-2xl">{price}</p>
        <p className="flex text-2xl">
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
        </p>
        <div className="card-actions justify-end">
          <Link to={`/products/${title}`} className="btn btn-primary">
            Select options
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
