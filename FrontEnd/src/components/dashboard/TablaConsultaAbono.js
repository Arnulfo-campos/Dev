import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
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
      axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/14`)
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

      const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/o_uOrTPKA850dQ8Ier3GSA3orgzr5JBq');
       // Your contract's ABI and address
       const contractABI = [
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
          "name": "formula",
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
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_nombre",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_cantidad",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_formula",
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
        }
      ];
      const contractAddress = '0x109631863A9FDd7b8404fB36Eb8031c2fb7298eE';
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            nombre: '',
            cantidadAplicada: '',
            fechaAplicacion: new Date(),
            formulaAplicada: '',
            sembradoId: '0',
            imagen: null
           };
          
          try {
            const transaction = await web3.eth.getTransaction(element.hash);
            const var1 = await web3.eth.getStorageAt(contractAddress, 0, transaction.blockNumber);
            const var2 = await web3.eth.getStorageAt(contractAddress, 1, transaction.blockNumber);
            const var3 = await web3.eth.getStorageAt(contractAddress, 2, transaction.blockNumber);
            const var4 = await web3.eth.getStorageAt(contractAddress, 3, transaction.blockNumber);
             const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              newFormData.cantidadAplicada = hexToString(var1);
              newFormData.fechaAplicacion = hexToString(var2);
              newFormData.formulaAplicada = hexToString(var3);
              newFormData.nombre = hexToString(var4);
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
        {data && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Cantidad Aplicada</TableCell>
                  <TableCell>Fecha de Aplicacicon</TableCell>
                  <TableCell>Formula Aplicada</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {formData.map((formDataItem, row) => (
                  <TableRow key={row}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.cantidadAplicada}</TableCell>
                  <TableCell>{row.fechaAplicacion}</TableCell>
                  <TableCell>{row.formulaAplicada}</TableCell>
                </TableRow>
                                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        
      </DashboardCard>
    </PageContainer>
  );
};

export default Tables;
