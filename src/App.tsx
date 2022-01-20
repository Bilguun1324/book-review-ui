import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from './screens';
import { ApolloClientProvider } from './graphql';

const App = () => {
  return (
    <ApolloClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </ApolloClientProvider>
  );
}

export default App;
