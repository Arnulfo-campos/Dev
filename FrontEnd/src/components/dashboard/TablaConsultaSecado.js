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
      axios.get('http://localhost:8080/loteusuarios/formulario/1/1/4')
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
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            fechaInicio: "",
            fechaFinal: "",
            tipoSecado: '',
            pesoAntesSecado: "",
            pesoFinalSecado: "",
            humedad: "",
            factor: "",
            observacion: ''
          };
          
          try {
            const transaction = await web3.eth.getTransaction(element.hash);
            const var1 = await web3.eth.getStorageAt(contractAddress, 0, transaction.blockNumber);
            const var2 = await web3.eth.getStorageAt(contractAddress, 1, transaction.blockNumber);
            const var3 = await web3.eth.getStorageAt(contractAddress, 2, transaction.blockNumber);
            const var4 = await web3.eth.getStorageAt(contractAddress, 3, transaction.blockNumber);
            const var5 = await web3.eth.getStorageAt(contractAddress, 4, transaction.blockNumber);
            const var6 = await web3.eth.getStorageAt(contractAddress, 5, transaction.blockNumber);
            const var7 = await web3.eth.getStorageAt(contractAddress, 6, transaction.blockNumber);
            const var8 = await web3.eth.getStorageAt(contractAddress, 7, transaction.blockNumber);
            const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              const fechaInicio = hexToString(var6);;
              const fechaFinal = hexToString(var7);
              const tipoSecado = hexToString(var1);
              const pesoAntesSecado = hexToString(var2);
              const pesoFinalSecado = hexToString(var3);
              const humedad = hexToString(var4);
              const factor = hexToString(var5);
              const observacion = hexToString(var8);;
              newFormData.fechaInicio = fechaInicio;
              newFormData.fechaFinal = fechaFinal;
              newFormData.tipoSecado = tipoSecado;
              newFormData.pesoAntesSecado = pesoAntesSecado;
              newFormData.pesoFinalSecado = pesoFinalSecado;
              newFormData.humedad = humedad;
              newFormData.factor = factor;
              newFormData.observacion = observacion;
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
                  <TableCell>{formDataItem.tipoSecado}</TableCell>
                  <TableCell>{formDataItem.pesoAntesSecado}</TableCell>
                  <TableCell>{formDataItem.pesoFinalSecado}</TableCell>
                  <TableCell>{formDataItem.humedad}</TableCell>
                  <TableCell>{formDataItem.factor}</TableCell>
                  <TableCell>{formDataItem.fechaInicio}</TableCell>
                  <TableCell>{formDataItem.fechaFinal}</TableCell>
                  <TableCell>{formDataItem.observacion}</TableCell>
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
