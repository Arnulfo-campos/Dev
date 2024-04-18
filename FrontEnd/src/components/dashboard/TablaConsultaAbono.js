import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState(null); // Cambié el estado inicial a null

  useEffect(() => {
    // Realizar la solicitud GET al servicio
    axios.get('http://localhost:8080/abonos-crecimiento')
      .then(response => {
        console.log(response.data);
        setData(response.data); // Establecer los datos en el estado

      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

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
                  <TableCell>ID Germinacion</TableCell>
                  <TableCell>ID Lote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data.map(row => (
                  <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
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
