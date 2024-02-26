import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getCategoryProducts: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    getDetailProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});
export const {
  useGetCategoryProductsQuery,
  useGetDetailProductQuery,
  useGetProductsQuery,
} = productsApi;
