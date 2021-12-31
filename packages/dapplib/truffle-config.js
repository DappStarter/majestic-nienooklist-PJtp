require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember snake grace inflict swift stomach'; 
let testAccounts = [
"0xa5487d95489351c846c3447a6b70eddc00d8d51c52022b6480a0495131b7eecc",
"0x124dd0534407567fa33d03518cf92a60e1d9339d5d805d114be81742af68ef0a",
"0xc56acb4a9d4cbca562ff36c3e03bf3dd56733022649dcb6be17e669680903a89",
"0xef203202db77da69c5124132803485d26846d7d932cd8df9d2be7c60000d30eb",
"0x7d09a8ba4b563edcc82dfe45f2ef32cb9c29ad344edf8c5fbb6ce4111fe5755f",
"0x6fb9a703d2e9cb9b8a8b6c74362459e982c580eea3247ef676bf5d40ea3113cc",
"0x1671d89967261ef53f795b0191d06a19dd38fe7076323bd901e1bd15d081df61",
"0x2d39326b2adf88cb42739e1c7bde67b771713a9bcbb33f510d079cdee0e03798",
"0x4b7cf3e6e2a800de792460acecc186617c3c963ce7d916f36d91304bd00f033b",
"0x1659bf5fab4ad423766b2df4708d760f55d41e316a2bfca0cb208f015358fece"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


