import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

export default function CodePage() {
  const codeInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handlesubmit2 = (e) => {
    e.preventDefault();

    const data = qs.stringify({
      email: authState.email,
      code: Number(codeInputRef.current.value),
    });
    const config = {
      method: "post",
      url: "https://timino-app-2.iran.liara.run//api/auth/forgot-password/verify-password",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    (async () => {
      try {
        await axios(config);
        dispatch(authActions.addCode(Number(codeInputRef.current.value)));
        navigate("/ResetPage");
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  const style = {
    position: "fixed",
    top: "40%",
    left: "50%",
    background: "#fff",
    webkitTtransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style} className="text-center m-5-auto">
      <h2>Verification Code</h2>
      <h5>Please Enter Your Code</h5>
      <form onSubmit={handlesubmit2}>
        <p>
          <label id="reset_pass_lbl">Code</label>
          <br />
          <input ref={codeInputRef} type="code" name="code" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Verify Code
          </button>
        </p>

        <footer>
          {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </footer>
      </form>
    </div>
  );
}
