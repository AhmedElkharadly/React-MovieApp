import { useState } from "react";
import Button from "../Button/Button";
import "./loginform.css";
import { hideIc } from "../svg";

const LoginForm = (props) => {
  // console.log(props)
  const [inputs, setinputs] = useState({ email: "", password: "" });
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [l1hoverd, setl1Hover] = useState(false);
  const [l2hoverd, setl2Hover] = useState(false);
  const [validEmail, setEmailExp] = useState(
    new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
  );
  const [validPassword, setPasslExp] = useState(
    new RegExp("^[a-zA-Z0-9._:$!%-]"
      // "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
      )
  );

  const hadleEmailChange = (e) => {
    setinputs({
      ...inputs,
      email: e.target.value,
    });
    // console.log(e.target.value);
  };
  const hadlePasswordChange = (e) => {
    setinputs({
      ...inputs,
      password: e.target.vlaue,
    });
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validate = () => {
    !validEmail.test(inputs.email) ? setEmailErr(true) : setEmailErr(false);
    !validPassword.test(inputs.password)
      ? setPwdError(true)
      : setPwdError(false);
  };

  const whenl1Hoverd = (e) => {
    setl1Hover(true);
  };

  const whenl1NotHoverd = (e) => {
    setl1Hover(false);
  };
  const whenl2Hoverd = (e) => {
    setl2Hover(true);
  };

  const whenl2NotHoverd = (e) => {
    setl2Hover(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formContainer">
        <label
          htmlFor="e-mail"
          className="emaillable"
          style={
            l1hoverd
              ? { top: "6px", fontSize: "14px" }
              : { top: "30px", fontSize: "15px" }
          }
        >
          Email Adress
        </label>
        <input
          type="text"
          id="e-mail"
          name="email"
          className="emailInput"
          // style={validEmail ? {borderColor : "red"} : ""}
          aria-describedby="emailHelp"
          value={inputs.email}
          onChange={hadleEmailChange}
          onFocus={whenl1Hoverd}
        />
        <div id="emailHelp" className="emailWarr">
          {emailErr && <p>Your email is invalid</p>}
        </div>
        <label
          htmlFor="password"
          className="emaillable"
          style={
            l2hoverd
              ? { top: "6px", fontSize: "14px" }
              : { top: "30px", fontSize: "15px" }
          }
        >
          Password
        </label>
        <input
          name="pass"
          id="password"
          type="password"
          className="passInput"
          aria-describedby="passHelp"
          onFocus={whenl2Hoverd}
          value={inputs.password}
          onChange={hadlePasswordChange}
        />
        <div id="passHelp" className="emailWarr">
          {pwdError && <p>Your Password is invalid</p>}
        </div>

        <Button
          w="250px"
          name="Login"
          color="white"
          // type=""
          HBC={validate}
          // bgColor="black"
        />
      </div>
    </form>
  );
};

export default LoginForm;
