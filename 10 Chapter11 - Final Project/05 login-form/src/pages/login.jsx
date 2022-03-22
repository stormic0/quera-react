import { useAuth } from "contexts/Auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "services/api";

export const ERROR_MESSAGES = {
  "Cannot find user": "کاربری با این ایمیل یافت نشد!",
  "Incorrect password": "گذرواژه اشتباه می‌باشد!",
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const { user } = useAuth();
  const history = useHistory();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginAPI({ ...formData });
      user.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/dashboard");
    } catch (err) {
      setErr(ERROR_MESSAGES[err.response.data]);
    }
  };

  useEffect(() => {
    if (user.loggedIn) history.push("/dashboard");
  }, [user]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className={err && "alert alert-danger"} role="alert">
            {err && err}
          </div>
          <div className="card">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  ایمیل
                </label>
                <input
                  className="form-control"
                  dir="ltr"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  گذرواژه
                </label>
                <input
                  className="form-control"
                  dir="ltr"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={!formData.email || !formData.password}>
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
