import "./BigInfo.css";
// import digital from "../../../assets/products"

const BigInfo = ({ info }) => {
  const {
    image,
    title,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
  } = info;

  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl m-3 p-5`}>
      <figure className="pl-5 pt-5">
        <img src={image} className="w-32" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <b>{title}</b>
        </h2>
        <b>
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
          <p>{description4}</p>
          <p>{description5}</p>
          <p>{description6}</p>
          <p>{description7}</p>
          <p>{description8}</p>
        </b>
      </div>
    </div>
  );
};

export default BigInfo;
