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
      axios.get('http://localhost:8080/loteusuarios/formulario/1/1/6')
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
                    "name": "_fechaInicio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_fechaFinal",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_pesoCafeFlotante",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_observacion",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_idCosecha",
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
            "name": "idCosecha",
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
            "name": "pesoCafeFlotante",
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
      const contractAddress = '0x60fa6F3FA470cf63991F969DacC84Ec234817Af9';
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            fechaInicio: '',
            fechaFinal: '',
            pesoCafeFlotante: '',
            observacion: '',
            imagen: null,
            cosechaId: ''
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
              newFormData.fechaInicio = hexToString(var1);
              newFormData.fechaFinal = hexToString(var2);
              newFormData.pesoCafeFlotante = hexToString(var3);
              newFormData.observacion = hexToString(var4);
              newFormData.cosechaId = hexToString(var5);
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
    <PageContainer title="Lavado" description="Consulta de Lavado">
      <DashboardCard title="Lavado">
        <Typography>Registros de Lavado de cafe</Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha de Inicio</TableCell>
                <TableCell>Fecha Finalizacion</TableCell>
                <TableCell>Peso Cafe Flotante</TableCell>
                <TableCell>Observacion</TableCell>
                <TableCell>Id Cosecha</TableCell>
                 </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                  <TableCell>{formDataItem.fechaInicio}</TableCell>
                  <TableCell>{formDataItem.fechaFinal}</TableCell>
                  <TableCell>{formDataItem.pesoCafeFlotante}</TableCell>
                  <TableCell>{formDataItem.observacion}</TableCell>
                  <TableCell>{formDataItem.cosechaId}</TableCell>
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
