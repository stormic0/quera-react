import React, { useEffect, useState } from "react";
import { getAllProductsAPI, removeProductAPI } from "services/api";
import { RemoveModal } from "../components/productlist/RemoveModal";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState({
    product: null,
    isOpen: false,
    component: RemoveModal,
  });

  const getProducts = async () => {
    try {
      const res = await getAllProductsAPI();
      const data = await res.data;
      setProducts([...data]);
    } catch (err) {
      console.error(err);
    }
  };

  const onCloseModal = () => {
    setModal({ ...modal, isOpen: false, product: null });
  };

  const onDeleteConfirm = async (product) => {
    try {
      await removeProductAPI(product.id);
      getProducts();
      onCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {products.length > 0 ? (
              <table className="table table-sm table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">نام محصول</th>
                    <th scope="col">قیمت</th>
                    <th scope="col">دسته‌بندی</th>
                    <th scope="col">موجودی</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.name}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.availability}</td>
                      <td>
                        <div className="btn-group btn-group-sm rounded" role="group">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => setModal({ ...modal, isOpen: true, product })}
                          >
                            حذف
                          </button>
                          <button type="button" className="btn btn-outline-info">
                            ویرایش
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              "محصولی یافت نشد!"
            )}
          </div>
        </div>
      </div>
      {modal.isOpen && (
        <RemoveModal product={modal.product} onClose={onCloseModal} onConfirm={() => onDeleteConfirm(modal.product)} />
      )}
    </>
  );
};

export default ProductsList;
