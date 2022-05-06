import React, { useEffect, useState } from "react";
import EcomProducts from "../../EcomProducts/EcomProducts.json";
import Product from "../Product/Product";
import "./AllProducts.style.css";
import ProductCart from "./ProductCart/ProductCart";

const AllProducts = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    setProductsInfo(EcomProducts);
  }, []);

  const handleAddProducts = (product)=>{
    const newProduct = [...addProduct, product];
    setAddProduct(newProduct);
  }

  console.log(addProduct)

  return (
    <div className="main">
      <div>
        <h2 className="heading">All Products</h2>
        <div className="p-container">
          {productsInfo.map((product) => (
            <Product goToProduct={product} key={product.id} handleAddProducts={handleAddProducts} />
          ))}
        </div>
      </div>
      <div>
        <ProductCart productCart = {addProduct} />
      </div>
    </div>
  );
};

export default AllProducts;
