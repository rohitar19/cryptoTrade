
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const BaseUrl = "https://coinranking1.p.rapidapi.com/";
const Crypto_key='90fbf90bd2msh6bd979990d6813fp137c10jsn1ad40a57264c';
const Crypto_Host='coinranking1.p.rapidapi.com';

// const createRequest = (url) => ({url , header :crytoApiHeader })

export const cryptoApi = createApi({ 
      reducerPath: 'cryptoApi' ,
      baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl,
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', Crypto_key)
          headers.set('X-RapidAPI-Host',Crypto_Host)
          return headers
        }
      }),
    
      endpoints: (builder) =>({
          getCryptos:builder.query({
            query: () => 'coins' ,
          }),
      }),
});

export const {
  useGetCryptosQuery , 
} = cryptoApi ;


// baseQuery: fetchBaseQuery({
//   baseUrl: process.env.REACT_APP_CRYPTO_URL,
//   prepareHeaders: (headers) => {
//     headers.set('X-RapidAPI-Key', process.env.REACT_APP_CRYPTO_KEY)
//     headers.set('X-RapidAPI-Host', process.env.REACT_APP_CRYPTO_HOST,)
//     return headers
//   }
// })