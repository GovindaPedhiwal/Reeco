import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_CONFIG from '../constants/api-config'

const url = 'https://65231175f43b1793841531c8.mockapi.io/api/'

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `orders/`,
      providesTags: ['Orders']
    }),
    updateOrder: builder.mutation({
        query(data) {
          const { id, ...body } = data
          return {
            url: `${API_CONFIG.ORDERS}/${id}`,
            method: 'PUT',
            body,
          }
        },
        invalidatesTags: ['Orders']
      }),
  }),
})

export const { useGetAllOrdersQuery, useUpdateOrderMutation } = orderApi