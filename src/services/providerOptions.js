import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
require('dotenv').config()

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Docchain", // Required
      infuraId: process.env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: process.env.INFURA_KEY // required
    }
  },
  binancechainwallet: {
    package: true
  },
};
