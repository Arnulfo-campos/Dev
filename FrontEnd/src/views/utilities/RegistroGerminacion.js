import React, { useState } from 'react';
import { Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegistroGerminacion = () => {
  const [formData, setFormData] = useState({
    profundidad: 0,
    tipoGerminador: '',
    sombra: '',
    area: 0,
    arena: false,
    profundidadArena: 0,
    pesoArena: 0,
    cantidadChapolasObtenidas: 0,
    observaciones: '',
    fechaFinalGerminacion: '',
    fechaRegistro: '',
    imagen: null,
    departamento: '',
    ciudad: '',
    direccion: '',
    nombreFinca: '',
    ubicacionLatitud: 0,
    ubicacionLongitud: 0,
    altitud: 0,
    temperaturaMedia: 0,
    humedadMedia: 0
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'arena' ? checked : value
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
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    // Connect to the Sepolia testnet
  const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_profundidad",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tipoGeminador",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_arena",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cantidadChapolas",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_observacion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaFinal",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaRegistro",
          "type": "string"
        }
      ],
      "name": "setNames",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_departamento",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ciudad",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_direccion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_nombreFinca",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_latitud",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_longitud",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_altitud",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_temperatura",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_humedad",
          "type": "string"
        }
      ],
      "name": "setNamesTwo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "altitud",
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
      "name": "area",
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
      "name": "arena",
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
      "name": "cantidadChapolas",
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
      "name": "ciudad",
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
      "name": "departamento",
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
      "name": "direccion",
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
      "name": "fechaRegistro",
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
      "name": "latitud",
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
      "name": "longitud",
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
      "name": "nombreFinca",
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
      "name": "profundidad",
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
      "name": "temperatura",
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
      "name": "tipoGeminador",
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
      "name": "tipoSombra",
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
  const contractAddress = '0x32E7e46901a2a25a481F1c70925dCc6CA53bB495';

// Create an instance of your contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

    const txData = contract.methods.setNames(formData.profundidad, formData.tipoGerminador, formData.sombra, formData.area, formData.arena.toString(), formData.cantidadChapolasObtenidas, formData.observaciones, formData.fechaFinalGerminacion,
    formData.fechaRegistro,formData.departamento,formData.ciudad,formData.direccion,formData.nombreFinca,formData.ubicacionLatitud,formData.ubicacionLongitud,formData.altitud,formData.temperaturaMedia,formData.humedadMedia).encodeABI();

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
          const formDataToSend = new FormData();
          formDataToSend.append('idLote', "1");
          formDataToSend.append('idCosecha', "1");
          formDataToSend.append('idUsuario', "1019126544");
          formDataToSend.append('idFormulario', "1");
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
    <PageContainer title="Registro de Germinación" description="Formulario de Registro de Germinación">
      <DashboardCard title="Registro de Germinación">
        <Typography>Completa el formulario para registrar la germinación:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="profundidad"
            label="Profundidad (cm)"
            type="number"
            value={formData.profundidad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="tipoGerminador"
            label="Tipo de Germinador"
            select
            value={formData.tipoGerminador}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Tipo 1', 'Tipo 2', 'Tipo 3'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="sombra"
            label="Tipo de Sombra"
            select
            value={formData.sombra}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Sombra 1', 'Sombra 2', 'Sombra 3'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="area"
            label="Área (m²)"
            type="number"
            value={formData.area}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox checked={formData.arena} onChange={handleChange} name="arena" />}
            label="Arena"
          />
          {formData.arena && (
            <>
              <TextField
                name="profundidadArena"
                label="Profundidad de la arena (cm)"
                type="number"
                value={formData.profundidadArena}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="pesoArena"
                label="Peso de la arena (Kg)"
                type="number"
                value={formData.pesoArena}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
          <TextField
            name="cantidadChapolasObtenidas"
            label="Cantidad de Chapolas Obtenidas"
            type="number"
            value={formData.cantidadChapolasObtenidas}
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
          <TextField
            name="fechaFinalGerminacion"
            label="Fecha Final de Germinación"
            type="date"
            value={formData.fechaFinalGerminacion}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            ></TextField>
          <TextField
            name="fechaRegistro"
            label="Fecha de Registro"
            type="date"
            value={formData.fechaRegistro}
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

export default RegistroGerminacion;
