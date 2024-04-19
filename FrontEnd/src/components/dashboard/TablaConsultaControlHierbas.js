import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../shared/DashboardCard';
import axios from 'axios';

const { Web3 } = require('web3');

const idLote = localStorage.getItem('idLote');
const idCosecha = localStorage.getItem('idCosecha');

const Tables = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState([]);
  const hexToString = (hex) => {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
      let char = parseInt(hex.substr(i, 2), 16);
      if (char) {
        str += String.fromCharCode(char);
      }
    }
    return str;
  };
  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/13`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!data) return;

      const web3 = new Web3('https://rpc.sepolia.org');
       // Your contract's ABI and address
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
       const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            tipo: '',
            cantidadAplicada: '',
            fechaInicio: '',
            fechaFinal: '',
            procesoControl: '',
            sembradoId: '0',
            imagen: null
           };
          
          try {
            const transaction = await web3.eth.getTransaction(element.hash);
            const var1 = await web3.eth.getStorageAt(contractAddress, 0, transaction.blockNumber);
            const var2 = await web3.eth.getStorageAt(contractAddress, 1, transaction.blockNumber);
            const var3 = await web3.eth.getStorageAt(contractAddress, 2, transaction.blockNumber);
            const var4 = await web3.eth.getStorageAt(contractAddress, 4, transaction.blockNumber);
            const var5 = await web3.eth.getStorageAt(contractAddress, 5, transaction.blockNumber);

             const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              newFormData.tipo = hexToString(var1);
              newFormData.cantidadAplicada = hexToString(var2);
              newFormData.procesoControl = hexToString(var3);
              newFormData.fechaInicio = hexToString(var4);
              newFormData.fechaFinal = hexToString(var5);

               } else {
              console.log('Transaction failed');
            }
          } catch (err) {
            console.error(err);
          }

          return newFormData;
        }));

        setFormData(newData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [data]);

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
            {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                <TableCell>{index.tipoSecado}</TableCell>
                <TableCell>{index.pesoAntesSecado}</TableCell>
                <TableCell>{index.pesoFinalSecado}</TableCell>
                <TableCell>{index.humedad}</TableCell>
                <TableCell>{index.factor}</TableCell>
                <TableCell>{index.fechaInicio}</TableCell>
                <TableCell>{index.fechaFinal}</TableCell>
                <TableCell>{index.observacion}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default Tables;
