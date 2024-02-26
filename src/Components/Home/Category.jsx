import React from "react";
import { useGetAllCategoriesQuery } from "../../Redux/categorySlice";

const Category = ({ setCategory }) => {
  const { data: categories, error, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='category'>
      <h5>Kategoriler</h5>
      {categories.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className='category1'
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
