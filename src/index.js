import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import './dir/styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

const myQueryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={myQueryClient }>
    <App />
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
