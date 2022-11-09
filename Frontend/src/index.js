import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./components/ContactPage";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
      </BrowserRouter>
    {/* <App /> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);