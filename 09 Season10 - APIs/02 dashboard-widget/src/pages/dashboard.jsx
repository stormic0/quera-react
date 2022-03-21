import { useEffect, useState } from "react";
import axios from "axios";
import DashboardWidget from "components/dashboard/DashboardWidget";

const Dashboard = () => {
  const [data, setData] = useState({
    productCount: 0,
    totalIncome: 0,
    totalOrders: 0,
  });

  const getProductsCount = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      const data = await res.data;
      setData((prev) => ({ ...prev, productCount: data.length }));
    } catch (err) {
      console.error("Somthing went wrong!", err);
    }
  };

  const sumReducer = (sum, prod) => (sum += prod.price);

  const getOrdersData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/orders");
      const data = await res.data;
      const successfullOrders = data.filter((prod) => prod.status === 1);
      setData((prev) => ({
        ...prev,
        totalIncome: successfullOrders.reduce(sumReducer, 0),
        totalOrders: successfullOrders.length,
      }));
    } catch (err) {
      console.error("Somthing went wrong!", err);
    }
  };

  useEffect(() => {
    getProductsCount();
    getOrdersData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد محصولات"
            icon="tshirt"
            value={data.productCount}
            color="bg-primary"
            testId="products-count"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="درآمد کل"
            icon="coins"
            value={data.totalIncome}
            color="bg-warning"
            testId="total-incomes"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد سفارشات موفق"
            icon="shopping-cart"
            value={data.totalOrders}
            color="bg-danger"
            testId="successful-orders-count"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
