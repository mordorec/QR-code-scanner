import ReactDOM from 'react-dom/client';
import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
