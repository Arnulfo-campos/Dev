import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterPesoDiarioForm = () => {
  const [formData, setFormData] = useState({
    fechaRegistro: new Date(),
    pesoCafe: 0,
    pesoDespulpado: 0,
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

    const fechaRegistro = new Date(formData.fechaRegistro);

    const formDataToSend = new FormData();
    formDataToSend.append('fechaRegistro', fechaRegistro.toISOString());
    formDataToSend.append('pesoCafe', formData.pesoCafe);
    formDataToSend.append('pesoDespulpado', formData.pesoDespulpado);
    formDataToSend.append('imagen', formData.imagen);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/peso-diario', formDataToSend, {
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
    <PageContainer title="Registro de Peso Diario" description="Formulario de Registro de Peso Diario">
      <DashboardCard title="Registro de Peso Diario">
        <Typography>Completa el formulario para registrar el peso diario:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaRegistro"
            label="Fecha de Registro"
            type="datetime-local"
            value={formData.fechaRegistro}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="pesoCafe"
            label="Peso de Café"
            type="number"
            value={formData.pesoCafe}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="pesoDespulpado"
            label="Peso de Café Despulpado"
            type="number"
            value={formData.pesoDespulpado}
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

export default RegisterPesoDiarioForm;
