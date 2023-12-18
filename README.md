**Wallet-Dictionary Dapp**
A Smart Contract and Monitoring Service:
This repository provides a smart contract that keeps track of wallet addresses. The contract allows the owner to add new addresses and includes two critical functions: addWallet for adding new wallet addresses and isWalletListed for determining whether a specific wallet is already listed.

**Smart Contract:**
The smart contract is written in Solidity and deployed on the Ethereum blockchain (testnet). It provides a secure and transparent way to manage a list of wallet addresses.

**Smart Contract Functions:**
    **1. addWallet:**
        ◦ Function to add new wallet addresses to the list. Only the contract owner can invoke this function.
    **2. isWalletListed:**
        ◦ Function to verify if a specific wallet address is already listed.

**Smart Contract Deployment:**
The smart contract has been deployed on the Ethereum blockchain.

**Monitoring Service**
An monitoring service has been built using Node.js to track and react to events triggered by the addWallet function in the smart contract.
**Event Monitoring Functions:**
The service monitors the 'WalletAddressAdded' event and responds appropriately. When a new wallet is added to the list, the service does a specific action, such as logging the newly added wallet address.
**Event Monitoring Deployment:**

The event monitoring service has been Dockerized for easy deployment and scalability.

**How to Use:**
    1. Clone this repository:
         git clone https://github.com/DrKapilKK/WalletDApp.git
    2. Navigate to the project directory:
         cd your-repository
    3. Deploy the Ethereum blockchain smart contract. If you do not want to deploy, you can use the following predeployed smart contract (already availeble in the code).
    4. Run the event monitoring service:
       cd your-repository
       docker build -t write-service-name .
       docker run write-service-name
       
**Ensure** to replace **'YOUR_ETH_NODE_URL'**, and **'YOUR_PRIVATE_KEY'** with your Ethereum node URL, and your private key, respectively in wallet-dictionary.js file. Also replace **'write-service-name'** with a name that makes sense for the application. 
