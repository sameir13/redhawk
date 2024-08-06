import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Loading />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
