import React from "react";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
