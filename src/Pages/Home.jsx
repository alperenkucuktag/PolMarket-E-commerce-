import React, { useState } from "react";
import Sorting from "../Components/Home/Sorting";
import Category from "../Components/Home/Category";
import Products from "../Components/Home/Products";
import SliderComp from "../Components/Home/SliderComp";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className='myhome'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
