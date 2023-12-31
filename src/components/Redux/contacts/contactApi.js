import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
      baseUrl:`https://648715b9beba6297278fe0ef.mockapi.io`,
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
      fetchContacts: builder.query({
        query: () => `/contacts`,
          providesTags: ['Contact'],
      }),
      addContact: builder.mutation({
        query: newContact => ({
          url:`/contacts`,
          method: `POST`,
          body: newContact,
        }),
        invalidatesTags: ['Contact'],
      }),
      deleteContact: builder.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: `DELETE`,
        }),
        invalidatesTags: ['Contact'],
      })
    }),
  });


  export const {
    useFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
  } = contactsApi;


