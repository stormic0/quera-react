import "./App.css";
// import { products } from "./data";
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
              {/* این آیتم را تکرار کنید */}
              <div className="list-group-item">
                <div className="d-flex align-items-center justify-content-between">
                  <img
                    src="https://quera.ir/qbox/view/0Cur3oz893/1.jpg"
                    alt="رب گوجه فرنگی"
                    className="product-image"
                  />
                  <span>رب گوجه فرنگی</span>
                  {/* با این فانکشن می‌توانید عدد را با فرمت ریالی نمایش دهید */}
                  <span>{PersianDigits(40_000)}</span>
                </div>
              </div>
              {/* این آیتم را تکرار کنید */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
