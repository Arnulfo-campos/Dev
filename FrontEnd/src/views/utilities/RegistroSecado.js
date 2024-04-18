import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
import { has } from 'lodash';
const { Web3 } = require('web3');

const RegisterSecadoForm = () => {
  const [hash, setHash] = useState(null);
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
const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    setFormData({
      ...formData,
      imagen: base64String // Aquí establecemos la imagen convertida a Base64 en el estado
    });
  };
  reader.readAsDataURL(file);
};
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    console.log(formData.fechaInicio + "prueba envio contrato")
    // Connect to the Sepolia testnet
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

const fechaInicio = new Date(formData.fechaInicio);
const fechaFinal = new Date(formData.fechaFinal);

const fechaInicioFormateada = fechaInicio.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"
const fechaFinalFormateada = fechaFinal.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

try {
  // Sign the transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, '291cc1845dc44faa2b2ab1b067827d9ad3dd61544b8df50691de00789f868825');

  // Send the signed transaction
  web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on('receipt', (receipt) => {
          console.log(receipt);

          // Write the transaction hash to a text file
          const formDataToSend = new FormData();
          formDataToSend.append('idLote', "1");
          formDataToSend.append('idCosecha', "1");
          formDataToSend.append('idUsuario', "1019126544");
          formDataToSend.append('idFormulario', "4");
          formDataToSend.append('hash', receipt.transactionHash);

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

export default RegisterSecadoForm;
