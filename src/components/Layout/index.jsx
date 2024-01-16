import React from "react";
import Aside from "./Aside";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Aside />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
