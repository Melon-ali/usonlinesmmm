import products from "../../../public/products.js";
import Product from "../Home/Product/Product";

const Products = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-2 container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
