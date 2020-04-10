import React from "react";
import { withRouter } from "react-router-dom";
import NavigationNav from "./components/NavigationNav";
import NavBarRow from "./components/NavBarRow";
import NavTabBrand from "./components/NavTabBrand";
import LogoTabTop from "./components/LogoTabTop";

const NavigationBar = (props) => {
  const { pages, location } = props;
  const pathname = location.pathname;

  const navsComponents = pages.map((page) => {
    return <NavigationNav page={page} key={page.path} localPath={pathname} />;
  });

  return (
    <NavBarRow>
      <div style={{ flex: 1 }} />
      <NavTabBrand />
      <div style={{ flex: 1 }} />
      {navsComponents}
      <div style={{ flex: 10 }} />
      <LogoTabTop />
      <div style={{ flex: 1 }} />
    </NavBarRow>
  );
};

export default withRouter(NavigationBar);
