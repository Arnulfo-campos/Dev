const { Web3 } = require('web3');
const contractABI = require('../contract-abi.json'); // Replace with the actual path to your contract's ABI JSON file

async function getRewardBalance(userAddress) {
    // Create a new web3 instance and connect to the blockchain
    const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');

    // Get the contract instance
    let contractAddress = '0xb5BE8E5Da5ffC42f432ebd959b479197e931830A';
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