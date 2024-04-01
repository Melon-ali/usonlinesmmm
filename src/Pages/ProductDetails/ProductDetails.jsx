import { Link, useParams } from "react-router-dom";
import products from "../../../public/products";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const ProductDetails = () => {
  const { title } = useParams();
  const [productData, setProductData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const selected = productData?.items?.find(
    (e) => e?.id === parseInt(selectedOption)
  );

  console.log(`selected option from product details`, selected);

  useEffect(() => {
    const product = products.find((product) => product.title === title);
    if (product) {
      setProductData(product);
    }
  }, [title]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="mt-20">
        {productData && (
          <div className="container">
            <div className="grid justify-items-center grid-cols-1 container">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-80"
                    src={productData?.cover}
                    alt={productData?.title1}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{productData?.title1}</h2>
                  <p className="font-bold text-2xl">{productData?.price}</p>
                  <p className="text-4xl font-bold m-0">
                    {productData?.title1}
                  </p>
                  <div className="card-actions justify-start">
                    <div className="" style={{ marginBottom: "30px" }}>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "aqua" }}
                      >
                        Our Services Given:
                      </h3>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort0}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort1}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort2}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort3}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort4}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort5}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort6}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort7}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort8}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort9}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort10}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort11}
                      </b>
                      <b className="flex">
                        <RxDotFilled /> {productData?.sort12}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ color: "aqua" }}>Our Services Given:</h3>
              <div className="font-bold" style={{ textAlign: "center" }}>
                <h2 className="text-4xl" style={{ color: "red" }}>
                  24-hour Reply/Contact.
                </h2>
                <h2 className="text-2xl" style={{ color: "mediumspringgreen" }}>
                  Email:{" "}
                  <Link href="">
                    <span style={{ color: "blueviolet" }}>
                      usonlinesmm@gmail.com
                    </span>
                  </Link>
                </h2>
                <h2 className="text-2xl" style={{ color: "green" }}>
                  Whats nambar:{" "}
                  <Link href="">
                    <span style={{ color: "aqua" }}>+1 (240) 466-1831</span>
                  </Link>
                </h2>
                <h2 className="text-2xl" style={{ color: "blueviolet" }}>
                  Skype:{" "}
                  <Link href="">
                    <span style={{ color: "greenyellow" }}>usonlinesmm</span>
                  </Link>
                </h2>
                <h2 className="text-2xl" style={{ color: "Highlight" }}>
                  Telegram:{" "}
                  <Link href="">
                    <span style={{ color: "mediumspringgreen" }}>
                      @usonlinesmm
                    </span>
                  </Link>
                </h2>

                <p className="text-red-500 mt-12">
                  <i>Or live chat is available on our website</i>
                </p>

                <div className="mt-20">
                  <h2 className="text-2xl mb-2">{productData.title1}</h2>
                  <select
                    className="select select-primary w-full max-w-xs"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option>Choose an option</option>
                    {productData?.items?.map((e) => (
                      <option value={e?.id} key={e?.id}>
                        {e?.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-5 flex justify-center gap-3">
                  <del className="text-gray-400">
                    <h2 className="text-3xl ">${selected?.price2}</h2>
                  </del>
                  <h2 className="text-3xl">${selected?.price}</h2>
                </div>
                <div className="gap-2 flex justify-center mt-10">
                  <div>
                    <input type="number" className="border-2 p-2 rounded-md" />
                  </div>
                  <div>
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="container">
        <div className="p-32" style={{ marginTop: "40px" }}>
          <h2 className="text-3xl font-bold py-5">{productData?.title} </h2>
          <p>
            {productData?.description1}
            <Link className="text-blue-500">{productData?.title1}</Link>
          </p>
          <h2 className="text-3xl font-bold py-5">{productData?.title2}</h2>
          <p>
            {productData?.description2}
            <Link className="text-blue-500">{productData?.title1}</Link>
          </p>
          <h2 className="text-3xl font-bold py-5">{productData?.title3}</h2>
          <p>{productData?.description3}</p>
          <h2 className="text-3xl font-bold py-5">{productData?.title4}</h2>
          <p>{productData?.description4}</p>
          <h2 className="text-3xl font-bold py-5">{productData?.title5}</h2>
          <p>{productData?.description5}</p>
          <h2 className="text-3xl font-bold py-5">{productData?.title6}</h2>
          <p>{productData?.description6}</p>
          <h2 className="text-3xl font-bold py-5">{productData?.title7}</h2>
          <p>{productData?.description7}</p>
          <h2 className="text-3xl font-bold py-5">{productData?.title8}</h2>
          <p>{productData?.description8}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
