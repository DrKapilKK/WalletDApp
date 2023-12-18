const { Web3 } = require('web3');

const web3 = new Web3('YOUR_ETH_NODE_URL'); // Replace with your Ethereum node URL prefer- Alchemy Websocket (wss://)
const contractAddress = '0x1fca62311408f59D1c89F94b1F36B1EEc6782c2b';
const privateKey = 'YOUR_PRIVATE_KEY';

const abi = [
    {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"}],"name":"WalletAddressAdded","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"iswalletListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
];

const walletListContract = new web3.eth.Contract(abi, contractAddress);

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

// Set up an event listener for the 'WalletAddressAdded' event
const addWalletEvent = walletListContract.events.WalletAddressAdded({
    fromBlock: 'latest',
});

// Define the event handler function
addWalletEvent.on('data', (event) => {
    const addedWallet = event.returnValues._address;
    console.log(`Wallet address: ${addedWallet} added successfully`);
});

// Define the error handler function
addWalletEvent.on('error', console.error);
