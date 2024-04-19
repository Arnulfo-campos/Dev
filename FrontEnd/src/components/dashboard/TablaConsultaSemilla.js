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
      axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/3`)
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
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
            tipoVariedad: '',
            origen: '',
            certificada: true,
            cantidadKG: '',
            fechaRegistro: '',
            fechaAdquisicion:'',
            germinacionId: '',
            loteCafeId: '',
            imagen: null
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
            const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              newFormData.tipoVariedad = hexToString(var1);
              newFormData.origen = hexToString(var2);
              newFormData.cantidadKG = hexToString(var3);
              newFormData.germinacionId = hexToString(var4);
              newFormData.loteCafeId = hexToString(var5);
              newFormData.fechaAdquisicion = hexToString(var6);
              newFormData.certificada = hexToString(var7);
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
    <PageContainer title="Semillas" description="this is Tables">
      <DashboardCard title="Semillas">
        <Typography>Semilla a cultivada</Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo de Variedad</TableCell>
                <TableCell>Origen</TableCell>
                <TableCell>Peso de semilla</TableCell>
                <TableCell>fechaAdquisicion</TableCell>
                <TableCell>Certificada</TableCell>
                   </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                  <TableCell>{formDataItem.tipoVariedad}</TableCell>
                  <TableCell>{formDataItem.origen}</TableCell>
                  <TableCell>{formDataItem.cantidadKG}</TableCell>
                  <TableCell>{formDataItem.fechaAdquisicion}</TableCell>
                  <TableCell>{formDataItem.Certificada}</TableCell>
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
