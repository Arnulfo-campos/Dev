import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState(null); // Cambié el estado inicial a null

  useEffect(() => {
    // Realizar la solicitud GET al servicio
    axios.get('http://localhost:8081/ipfs/QmcVwWbNdXbRHY6USmFa6agcZPJG2SD1uQwCMse4Tbfabo')
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
                <TableRow key={data.name}> {/* Usamos la clave name para la clave única */}
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.germinacion}</TableCell>
                  <TableCell>{data.cultivador}</TableCell>
                  <TableCell>{data.crecimiento}</TableCell>
                  <TableCell>{data.envasado}</TableCell>
                  <TableCell>{data.fechaRegistro}</TableCell>
                  <TableCell>{data.fechaActualizacion}</TableCell>
                  <TableCell>{data.areaGerminacion}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
        
      </DashboardCard>
    </PageContainer>
  );
};

export default Tables;
