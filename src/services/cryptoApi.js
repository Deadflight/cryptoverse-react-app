import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'd5547c7279msh570156ff4fd20e4p101a4ajsndf08f867b8a2'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?x-access-token=i-have-to-migrate-to-v2&limit=${count}`)
    }),

    getCryptoDetails: builder.query({
      query: (coinID) => createRequest( `/coin/${coinID}`)
    }),

    getCryptoHistory: builder.query({
      query: ({coinID, timePeriod}) => createRequest( `/coin/${coinID}/history/${timePeriod}`)
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