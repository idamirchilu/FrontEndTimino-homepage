import "./Signup.css";
import axios from "axios";
import qs from "qs";
import { notification } from "antd";
import "antd/dist/antd.css";

const handleSubmit = (event) => {
  event.preventDefault();
  let res = qs.stringify({
    first_name: event.target.elements.firstName.value,
    last_name: event.target.elements.lastName.value,
    username: event.target.elements.userName.value,
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  });
  let config = {
    method: "post",
    url: "https://timino-application.iran.liara.run/api/auth/register",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: res,
  };

  axios(config)
    .then(function (response) {
      notification.open({
        message: "Sign-Up was successful.",
        description: "User has been successfuly signed-up.",
        type: "success",
      });
      console.log(JSON.stringify(response.data));
      alert("User has been successfuly signed-up.");
      window.location.replace("/");
    })
    .catch(function (error) {
      notification.open({
        message: "Sign-up was NOT successful",
        description: "The email or username is already in use.",
        type: "error",
      });
      console.log(error.response.data);
    });

  // axios.post(config.url, res)
};

const SignUp = () => {
  return (
    <>
      <div className="card-test">
        <div className="card-signup">
          <form className="form-style" onSubmit={handleSubmit}>
            <h5>Sign-Up</h5>

            <div className="form-group mt-2">
              <label>FirstName</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Enter Your FirstName..."
              />
            </div>

            <div className="form-group mt-2">
              <label>LastName</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Enter Your LastName..."
              />
            </div>

            <div className="form-group mt-2">
              <label>UserName</label>
              <input
                type="text"
                name="userName"
                className="form-control"
                placeholder="Enter Your UserName..."
              />
            </div>

            <div className="form-group mt-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email..."
              />
            </div>

            <div className="form-group mt-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Your Password..."
              />
            </div>

            <div className="form-group mt-2">
              <label>ConfirmPassword</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Enter Your PassWord Again..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
