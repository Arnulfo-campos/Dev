
import {create} from 'ipfs-http-client';

const ipfs = create({
    host: 'localhost',
    port: 5001, 
    protocol: 'http' 
});

async function uploadToIPFS(jsonData) {
    try {
        const data = JSON.stringify(jsonData);
        const file = await ipfs.add(data);
        console.log('Successfully uploaded, CID:', file.path);

        const url = `http://localhost:8080/ipfs/${file.path}`;
        console.log('Access your data at:', url);

        return url;
    } catch (error) {
        console.error('Error uploading data: ', error);
    }
}

export default uploadToIPFS;