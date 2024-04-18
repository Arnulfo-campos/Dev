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
      axios.get('http://localhost:8080/loteusuarios/formulario/1019126544')
        .then(response => {
          setData(response.data);
          setFormData(response.data)
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    };

    fetchData();
  }, []);


  return (
    <PageContainer title="Lotes de Cafe" description="Consulta de Lavado">
      <DashboardCard title="Lotes de cafe">
        <Typography>Registros de Lavado de cafe</Typography>
        
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Nombre de la finca</TableCell>
                <TableCell>Id del Lote</TableCell>
                <TableCell>Id de la Cosecha</TableCell>
                 </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((formDataItem, index) => (
                <TableRow key={index}>
                  <TableCell>{formDataItem.Nombre}</TableCell>
                  <TableCell>{formDataItem.idLote}</TableCell>
                  <TableCell>{formDataItem.idCosecha}</TableCell>
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
