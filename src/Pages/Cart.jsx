import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../Redux/CardSlice";
import CartComp from "../Components/Cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
        </div>
      ) : (
        <div>Sepetiniz Boş...</div>
      )}
      <div className='total'>
        Toplam tutar: <span>{totalAmount} TL</span>
      </div>
    </div>
  );
};

export default Cart;
