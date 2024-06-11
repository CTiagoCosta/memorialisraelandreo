
import React from 'react';
import { Router } from "./router/Router";
import { GlobalStyle } from '@chakra-ui/react';

export default function App() {

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  )
}
