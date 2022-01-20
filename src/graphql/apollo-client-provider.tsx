import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export const ApolloClientProvider: React.FC<any> = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `http://localhost:4000/graphql`,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkNTYxYzQwZmVlYzg4M2M1MWMzZDc1IiwiZW1haWwiOiJ0ZXN0aW5nMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2NDI2NDY3NzUsImV4cCI6MTY0MjY1Mzk3NX0.quGY-2VKvgMXJXpVuJ-j1TIFrkaid9EW2oqeO2NwNSg`,
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
