import React, { useState } from 'react';
import { Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegistroCrecimiento = () => {
  const [formData, setFormData] = useState({
    fechaSembrado: new Date(),
    areaLote: 0,
    sombra: '',
    distanciaSiembra: 0,
    tipoTrazo: '',
    profundidadAhoyado: 0,
    chapolasSembradas: 0,
    chapolasFinales: 0,
    fechaFinal: new Date(),
    departamento: '',
    ciudad: '',
    direccion: '',
    nombreFinca: '',
    ubicacionLatitud: 0,
    ubicacionLongitud: 0,
    altitud: 0,
    temperaturaMedia: 0,
    humedadMedia: 0,
    observaciones: '',
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'imagen' ? event.target.files[0] : checked ? true : value
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
   
    const formDataToSend = new FormData();
    formDataToSend.append('fechaSembrado', formData.fechaSembrado.toISOString());
    formDataToSend.append('areaLote', formData.areaLote);
    formDataToSend.append('sombra', formData.sombra);
    formDataToSend.append('distanciaSiembra', formData.distanciaSiembra);
    formDataToSend.append('tipoTrazo', formData.tipoTrazo);
    formDataToSend.append('profundidadAhoyado', formData.profundidadAhoyado);
    formDataToSend.append('chapolasSembradas', formData.chapolasSembradas);
    formDataToSend.append('chapolasFinales', formData.chapolasFinales);
    formDataToSend.append('fechaFinal', formData.fechaFinal.toISOString());
    formDataToSend.append('departamento', formData.departamento);
    formDataToSend.append('ciudad', formData.ciudad);
    formDataToSend.append('direccion', formData.direccion);
    formDataToSend.append('nombreFinca', formData.nombreFinca);
    formDataToSend.append('ubicacionLatitud', formData.ubicacionLatitud);
    formDataToSend.append('ubicacionLongitud', formData.ubicacionLongitud);
    formDataToSend.append('altitud', formData.altitud);
    formDataToSend.append('temperaturaMedia', formData.temperaturaMedia);
    formDataToSend.append('humedadMedia', formData.humedadMedia);
    formDataToSend.append('observaciones', formData.observaciones);
    formDataToSend.append('imagen', formData.imagen || null);

    axios.post('http://localhost:8080/crecimiento', formDataToSend, {
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
    <PageContainer title="Registro de Crecimiento" description="Formulario de Registro de Crecimiento">
      <DashboardCard title="Registro de Crecimiento">
        <Typography>Completa el formulario para registrar el crecimiento:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaSembrado"
            label="Fecha de Siembra"
            type="date"
            value={formData.fechaSembrado}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            ></TextField>
          <TextField
            name="areaLote"
            label="Área del Lote (m²)"
            type="number"
            value={formData.areaLote}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="sombra"
            label="Tipo de Sombra"
            value={formData.sombra}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="distanciaSiembra"
            label="Distancia de Siembra (cm)"
            type="number"
            value={formData.distanciaSiembra}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="tipoTrazo"
            label="Tipo de Trazo"
            value={formData.tipoTrazo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="profundidadAhoyado"
            label="Profundidad de Ahoyado (cm)"
            type="number"
            value={formData.profundidadAhoyado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="chapolasSembradas"
            label="Chapolas Sembradas"
            type="number"
            value={formData.chapolasSembradas}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="chapolasFinales"
            label="Chapolas Finales"
            type="number"
            value={formData.chapolasFinales}
            onChange={handleChange}
            fullWidth
            margin="normal"
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
            ></TextField>
          <TextField
            name="departamento"
            label="Departamento"
            value={formData.departamento}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="ciudad"
            label="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="direccion"
            label="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="nombreFinca"
            label="Nombre de la Finca"
            value={formData.nombreFinca}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="ubicacionLatitud"
            label="Ubicación Latitud"
            type="number"
            value={formData.ubicacionLatitud}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="ubicacionLongitud"
            label="Ubicación Longitud"
            type="number"
            value={formData.ubicacionLongitud}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="altitud"
            label="Altitud"
            type="number"
            value={formData.altitud}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="temperaturaMedia"
            label="Temperatura Media"
            type="number"
            value={formData.temperaturaMedia}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="humedadMedia"
            label="Humedad Media"
            type="number"
            value={formData.humedadMedia}
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
            <input
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

export default RegistroCrecimiento;
