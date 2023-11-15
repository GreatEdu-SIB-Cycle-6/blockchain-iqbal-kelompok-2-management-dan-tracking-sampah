import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-gas-reporter";
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import 'hardhat-prettier';
import "@typechain/hardhat";

const { MNEMONIC } = process.env;

const config: HardhatUserConfig = {
  mocha: {
    timeout: 0
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  networks: {

    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: MNEMONIC,
        accountsBalance: "10000000000000000000000000"
      },
    },

    bsctestnet: {
      url: process.env.BSC_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },

  },
  paths: {
    deployments: './deployments',
  },

  typechain: {
    outDir: './typechain',
    target: 'ethers-v6',
  },

  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY as string,
    },
  },
};

export default config;
