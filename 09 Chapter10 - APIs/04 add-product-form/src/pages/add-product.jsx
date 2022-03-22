import ProductForm from "../components/product/ProductForm";
import React from "react";
import axios from "axios";

const AddProduct = () => {
  const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8000/products", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="card-header">افزودن محصول</div>
      <div className="card-body">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProduct;
