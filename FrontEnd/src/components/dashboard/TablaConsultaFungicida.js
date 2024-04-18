import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../shared/DashboardCard';
import axios from 'axios';
const { Web3 } = require('web3');

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
      axios.get('http://localhost:8080/loteusuarios/formulario/1/1/8')
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

      const web3 = new Web3('https://sepolia.infura.io/v3/df798f3ffd1d4b35bdb14ac0c916eb3f');
       // Your contract's ABI and address
       const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_nombre",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_cantidadAplicada",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_formulaAplicada",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_idGerminacion",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_fechaAplicacion",
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
            "name": "fechaAplicacion",
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
            "name": "formulaAplicada",
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
            "name": "nombre",
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
      const contractAddress = '0xCB48F6D054FFae600d425890481D2f5c4B113144';
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            nombre: "",
            cantidadAplicada: "",
            formulaAplicada: '',
            idGerminacion: "",
            fechaAplicacion: "",
           };
          
          try {
            const transaction = await web3.eth.getTransaction(element.hash);
            const var1 = await web3.eth.getStorageAt(contractAddress, 0, transaction.blockNumber);
            const var2 = await web3.eth.getStorageAt(contractAddress, 1, transaction.blockNumber);
            const var3 = await web3.eth.getStorageAt(contractAddress, 2, transaction.blockNumber);
            const var4 = await web3.eth.getStorageAt(contractAddress, 3, transaction.blockNumber);
            const var5 = await web3.eth.getStorageAt(contractAddress, 4, transaction.blockNumber);
             const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              newFormData.nombre = hexToString(var1);
              newFormData.cantidadAplicada = hexToString(var2);
              newFormData.formulaAplicada = hexToString(var3);
              newFormData.idGerminacion = hexToString(var4);
              newFormData.fechaAplicacion = hexToString(var5);
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
    <PageContainer title="Fungicidas" description="this is Tables">
      <DashboardCard title="Fungicidas">
        <Typography>Registros de fungicidas utilizados</Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Cantidad Aplicada</TableCell>
                <TableCell>Formula Aplicada</TableCell>
                <TableCell>Id Germinacion</TableCell>
                <TableCell>Fecha Aplicacion</TableCell>
                 </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                  <TableCell>{formDataItem.nombre}</TableCell>
                  <TableCell>{formDataItem.cantidadAplicada}</TableCell>
                  <TableCell>{formDataItem.formulaAplicada}</TableCell>
                  <TableCell>{formDataItem.idGerminacion}</TableCell>
                  <TableCell>{formDataItem.fechaAplicacion}</TableCell>
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
