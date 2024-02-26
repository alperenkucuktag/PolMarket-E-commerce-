import React, { useEffect } from "react";
import { Cursor, Search } from "react-bootstrap-icons";
import { Basket } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../Redux/CardSlice";
import { useNavigate } from "react-router-dom";
import CartComp from "../Cart/CartComp";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  console.log(itemCount, "itemsCount");

  return (
    <div className='NavbarRight'>
      <div className='NavbarRight1'>
        <Search style={{ cursor: "pointer" }} color='gray' size={28} />
      </div>
      <Heart color='gray' style={{ cursor: "pointer" }} size={28} />
      <div onClick={() => navigate("cart")} className='NavbarRight2'>
        <div>{itemCount}</div>
        <Basket style={{ cursor: "pointer" }} color='gray' size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
