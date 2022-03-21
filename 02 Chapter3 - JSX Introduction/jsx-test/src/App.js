import "./App.css";
import { products } from "./data";
import { PersianDigits } from "./utils";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center mb-5">سبد خرید</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="list-group">
              {products.map((product) => (
                <div className="list-group-item" key={product.id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <span>{product.name}</span>
                    <span>{PersianDigits(product.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
