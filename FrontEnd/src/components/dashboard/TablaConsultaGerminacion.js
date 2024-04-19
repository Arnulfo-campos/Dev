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
      axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/1`)
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
      const contractAddress = '0x93aF9D2B201eB738eD5d2249Ffc41053A159A7d2';
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      try {
        const newData = await Promise.all(data.map(async (element) => {
          const newFormData = {
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
          };
          
          try {
            console.log(element.hash)

            const transaction = await web3.eth.getTransaction(element.hash);
            const var1 = await web3.eth.getStorageAt(contractAddress, 0, transaction.blockNumber);
            const var2 = await web3.eth.getStorageAt(contractAddress, 1, transaction.blockNumber);
            const var3 = await web3.eth.getStorageAt(contractAddress, 2, transaction.blockNumber);
            const var4 = await web3.eth.getStorageAt(contractAddress, 3, transaction.blockNumber);
            const var5 = await web3.eth.getStorageAt(contractAddress, 4, transaction.blockNumber);
            const var6 = await web3.eth.getStorageAt(contractAddress, 5, transaction.blockNumber);
            const var7 = await web3.eth.getStorageAt(contractAddress, 6, transaction.blockNumber);
            const var8 = await web3.eth.getStorageAt(contractAddress, 7, transaction.blockNumber);
            const var9 = await web3.eth.getStorageAt(contractAddress, 8, transaction.blockNumber);

            const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');
            if (receipt.status) {
              newFormData.profundidad = hexToString(var1);
              newFormData.tipoGerminador = hexToString(var2);
              newFormData.profundidadArena = hexToString(var3);
              newFormData.sombra = hexToString(var4);
              newFormData.area = hexToString(var5);
              newFormData.arena = hexToString(var6);
              newFormData.cantidadChapolasObtenidas = hexToString(var7);
              newFormData.observaciones = hexToString(var8);
              newFormData.fechaFinalGerminacion = hexToString(var9);

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
    <PageContainer title="Germinacion" description="this is Tables">
      <DashboardCard title="Proceso de Germinacion">
        <Typography>Proceso de Germinacion</Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo Germinador</TableCell>
                <TableCell>Profundidad</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Arena</TableCell>
                <TableCell>Profundidad de Arena</TableCell>
                <TableCell>Peso de la Arena</TableCell>
                <TableCell>Tipo de Sombra</TableCell>
                <TableCell>Chapolas Obtenidas</TableCell>
                <TableCell>Fecha Finalizacion</TableCell>
                <TableCell>observaciones</TableCell>

                   </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                  <TableCell>{formDataItem.tipoGerminador}</TableCell>
                  <TableCell>{formDataItem.profundidad}</TableCell>
                  <TableCell>{formDataItem.area}</TableCell>
                  <TableCell>{formDataItem.arena}</TableCell>
                  <TableCell>{formDataItem.profundidadArena}</TableCell>
                  <TableCell>{formDataItem.pesoArena}</TableCell>
                  <TableCell>{formDataItem.sombra}</TableCell>
                  <TableCell>{formDataItem.cantidadChapolasObtenidas}</TableCell>
                  <TableCell>{formDataItem.fechaFinalGerminacion}</TableCell>
                  <TableCell>{formDataItem.observaciones}</TableCell>
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
