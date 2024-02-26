import React, { useState } from "react";
import {
  useGetCategoryProductsQuery,
  useGetProductsQuery,
} from "../../Redux/ProductSlice";
import Loading from "../Loading";
import Product from "./Product";
import Pagination from "react-bootstrap/Pagination";

const Products = ({ category, sort }) => {
  const {
    data: products,
    isLoading,
    error,
  } = category ? useGetCategoryProductsQuery(category) : useGetProductsQuery();

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset) || [];
  const pageCount = Math.ceil((products?.length || 1) / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className='products'>
        {currentItems
          ?.sort((a, b) =>
            sort === "İnc"
              ? a.price - b.price
              : sort === "dec"
              ? b.price - a.price
              : ""
          )
          ?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
      </div>
      <Pagination>
        {itemOffset > 0 && (
          <Pagination.Prev
            onClick={() => setItemOffset(itemOffset - itemsPerPage)}
          />
        )}
        {Array.from({ length: pageCount }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index === Math.floor(itemOffset / itemsPerPage)}
            onClick={() => handlePageClick(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        {currentItems.length > 0 &&
          itemOffset + itemsPerPage < products.length && (
            <Pagination.Next
              onClick={() => setItemOffset(itemOffset + itemsPerPage)}
            />
          )}
      </Pagination>
      <p>
        Sayfa: {Math.floor(itemOffset / itemsPerPage) + 1} / {pageCount}
      </p>
    </div>
  );
};

export default Products;
