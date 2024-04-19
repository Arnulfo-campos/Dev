import React, { useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk'
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegisterControlHierbasForm = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    cantidadAplicada: '',
    fechaInicio: '',
    fechaFinal: '',
    procesoControl: '',
    sembradoId: '0',
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
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
    const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/o_uOrTPKA850dQ8Ier3GSA3orgzr5JBq');
    const contractABI = 
    [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_tipoControl",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_cantidadAplicada",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_procesoControl",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_idSembrado",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_fechaInicio",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_fechaFinal",
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
        "name": "fechaFinal",
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
        "name": "idSembrado",
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
        "name": "procesoControl",
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
        "name": "tipoControl",
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
    const contractAddress = '0x1316137052337B08579d73fD2603Fd4292fF96Ee';
  
  // Create an instance of your contract
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
      const txData = contract.methods.setNames(formData.tipo, formData.cantidadAplicada, formData.procesoControl, formData.sembradoId, formData.fechaInicio, formData.fechaFinal).encodeABI();
  
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
            const formDataToSend = new FormData();
            formDataToSend.append('idLote', "1");
            formDataToSend.append('idCosecha', "1");
            formDataToSend.append('idUsuario', "1019126544");
            formDataToSend.append('idFormulario', "13");
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
            // Write the transaction hash to a text file
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
    <PageContainer title="Registro de Control de Hierbas" description="Formulario de Registro de Control de Hierbas">
      <DashboardCard title="Registro de Control de Hierbas">
        <Typography>Completa el formulario para registrar el control de hierbas aplicado a un sembrado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="tipo"
            label="Tipo de Control"
            value={formData.tipo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadAplicada"
            label="Cantidad Aplicada (Kg)"
            type="number"
            value={formData.cantidadAplicada}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="procesoControl"
            label="Proceso de Control"
            value={formData.procesoControl}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
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

export default RegisterControlHierbasForm;
