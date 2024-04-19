import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegistroTostado = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    Temperatura_Inicial: '',
    Temperatura_2: '',
    HoraTemperatura_2: '',
    imagen: null,
    Temperatura_3: '',
    HoraTemperatura_3: '',
    Temperatura_Final:'',
    Humedad_final: '',
    Seleccion_Grano: '',
    Malla:'',
    Tonalidad_Agtron:'',
    observacion: ''
      });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'certificada' ? checked : value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      setFormData({
        ...formData,
        imagen: base64String
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicio', formData.fechaInicio.toISOString());
    formDataToSend.append('fechaFinal', formData.fechaFinal.toISOString());
    formDataToSend.append('tipoSecado', formData.tipoSecado);
    formDataToSend.append('pesoAntesSecado', formData.pesoAntesSecado);
    formDataToSend.append('pesoFinalSecado', formData.pesoFinalSecado);
    formDataToSend.append('imagen', formData.imagen || null);
    formDataToSend.append('humedad', formData.humedad);
    formDataToSend.append('factor', formData.factor);
    formDataToSend.append('observacion', formData.observacion);

    axios.post('http://localhost:8080/secado', formDataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('Error al registrar:', error);
    });
  };

  return (
    <PageContainer title="Registro de Tostado" description="Formulario de Registro de Secado">
      <DashboardCard title="Registro de Tostado">
        <Typography>Completa el formulario para registrar el proceso de Tostion:</Typography>
        
        <form onSubmit={handleSubmit}>
        <TextField
        name="fechaInicio"
        label="Fecha de Inicio"
        type="date"
        value={formData.fechaInicio.toISOString().split('T')[0]}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name="fechaFinal"
        label="Fecha Finalización"
        type="date"
        value={formData.fechaFinal.toISOString().split('T')[0]}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name="Temperatura_Inicial"
        label="Temperatura Inicial"
        type="number"
        value={formData.Temperatura_Inicial}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Temperatura_2"
        label="Temperatura 2"
        type="number"
        value={formData.Temperatura_2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="HoraTemperatura_2"
        label="Hora Temperatura 2"
        type="time"
        value={formData.HoraTemperatura_2}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name="Temperatura 3"
        label="Temperatura 3"
        type="time"
        value={formData.Temperatura_3}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name=" Hora Temperatura_3"
        label="Hora Temperatura 3"
        type="number"
        value={formData.HoraTemperatura_3}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Temperatura_Final"
        label="Temperatura Final"
        type="number"
        value={formData.Temperatura_Final}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Humedad_final"
        label="Humedad Final"
        type="number"
        value={formData.Humedad_final}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Seleccion_Grano"
        label="Selección de Grano"
        value={formData.Seleccion_Grano}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Malla"
        label="Malla"
        value={formData.Malla}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="Tonalidad_Agtron"
        label="Tonalidad Agtron"
        value={formData.Tonalidad_Agtron}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
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

export default RegistroTostado;
