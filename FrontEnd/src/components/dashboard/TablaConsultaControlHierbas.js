import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../shared/DashboardCard';
const { Web3 } = require('web3');

const Tables = () => { 
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

  useEffect(() => {
    const fetchData = async () => {
      // Connect to the Sepolia testnet
      const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');

      // Your contract's ABI and address
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

      try {
        // Get the transaction receipt
        const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
  
        // Check the status of the transaction
        if (receipt.status) {
          console.log('Transaction was successful');
  
          // Call the contract's getter functions
          const fechaInicio = await contract.methods.fechaInicio().call();
          const fechaFinal = await contract.methods.fechaFinalizacion().call();
          const tipoSecado = await contract.methods.tipo().call();
          const pesoAntesSecado = await contract.methods.pesoAntes().call();
          const pesoFinalSecado = await contract.methods.pesoDespues().call();
          const humedad = await contract.methods.humedad().call();
          const factor = await contract.methods.factor().call();
          const observacion = await contract.methods.observacion().call();

          // Update formData with fetched data
          setFormData({
            fechaInicio,
            fechaFinal,
            tipoSecado,
            pesoAntesSecado,
            pesoFinalSecado,
            humedad,
            factor,
            observacion
          });
        } else {
          console.log('Transaction failed');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <PageContainer title="Tables" description="this is Tables">
      <DashboardCard title="Tables">
        <Typography>This is a Tables</Typography>
        
        {/* Aquí agregamos la tabla */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo Secado</TableCell>
                <TableCell>Peso Antes</TableCell>
                <TableCell>Peso Final</TableCell>
                <TableCell>Humedad</TableCell>
                <TableCell>Factor</TableCell>
                <TableCell>Fecha de Inicio</TableCell>
                <TableCell>Fecha Final</TableCell>
                <TableCell>Observación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{formData.tipoSecado}</TableCell>
                <TableCell>{formData.pesoAntesSecado}</TableCell>
                <TableCell>{formData.pesoFinalSecado}</TableCell>
                <TableCell>{formData.humedad}</TableCell>
                <TableCell>{formData.factor}</TableCell>
                <TableCell>{formData.fechaInicio}</TableCell>
                <TableCell>{formData.fechaFinal}</TableCell>
                <TableCell>{formData.observacion}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default Tables;
