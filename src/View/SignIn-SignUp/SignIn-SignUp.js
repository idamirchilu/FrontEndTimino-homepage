import React from "react";
import { request } from "./Network.js";
import "./SignIn-SignUp.css";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const navigate = useNavigate();
  const signIn = (event) => {
    event.preventDefault();

    request("POST", "/api/auth/login", {
      body: {
        username: event.target.username.value,
        password: event.target.password.value,
      },
    })
      .then((data) => {
        alert("*** Signed in successfully ***");
        // TODO :: show successfully message redirect to dashboard
        window.location.replace("/dashboard");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signUp = (event) => {
    event.preventDefault();

    if (
      event.target.confirm_password.value.toString() !==
      event.target.password.value.toString()
    ) {
      // Todo :: show error message
    }

    request("POST", "/api/auth/register", {
      body: {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        confirm_password: event.target.confirm_password.value,
      },
    })
      .then((data) => {
        alert("*** Signed up successfully ***");
        // TODO :: show successfully message redirect to login ( reload page )
        window.location.replace("/signup");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signUpButton = () => {
    const customContainer = document.getElementById("customContainer");
    customContainer.classList.add("right-panel-active");
  };

  const signInButton = () => {
    const customContainer = document.getElementById("customContainer");
    customContainer.classList.remove("right-panel-active");
  };

  return (
    <>
      <div className="customContainer" id="customContainer">
        <div className="form-customContainer sign-up-customContainer">
          <form onSubmit={signUp}>
            <h2>Sign Up</h2>
            <input
              className="my-1 rounded-3"
              type="text"
              name="first_name"
              placeholder="First Name"
            />
            <input
              className="my-1 rounded-3"
              type="text"
              name="last_name"
              placeholder="Last Name"
            />
            <input
              className="my-1 rounded-3"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="my-1 rounded-3"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="my-1 rounded-3"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className="my-1 rounded-3"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button className="my-1">Sign Up</button>
          </form>
        </div>
        <div className="form-customContainer sign-in-customContainer">
          <form onSubmit={signIn}>
            <h2>Sign in</h2>
            <br />
            <input
              className="my-1 rounded-3"
              type="username"
              name="username"
              placeholder="Email or Username"
            />
            <input
              className="my-1 rounded-3"
              type="password"
              name="password"
              placeholder="Password"
            />
            <a onClick={() => navigate("/ForgetPasswordPage")}>
              Forgot your password?
            </a>
            <button className="my-1">Sign In</button>
          </form>
        </div>
        <div className="overlay-customContainer">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 style={{ color: "#fff" }}>Welcome Back!</h1>
              <p style={{ color: "white", opacity: "80%" }}>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={signInButton} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 style={{ color: "#fff" }}>Hello, Friend!</h1>
              <p style={{ color: "white", opacity: "80%" }}>
                Enter your personal details and start journey with us
              </p>
              <button onClick={signUpButton} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
