import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegisterCosechaForm = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    pesoTotalCafe: 0,
    pesoTotalCafeDespulpado: 0,
    tipoRecoleccion: '',
    observaciones: '',
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      imagen: file // Establecer la imagen en el estado
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');
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
  
    // Send the signed transaction
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('receipt', (receipt) => {
            console.log(receipt);
  
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
   
    const fechaInicio = new Date(formData.fechaInicio);
    const fechaFinal = new Date(formData.fechaFinal);

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicio', fechaInicio.toISOString());
    formDataToSend.append('fechaFinal', fechaFinal.toISOString());
    formDataToSend.append('pesoTotalCafe', formData.pesoTotalCafe);
    formDataToSend.append('pesoTotalCafeDespulpado', formData.pesoTotalCafeDespulpado);
    formDataToSend.append('tipoRecoleccion', formData.tipoRecoleccion);
    formDataToSend.append('observaciones', formData.observaciones);
    formDataToSend.append('imagen', formData.imagen);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/cosecha', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data);
      // Puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito
    }).catch(error => {
      console.error('Error al registrar:', error);
      // Puedes manejar el error como desees, por ejemplo, mostrar un mensaje de error
    });
  };

  return (
    <PageContainer title="Registro de Cosecha" description="Formulario de Registro de Cosecha">
      <DashboardCard title="Registro de Cosecha">
        <Typography>Completa el formulario para registrar la actividad de cosecha:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaInicio"
            label="Fecha de Inicio"
            type="datetime-local"
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
            type="datetime-local"
            value={formData.fechaFinal}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="pesoTotalCafe"
            label="Peso Total de Café"
            type="number"
            value={formData.pesoTotalCafe}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="pesoTotalCafeDespulpado"
            label="Peso Total de Café Despulpado"
            type="number"
            value={formData.pesoTotalCafeDespulpado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="tipoRecoleccion"
            label="Tipo de Recolección"
            value={formData.tipoRecoleccion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="observaciones"
            label="Observaciones"
            multiline
            rows={4}
            value={formData.observaciones}
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
              onChange={handleImageChange}
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

export default RegisterCosechaForm;
