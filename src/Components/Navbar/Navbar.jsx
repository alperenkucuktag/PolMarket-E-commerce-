import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import CartComp from "../Cart/CartComp";

const Navbar = () => {
  return (
    <div className='myheader'>
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
