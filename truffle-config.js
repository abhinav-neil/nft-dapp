const HDWalletProvider = require('@truffle/hdwallet-provider');
const {
  mnemonic,
  METAMASK_PRIVATE_KEY,
  INFURA_API_KEY,
  ETHERSCAN_API_KEY,
} = require('./secrets.json');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', 
      port: 8545, 
      network_id: '*', 
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
          0,
          1
        ),
      network_id: 4,
      skipDryRun: true,
    },
  },

  compilers: {
    solc: {
      version: '^0.8.0', 
      // docker: true,     
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
      //  evmVersion: "byzantium"
    },
  },

  plugins: ['truffle-plugin-verify'],

  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
};
