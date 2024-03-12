import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterDescopeForm = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    imagen: null,
    sembradoId: 0
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
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      setFormData({
        ...formData,
        imagen: base64String // Establecer la imagen convertida a Base64 en el estado
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const fechaInicio = new Date(formData.fechaInicio);
    const fechaFinal = new Date(formData.fechaFinal);

    const fechaInicioFormateada = fechaInicio.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"
    const fechaFinalFormateada = fechaFinal.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicio', fechaInicioFormateada);
    formDataToSend.append('fechaFinal', fechaFinalFormateada);
    formDataToSend.append('imagen', formData.imagen || null);
    formDataToSend.append('sembradoId', formData.sembradoId);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/descope', formDataToSend, {
      headers: {
        'Content-Type': 'application/json'
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
    <PageContainer title="Registro de Descope" description="Formulario de Registro de Descope">
      <DashboardCard title="Registro de Descope">
        <Typography>Completa el formulario para registrar la actividad de descope en un sembrado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="fechaInicio"
            label="Fecha de Inicio"
            type="date"
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
            type="date"
            value={formData.fechaFinal}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="sembradoId"
            label="ID del Sembrado"
            type="number"
            value={formData.sembradoId}
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

export default RegisterDescopeForm;
