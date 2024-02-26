import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductQuery } from "../Redux/ProductSlice";
import DetailComp from "../Components/Detail/DetailComp";
import Loading from "../Components/Loading";

const Detail = () => {
  const { id } = useParams();

  // Redux Toolkit Query hook'unu kullanarak detay ürünü getirme
  const {
    data: productDetail,
    isLoading,
    error,
  } = useGetDetailProductQuery(id);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <DetailComp productDetail={productDetail} />
    </div>
  );
};

export default Detail;
