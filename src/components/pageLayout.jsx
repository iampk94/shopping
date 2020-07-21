import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const PageLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
