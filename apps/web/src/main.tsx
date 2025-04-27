import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { polygonMumbai } from 'wagmi/chains';
import App from './App';
import './index.css';

const { chains, provider } = configureChains([polygonMumbai], [publicProvider()]);
const client = createClient({ autoConnect: true, provider });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
