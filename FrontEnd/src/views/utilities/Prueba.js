import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');



// Objeto JSON para el NFT
const nftMetadata = {
  "description" : "html de prueba",
  "external_url" : "https://gateway.lighthouse.storage/ipfs/QmR353N3rHFjGbVmG8XHt6Hp9BB535uUNp9vGMTnC72sKK",
  "image" : "https://gateway.lighthouse.storage/ipfs/QmbaYGKVrCKEHD5f1sqveGbe79Na7iCsGgt3PjrWgQVAte",
  "name" : "Html de prueba",
  "animation_url": "https://gateway.lighthouse.storage/ipfs/QmR353N3rHFjGbVmG8XHt6Hp9BB535uUNp9vGMTnC72sKK"
  };

// Función para mintear un NFT
async function mintNFT() {
  const nftContractABI = require('../../contract-abi.json'); // Reemplaza con la ruta correcta al archivo ABI
const contractAddress = '0xF6f6EDDe96f94eB5aA71416d2D498108f5Ff3755'; // Reemplaza con la dirección correcta del contrato
const privateKey = '0x291cc1845dc44faa2b2ab1b067827d9ad3dd61544b8df50691de00789f868825'; // Reemplaza con tu clave privada

    try {
        // Crear una instancia de Web3 y cargar la cuenta desde la clave privada
        const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);

        // Crear una instancia del contrato
        const nftContract = new web3.eth.Contract(nftContractABI, '0xF6f6EDDe96f94eB5aA71416d2D498108f5Ff3755');

        // Codificar el objeto JSON como una cadena
        const tokenURI = JSON.stringify(nftMetadata); 
        console.log(tokenURI)
        // Mintear el NFT llamando a la función en el contrato
        const result = await nftContract.methods.mintNFT(tokenURI).send({ from: account.address });

        console.log('NFT minteado con éxito:', result.transactionHash);
    } catch (error) {
        console.error('Error minteando el NFT:', error);
    }
}
const handleSubmit = async (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto
// Llamar a la función para mintear el NFT
mintNFT();
};

const RegistroTostado = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    tipoSecado: '',
    pesoAntesSecado: 0,
    pesoFinalSecado: 0,
    imagen: null,
    humedad: 0,
    factor: 0,
    observacion: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <PageContainer title="Registro de Secado" description="Formulario de Registro de Secado">
      <DashboardCard title="Registro de Secado">
        <Typography>Completa el formulario para registrar el secado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="tipoSecado"
            label="Tipo de Secado"
            select
            value={formData.tipoSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Natural', 'Honey', 'Lavado'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="pesoAntesSecado"
            label="Peso antes del secado (KG)"
            type="number"
            value={formData.pesoAntesSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="pesoFinalSecado"
            label="Peso final después del secado (KG)"
            type="number"
            value={formData.pesoFinalSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="humedad"
            label="Humedad (%)"
            type="number"
            value={formData.humedad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="factor"
            label="Factor"
            type="number"
            value={formData.factor}
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
            ></TextField>
          <TextField
            name="fechaFinal"
            label="Fecha Finalizacion"
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
