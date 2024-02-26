import React from "react";
import { removefromCart } from "../../Redux/CardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className='cartComp'>
      <img src={cart?.image} alt='' />
      <div className='title'>
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='myprice'>
        {cart?.price}TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removefromCart(cart?.id))}
        className='delete'
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
