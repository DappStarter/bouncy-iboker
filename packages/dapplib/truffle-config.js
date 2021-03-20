require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give knife fortune shoulder name regret meadow uniform grace muscle army gas'; 
let testAccounts = [
"0x4fa56be2b154db0b3c63e69e31c8be4f43dfc78f3198d2950a7467e63a399667",
"0x20e1f2200025504b620e56b7c2054446af17d4decb14d894c83ed264f60eda3f",
"0x7a4cba5e534ad32a419ce4f03ff5d6ae0593b87cec73db12bef26bba377a0295",
"0xd3a8138ef0994ca4778612d9cbdb6b7a93d74d0c2bb66d8fc3eb2afc0994e7b5",
"0x4b7db31e33aff0532118987e04736b953c52f9242d71c41af8be13fed7fc33ef",
"0xc2a6bdfbdd999694b7c62710faf5b8169c32deb46f80d116e9c558f6bf129dd7",
"0x3d49acac8acbad091d1e3596ecadd69b70aa5c4c107cf6d7dc3e5aafbb6b1eae",
"0xc86cc5330ccf3460046ad93381c340848f90028f55856ae118ece55bfb64f360",
"0xf44ef40b9067465db7d658e3d79136f0726c8899a903dbcbc3a9b90a7d8847d5",
"0x223d6721ef15c5a2c9bd2ccc65a7ae122d6d0eff6e2574eb48237017b0fa78c9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

