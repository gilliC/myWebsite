import React from "react";
import { withRouter } from "react-router-dom";
import NavigationNav from "./components/NavigationNav";
import NavBarRow from "./components/NavBarRow";
import NavTabBrand from "./components/NavTabBrand";
import LogoTabTop from "./components/LogoTabTop";
import PlaceHolder from "./components/PlaceHolder";

const NavigationBar = (props) => {
  const { pages, location } = props;
  const pathname = location.pathname;

  const navsComponents = pages.map((page) => {
    return <NavigationNav page={page} key={page.path} currentActivePath={pathname} />;
  });

  return (
    <NavBarRow>
      <PlaceHolder />
      <NavTabBrand />
      <PlaceHolder />
      {navsComponents}
      <PlaceHolder flex={10} />
      <LogoTabTop />
      <PlaceHolder />
    </NavBarRow>
  );
};

export default withRouter(NavigationBar);
