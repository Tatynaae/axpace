import React from "react";
import "./SignIn.scss";
import BorderedInput from "../UI/BorderedInput";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in">
      <div className="sign-in_block">
        <p className="page-title">Sign in to your account</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <BorderedInput defaultValue={""} placeholder="Email" />
          <BorderedInput defaultValue={""} placeholder="Password" />
          <div className="sign-in_block_remember">
            <div className="sign-in_block_remember_sq"></div>
            <div>Remember me</div>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
