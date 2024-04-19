import React, { useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk'
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegistroFungicida = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidadAplicada: '',
    fechaAplicacion: '',
    formulaAplicada: '',
    germinacionId: '0',
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'certificada' ? checked : value
    });
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
          "name": "_nombre",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cantidadAplicada",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_formulaAplicada",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_idGerminacion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaAplicacion",
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
      "name": "cantidadAplicada",
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
      "name": "fechaAplicacion",
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
      "name": "formulaAplicada",
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
      "name": "idGerminacion",
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
      "name": "nombre",
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
  const contractAddress = '0xCB48F6D054FFae600d425890481D2f5c4B113144';

// Create an instance of your contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

    const txData = contract.methods.setNames(formData.nombre, formData.cantidadAplicada, formData.formulaAplicada, formData.germinacionId, formData.fechaAplicacion).encodeABI();

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

          // Write the transaction hash to a text file
          const formDataToSend = new FormData();
          formDataToSend.append('idLote', "1");
          formDataToSend.append('idCosecha', "1");
          formDataToSend.append('idUsuario', "1019126544");
          formDataToSend.append('idFormulario', "8");
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
    <PageContainer title="Registro Fungicida" description="Formulario de Registro de Fungicida">
      <DashboardCard title="Registro de Fungicida">
        <Typography>Completa el formulario para registrar el fungicida:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            label="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadAplicada"
            label="Cantidad Aplicada"
            type="number"
            value={formData.cantidadAplicada}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="formulaAplicada"
            label="Fórmula Aplicada"
            value={formData.formulaAplicada}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="fechaAplicacion"
            label="Fecha de Aplicación"
            type="date"
            value={formData.fechaAplicacion}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
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

export default RegistroFungicida;
