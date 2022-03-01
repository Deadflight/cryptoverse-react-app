import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b94bb00c25mshebf244c5095f80ep135f12jsn32f2432d8227'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),

    getCryptoDetails: builder.query({
      query: (coinID) => createRequest( `/coin/${coinID}`)
    }),

    getCryptoHistory: builder.query({
      query: ({coinID, timePeriod}) => createRequest( `/coin/${coinID}/history?timePeriod=${timePeriod}`)
    }),

    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`)
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;