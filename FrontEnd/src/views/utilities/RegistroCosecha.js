import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterCosechaForm = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    pesoTotalCafe: 0,
    pesoTotalCafeDespulpado: 0,
    tipoRecoleccion: '',
    observaciones: '',
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      imagen: file // Establecer la imagen en el estado
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const fechaInicio = new Date(formData.fechaInicio);
    const fechaFinal = new Date(formData.fechaFinal);

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicio', fechaInicio.toISOString());
    formDataToSend.append('fechaFinal', fechaFinal.toISOString());
    formDataToSend.append('pesoTotalCafe', formData.pesoTotalCafe);
    formDataToSend.append('pesoTotalCafeDespulpado', formData.pesoTotalCafeDespulpado);
    formDataToSend.append('tipoRecoleccion', formData.tipoRecoleccion);
    formDataToSend.append('observaciones', formData.observaciones);
    formDataToSend.append('imagen', formData.imagen);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/cosecha', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data);
      // Puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito
    }).catch(error => {
      console.error('Error al registrar:', error);
      // Puedes manejar el error como desees, por ejemplo, mostrar un mensaje de error
    });
  };

  return (
    <PageContainer title="Registro de Cosecha" description="Formulario de Registro de Cosecha">
      <DashboardCard title="Registro de Cosecha">
        <Typography>Completa el formulario para registrar la actividad de cosecha:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaInicio"
            label="Fecha de Inicio"
            type="datetime-local"
            value={formData.fechaInicio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="fechaFinal"
            label="Fecha Final"
            type="datetime-local"
            value={formData.fechaFinal}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="pesoTotalCafe"
            label="Peso Total de Café"
            type="number"
            value={formData.pesoTotalCafe}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="pesoTotalCafeDespulpado"
            label="Peso Total de Café Despulpado"
            type="number"
            value={formData.pesoTotalCafeDespulpado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="tipoRecoleccion"
            label="Tipo de Recolección"
            value={formData.tipoRecoleccion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="observaciones"
            label="Observaciones"
            multiline
            rows={4}
            value={formData.observaciones}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="imagen">Imagen</InputLabel>
            <Input
              id="imagen"
              name="imagen"
              type="file"
              onChange={handleImageChange}
            />
          </FormControl>
          
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default RegisterCosechaForm;
