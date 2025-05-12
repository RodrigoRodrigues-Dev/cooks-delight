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
    }),
    getRecipesCategory: builder.query<CategoryResponse, string>({
      query: filter => `filter.php?c=${filter}`
    }),
    getRecipesID: builder.query<CategoryResponse, string>({
      query: ID => `lookup.php?i=${ID}`
    }),
    getRecipeSearch: builder.query<CategoryResponse, string>({
      query: name =>
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    })
  })
});

export const {
  useGetMealsQuery,
  useGetRandomSelectionQuery,
  useGetRecipesCategoryQuery,
  useGetRecipesIDQuery,
  useGetRecipeSearchQuery
} = api;
export default api;
