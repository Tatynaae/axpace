import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import BorderedInput from "../UI/BorderedInput";
import "./SignIn.scss";

const SignIn = () => {
  const { theme } = useThemeContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (theme === "light") {
    return (
      <div className="sign-in-light">
        <div className="sign-in-light_block">
          <p className={theme === "dark" ? "page-title" : "page-title-l"}>
            Sign in to your account
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <BorderedInput defaultValue={""} placeholder="Email" />
            <BorderedInput defaultValue={""} placeholder="Password" />
            <div className="sign-in-light_block_remember">
              <div className="sign-in-light_block_remember_sq"></div>
              <div>Remember me</div>
            </div>
            <button className={theme === "dark" ? "success-btn" : "success-btn-l"}>Sign in</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="sign-in">
      <div className="sign-in_block">
        <p className={theme === "dark" ? "page-title" : "page-title-l"}>Sign in to your account</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <BorderedInput defaultValue={""} placeholder="Email" />
          <BorderedInput defaultValue={""} placeholder="Password" />
          <div className="sign-in_block_remember">
            <div className="sign-in_block_remember_sq"></div>
            <div>Remember me</div>
          </div>
          <button className={theme === "dark" ? "success-btn" : "success-btn-l"}>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
