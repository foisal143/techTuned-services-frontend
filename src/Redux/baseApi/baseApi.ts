import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://techtuend-service-server.vercel.app/api',
  credentials: 'include',

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authTechTuend.token;

    if (token) {
      headers.set('authorization', token);
    }
  },
});
export const baseApi = createApi({
  reducerPath: 'baseUrl',
  tagTypes: ['services', 'cart', 'order'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
