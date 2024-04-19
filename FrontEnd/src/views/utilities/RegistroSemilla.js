import React, { useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk'
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    tipoVariedad: '',
    origen: '',
    certificada: true,
    cantidadKG: '',
    fechaRegistro: '',
    fechaAdquisicion:'',
    germinacionId: '0',
    loteCafeId: '0',
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
    event.preventDefault(); 
    // Evitar que el formulario se envíe por defecto
    // Connect to the Sepolia testnet
  const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/o_uOrTPKA850dQ8Ier3GSA3orgzr5JBq');
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_tipoVariedad",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_origen",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cantidad",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_idGerminacion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_idLote",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_fechaAdquisicion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certificada",
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
      "name": "cantidad",
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
      "name": "certificada",
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
      "name": "fechaAdquisicion",
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
      "name": "idLote",
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
      "name": "origen",
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
      "name": "tipoVariedad",
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
  const contractAddress = '0xDBd02192Dce6672304AECA5d7Ad912AF06773e5D';

// Create an instance of your contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

    const txData = contract.methods.setNames(formData.tipoVariedad, formData.origen, formData.cantidadKG, formData.germinacionId, formData.loteCafeId, formData.fechaAdquisicion, formData.certificada.toString()).encodeABI();

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
          formDataToSend.append('idFormulario', "3");
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
    <PageContainer title="Registro Semilla" description="Formulario de Registro de Semilla">
      <DashboardCard title="Registro de Semilla">
        <Typography>Completa el formulario para registrar la semilla:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="tipoVariedad"
            label="Tipo de Variedad"
            select
            value={formData.tipoVariedad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Arábica','Robusta','Liberica','Excelsa','Bourbon','Typica','Geisha','Catuai','Mundo Novo','Caturra'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="origen"
            label="Origen"
            value={formData.origen}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadKG"
            label="Cantidad (KG)"
            type="number"
            value={formData.cantidadKG}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="fechaAdquisicion"
            label="Fecha de Adquisición"
            type="date"
            value={formData.fechaAdquisicion}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={<Checkbox name="certificada" checked={formData.certificada} onChange={handleChange} />}
            label="Certificada"
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

export default RegisterForm;
