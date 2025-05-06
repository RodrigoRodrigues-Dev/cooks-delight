import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type CategoryResponse = {
  meals: [];
};

const key = process.env.REACT_APP_THEMEALDB_KEY;

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.themealdb.com/api/json/v2/${key}`
  }),
  endpoints: builder => ({
    getMeals: builder.query<CategoryResponse, void>({
      query: () => 'latest.php'
    }),
    getRandomSelection: builder.query<CategoryResponse, void>({
      query: () => 'randomselection.php'
    })
  })
});

export const { useGetMealsQuery, useGetRandomSelectionQuery } = api;
export default api;
