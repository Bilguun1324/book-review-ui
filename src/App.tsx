import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from './screens';
import { Navigation } from "./components";
import { ApolloClientProvider } from './graphql';

const App = () => {
  return (
    <ApolloClientProvider>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </ApolloClientProvider>
  );
}

export default App;
