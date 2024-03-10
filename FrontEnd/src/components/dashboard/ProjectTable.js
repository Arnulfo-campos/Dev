import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al servicio
    axios.get('http://localhost:8080/lotes-cafe')
      .then(response => {
        setData(response.data); // Establecer los datos en el estado
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <PageContainer title="Tables" description="this is Tables">
      <DashboardCard title="Tables">
        <Typography>This is a Tables</Typography>
        
        {/* Aquí agregamos la tabla */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Germinacion ID</TableCell>
                <TableCell>Cultivador ID</TableCell>
                <TableCell>Crecimiento ID</TableCell>
                <TableCell>Envasado ID</TableCell>
                <TableCell>Fecha de Registro</TableCell>
                <TableCell>Última Actualización</TableCell>
                <TableCell>Área de Germinación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.germinacionId}</TableCell>
                  <TableCell>{row.cultivadorId}</TableCell>
                  <TableCell>{row.crecimientoId}</TableCell>
                  <TableCell>{row.envasadoId}</TableCell>
                  <TableCell>{row.fechaRegistro}</TableCell>
                  <TableCell>{row.fechaLastUPD}</TableCell>
                  <TableCell>{row.areaGerminacion}</TableCell>
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
