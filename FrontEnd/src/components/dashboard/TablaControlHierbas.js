import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const Tables = () => {

  
async function getTransactionData() {
  try {
      // Get the transaction receipt
      const receipt = await web3.eth.getTransactionReceipt('0xe76a4b4227d4c59d1ec7272c8f6e03bac3187cfaef0af66f0f5382024072d2b1');

      // Check the status of the transaction
      if (receipt.status) {
          console.log('Transaction was successful');

          // Call the contract's getter functions
          const fechaInicio = await contract.methods.fechaInicio().call();
          const fechaFinal = await contract.methods.fechaFinalizacion().call();
          const tipoSecado = await contract.methods.tipo().call();
          const pesoAntesSecado = await contract.methods.pesoAntes().call();
          const pesoFinalSecado = await contract.methods.pesoDespues().call();
          const humedad = await contract.methods.humedad().call();
          const factor = await contract.methods.factor().call();
          const observacion = await contract.methods.observacion().call();

          

          console.log(`fecha inicio: ${fechaInicio}`);
          console.log(`tipo: ${tipoSecado}`);
      } else {
          console.log('Transaction failed');
      }
  } catch (err) {
      console.error(err);
  }
}
getTransactionData();

  const [data, setData] = useState(null); // Cambié el estado inicial a null

  useEffect(() => {
    // Realizar la solicitud GET al servicio
    axios.get('http://localhost:8080/tostado')
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
                  <TableCell>Fecha Inicio</TableCell>
                  <TableCell>Fecha Final</TableCell>
                  <TableCell>Temperatura inicial</TableCell>
                  <TableCell>Temperatura 2</TableCell>
                  <TableCell>horaTemperatura2</TableCell>
                  <TableCell>temperatura3</TableCell>
                  <TableCell>horaTemperatura3</TableCell>
                  <TableCell>temperaturaFinal</TableCell>
                  <TableCell>humedadFinal</TableCell>
                  <TableCell>muestraCafe</TableCell>
                  <TableCell>seleccionGrano</TableCell>
                  <TableCell>malla</TableCell>
                  <TableCell>tonalidadAgtron</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data.map(row => (
                  <TableRow key={row.id}>
                 <TableCell>{row.id}</TableCell>
                  <TableCell>{row.fechaInicio}</TableCell>
                  <TableCell>{row.fechaFinal}</TableCell>
                  <TableCell>{row.temperaturaInicial}</TableCell>
                  <TableCell>{row.temperatura2}</TableCell>
                  <TableCell>{row.horaTemperatura2}</TableCell>
                  <TableCell>{row.temperatura3}</TableCell>
                  <TableCell>{row.horaTemperatura3}</TableCell>
                  <TableCell>{row.temperaturaFinal}</TableCell>
                  <TableCell>{row.humedadFinal}</TableCell>
                  <TableCell>{row.muestraCafe}</TableCell>
                  <TableCell>{row.seleccionGrano}</TableCell>
                  <TableCell>{row.malla}</TableCell>
                  <TableCell>{row.tonalidadAgtron}</TableCell>
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
