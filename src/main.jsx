import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>MARUOKA YUYA - PORTFOLIO</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
