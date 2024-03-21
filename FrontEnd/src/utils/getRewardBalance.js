const Web3 = require('web3');
const contractABI = require('../contract-abi.json'); // Replace with the actual path to your contract's ABI JSON file

async function getRewardBalance(userAddress) {
    // Create a new web3 instance and connect to the blockchain
    const web3 = new Web3('http://localhost:7545');

    // Get the contract instance
    let contractAddress = '0x99112058177C849a8D2Af396e9d829D92d909B47';
    contractAddress= web3.utils.toChecksumAddress(contractAddress)

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        // Call the contract's totalRewards function
        const balanceInWei = await contract.methods.totalRewards(userAddress).call();

        // Convert balance from wei to ETH
        const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');

        // Return the total reward balance
        return balanceInEth;
    } catch (error) {
        console.error('Error retrieving reward balance:', error);
        return 0;
    }
}

export default getRewardBalance;