import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai, {
    id: 97,
    name: 'Binance Smart Chain Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'tBNB',
    },
    rpcUrls: {
      default: { http: ['https://bsc-testnet.publicnode.com'] },
      public: { http: ['https://bsc-testnet.publicnode.com'] },
    },
    blockExplorers: {
      etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
      default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 17422483,
      },
    },
    testnet: true,
  }],
  [publicProvider()]
);

const projectId = String(process.env.REACT_APP_WALLET_CONNECT);

const { connectors } = getDefaultWallets({
  appName: 'Greatedu Studycases App',
  projectId,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
  </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();