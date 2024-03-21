const Web3 = require('web3');
const contractABI = require('../contract-abi.json'); // Replace with the actual path to your contract's ABI JSON file

async function getMintedTokens(userAddress) {
    // Create a new web3 instance and connect to the blockchain
    const web3 = new Web3('http://localhost:7545');

    // Get the contract instance
    const contractAddress = '0x99112058177C849a8D2Af396e9d829D92d909B47';
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        const tokenIds = await contract.methods.getMintedTokens(userAddress).call();

        // Call the contract's tokenURI function for each token and store the results
        const tokenUris = [];
        for (const tokenId of tokenIds) {
            const tokenUri = await contract.methods.tokenURI(tokenId).call();

            // Fetch the image URL from the token's JSON
            const response = await fetch(tokenUri);
            const data = await response.json();
            const imageUrl = data.image;

            tokenUris.push({ uri: tokenUri, image: imageUrl });
        }

        // Return the array of token URIs and image URLs
        return tokenUris;
    } catch (error) {
        console.error('Error retrieving minted tokens:', error);
        return [];
    }
}

// Usage example

export default getMintedTokens;