import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
//     'x-rapidapi-key': '08029dff2emshd65a132c59874e6p11a070jsn593db6fffefd'
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
            headers.set('x-rapidapi-key', '08029dff2emshd65a132c59874e6p11a070jsn593db6fffefd');
            // headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({query: ()=>'/charts/world?country_code=DZ'}),
    })
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;