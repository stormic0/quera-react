import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams, Redirect } from "react-router-dom";

const ProductForm = ({ onSubmit, mode }) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/products/${id}`);
      const data = await res.data;
      setValue("name", data.name);
      setValue("price", data.price);
      setValue("category", data.category);
      setValue("description", data.description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (mode === "edit") getProduct();
  }, [mode]);

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="name-input" className="form-label">
            نام محصول
          </label>
          <input
            type="text"
            className={`form-control${errors.name ? " is-invalid" : ""}`}
            data-testid="name-input"
            placeholder="گوشی آیفون"
            {...register("name", { required: { value: true, message: "وارد کردن نام محصول اجباری است" } })}
          />
          <div className="invalid-feedback">{errors.name && errors.name.message}</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="price-input" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? " is-invalid" : ""}`}
            data-testid="price-input"
            placeholder="1000"
            {...register("price", {
              required: { value: true, message: "وارد کردن قیمت اجباری است" },
              min: { value: 100, message: "مقدار قیمت باید حداقل 100 باشد" },
            })}
          />
          <div className="invalid-feedback">{errors.price && errors.price.message}</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-md-6">
          <label htmlFor="category-select" className="form-label">
            دسته‌بندی
          </label>
          <select className="form-select" data-testid="category-select" {...register("category")}>
            <option value="mobile">موبایل</option>
            <option value="book">کتاب</option>
            <option value="tshirt">تیشرت</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description-textarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? " is-invalid" : ""}`}
            data-testid="description-textarea"
            rows="3"
            {...register("description")}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4 float-start" data-testid="submit-button">
        افزودن محصول
      </button>
    </form>
  );
};

export default ProductForm;
