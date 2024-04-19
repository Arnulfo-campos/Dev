import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import lighthouse from '@lighthouse-web3/sdk'
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegisterSecadoForm = () => {
  const [jsonEnviar, setjsonEnviar] = useState({
    Metadata :"{\"description\" : \"html de prueba\",\"external_url\" : \"https://gateway.lighthouse.storage/ipfs/\",\"image\" : \"https://gateway.lighthouse.storage/ipfs/QmWKXfcN87gvAxb8pD3Yt4XpHoyCZo5FVotUe8FDUWGh5g\",\"name\":\"Lote de trazabilidad \",\"animation_url\": \"https://gateway.lighthouse.storage/ipfs/QmWKXfcN87gvAxb8pD3Yt4XpHoyCZo5FVotUe8FDUWGh5g\"}",
    apiKeyjson:"93222625.4a86e8b3f22f474aadbba0b5a4462f72",
    nombreArchive:"JsoncorregidoArnulfo.json"
   });
  const [formData, setFormData] = useState({
    fechaInicio: "",
    fechaFinal: "",
    tipoSecado: '',
    pesoAntesSecado: "",
    pesoFinalSecado: "",
    humedad: "",
    factor: "",
    observacion: '',
    imagen: null
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
   const crearHtml = async (event) =>{
    // Genera el contenido HTML
    const contenidoHTML = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Archivo Generado</title>
    </head>
    <body>
      <h1>Este es un archivo HTML generado dinámicamente</h1>
      <p>Puedes agregar cualquier contenido aquí.</p>
    </body>
    </html>
    `;
    // Crea un objeto Blob con el contenido HTML
    const blob = new Blob([contenidoHTML], { type: 'text/html' });
    // Convierte el Blob en un objeto File
    const archivoFile = new File([blob], 'archivo_generado.html', { type: 'text/html' });
// Ahora puedes utilizar el archivoFile en el proceso que necesites, como enviarlo a IPFS
    console.log(archivoFile); // Solo para demostración, puedes enviar archivoFile a IPFS u otro proceso aquí
    const response = await lighthouse.uploadText(archivoFile, jsonEnviar.apiKeyjson, 'contenidoHtml.html')
     console.log(response)
     
  }
  //Crea NFT y sube en linea
  const enviarIPFS =async (event) => {
  
 //sube el JSON a ipfs
 const response = await lighthouse.uploadText(jsonEnviar.Metadata, jsonEnviar.apiKeyjson, jsonEnviar.nombreArchive)
 
    const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "initialOwner",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_toTokenId",
            "type": "uint256"
          }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "MetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "uri",
            "type": "string"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const contractAddress = '0xc8c50336D2527D56C591c68dd2c1fEc529274Be8';
  // Create an instance of your contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

const txData = contract.methods.safeMint('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba', 'https://gateway.lighthouse.storage/ipfs/QmZJxJPmCrWk8vmFezRNRvTHwqqbHnK9bnbWqmsbhMdZuX').encodeABI();

// Get the current gas price
const gasPrice = await web3.eth.getGasPrice();

// Create the transaction
const tx = {
from: '0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba',
to: contractAddress,
gas: web3.utils.toHex(600000), // You may need to adjust this value
gasPrice: web3.utils.toHex(gasPrice), // Use the current gas price
data: txData
};

try {
// Sign the transaction
const signedTx = await web3.eth.accounts.signTransaction(tx, '291cc1845dc44faa2b2ab1b067827d9ad3dd61544b8df50691de00789f868825');

// Send the signed transaction
web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  .on('receipt', (receipt) => {
      console.log(receipt.transactionHash, (err) => {
          if (err) throw err;
          console.log('The transaction hash was saved to transactionHash.txt!');
      });
  })
  .on('error', console.error);

console.log('Form submitted!');
} catch (err) {
console.error(err);
console.log('Error submitting form.');
} 
  };

    const progressCallback = (progressData) => {
      let percentageDone =
        100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    }
    const uploadFile = (file) =>{
      setFormData({
        ...formData,
        imagen: file // Establecer la imagen convertida a Base64 en el estado
      });
     }
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    // Connect to the Sepolia testnet
  const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/o_uOrTPKA850dQ8Ier3GSA3orgzr5JBq');
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_tipo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pesoAntes",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pesoDespues",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_humedad",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_factor",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaInicio",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaFinalizacion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_observacion",
          "type": "string"
        }
      ],
      "name": "setNames",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factor",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fechaFinalizacion",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fechaInicio",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "humedad",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "observacion",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pesoAntes",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pesoDespues",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tipo",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const contractAddress = '0xF5fDac58dC71498fca5Dc4bf7766Aa0bbbc65785';

// Create an instance of your contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

    const txData = contract.methods.setNames(formData.tipoSecado, formData.pesoAntesSecado, formData.pesoFinalSecado, formData.humedad, formData.factor, formData.fechaInicio, formData.fechaFinal, formData.observacion).encodeABI();

    // Get the current gas price
    const gasPrice = await web3.eth.getGasPrice();

    // Create the transaction
 const tx = {
    from: '0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba',
    to: contractAddress,
    gas: web3.utils.toHex(600000), // You may need to adjust this value
    gasPrice: web3.utils.toHex(gasPrice), // Use the current gas price
    data: txData
};

try {
  // Sign the transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, '291cc1845dc44faa2b2ab1b067827d9ad3dd61544b8df50691de00789f868825');
  const output = await lighthouse.upload(formData.imagen, "93222625.4a86e8b3f22f474aadbba0b5a4462f72", false, null, progressCallback)
  const ipfs = 'https://gateway.lighthouse.storage/ipfs/' + output.data.Hash

  // Send the signed transaction
  web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on('receipt', (receipt) => {
          console.log(receipt);
          console.log(ipfs)
          // Write the transaction hash to a text file
          const formDataToSend = new FormData();
          formDataToSend.append('idLote', "1");
          formDataToSend.append('idCosecha', "1");
          formDataToSend.append('idUsuario', "1019126544");
          formDataToSend.append('idFormulario', "4");
          formDataToSend.append('hash', receipt.transactionHash);
          formDataToSend.append('imagenIPFS', ipfs);
          // Enviar la solicitud POST al servidor
          axios.post('http://localhost:8080/loteusuarios', formDataToSend, {
          headers: {
          'Content-Type': 'application/json'
          }
          }).then(response => {
          console.log(response.data);
         // Puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito
          }).catch(error => {
          console.error('Error al registrar:', error);
          // Puedes manejar el error como desees, por ejemplo, mostrar un mensaje de error
          });

          console.log(receipt.transactionHash, (err) => {
              if (err) throw err;
              console.log('The transaction hash was saved to transactionHash.txt!');
          });
      })
      .on('error', console.error);
  
  console.log('Form submitted!');
} catch (err) {
  console.error(err);
  console.log('Error submitting form.');
}
};

  return (
    <PageContainer title="Registro de Secado" description="Formulario de Registro de Secado">
      <DashboardCard title="Registro de Secado">
        <Typography>Completa el formulario para registrar la actividad de secado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            id="fechaInicio"
            name="fechaInicio"
            label="Fecha de Inicio"
            type="date"
            value={formData.fechaInicio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="fechaFinal"
            name="fechaFinal"
            label="Fecha Final"
            type="date"
            value={formData.fechaFinal}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="tipoSecado"
            name="tipoSecado"
            label="Tipo de Secado"
            select
            value={formData.tipoSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Natural', 'Mecanico'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="pesoAntesSecado"
            name="pesoAntesSecado"
            label="Peso Antes del Secado"
            type="number"
            value={formData.pesoAntesSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            id="pesoFinalSecado"
            name="pesoFinalSecado"
            label="Peso Final del Secado"
            type="number"
            value={formData.pesoFinalSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            id="humedad"
            name="humedad"
            label="Humedad"
            type="number"
            value={formData.humedad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            id="factor"
            name="factor"
            label="Factor"
            type="number"
            value={formData.factor}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            id="observacion"
            name="observacion"
            label="Observación"
            multiline
            rows={4}
            value={formData.observacion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="imagen">Imagen</InputLabel>
            <Input
              id="imagen"
              name="imagen"
              type="file"
              onChange={e=>uploadFile(e.target.files)}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default RegisterSecadoForm;
