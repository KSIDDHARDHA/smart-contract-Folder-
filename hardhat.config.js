require("@nomiclabs/hardhat-waffle");



/*const ALCHEMY_API_KEY = "BpEGoRDCCgpZ0w1LxEh9WMgQ5xlk6WKJ";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "2fbca4c4567dd168033bf92d19efa7c7eb75476ae6fa5656f8ddf0e76da130b7";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
}; */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}; 