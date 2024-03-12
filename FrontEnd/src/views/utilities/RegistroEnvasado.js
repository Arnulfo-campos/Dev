import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterEnvasadoForm = () => {
  const [formData, setFormData] = useState({
    fechaInicial: new Date(),
    fechaFinal: new Date(),
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

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicial', formData.fechaInicial.toISOString());
    formDataToSend.append('fechaFinal', formData.fechaFinal.toISOString());
    formDataToSend.append('imagen', formData.imagen);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/envasado', formDataToSend, {
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
    <PageContainer title="Registro de Envasado" description="Formulario de Registro de Envasado">
      <DashboardCard title="Registro de Envasado">
        <Typography>Completa el formulario para registrar el proceso de envasado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaInicial"
            label="Fecha Inicial"
            type="datetime-local"
            value={formData.fechaInicial}
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

export default RegisterEnvasadoForm;
