import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CardSlice";
import Badge from "react-bootstrap/Badge";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className='detail'>
      <img src={productDetail?.image} alt='' />
      <div>
        <div className='titles'>{productDetail?.title}</div>
        <div className='description'>{productDetail?.description}</div>
        <Badge className='rate1' bg='primary'>
          Ürün Puanı: {productDetail?.rating?.rate}
        </Badge>
        <Badge className='rate' bg='secondary'>
          Kalan Ürün: {productDetail?.rating?.count}
        </Badge>
        <div className='price'>
          Fiyat:{productDetail?.price} <span>TL</span>{" "}
        </div>
        <div className='counts'>
          <div onClick={decrement} className='dec'>
            -
          </div>
          <input type='' value={quantity} />
          <div onClick={increment} className='inc'>
            +
          </div>
        </div>
        <div onClick={addBasket} className='basket'>
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
