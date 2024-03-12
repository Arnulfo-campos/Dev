import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegistroFungicida = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidadAplicada: '',
    fechaAplicacion: new Date(),
    formulaAplicada: '',
    germinacionId: 0,
    imagen: null
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'certificada' ? checked : value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      setFormData({
        ...formData,
        imagen: base64String // Aquí establecemos la imagen convertida a Base64 en el estado
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const fechaAplicacion = new Date(formData.fechaAplicacion);

    const fechaFormateada = fechaAplicacion.toISOString(); // Formatea la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('cantidadAplicada', formData.cantidadAplicada);
    formDataToSend.append('fechaAplicacion', fechaFormateada);
    formDataToSend.append('formulaAplicada', formData.formulaAplicada);
    formDataToSend.append('germinacionId', formData.germinacionId);
    formDataToSend.append('imagen', formData.imagen || null);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/fungicida',formDataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
        console.log(response.data);
        // Puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error('Error al registrar:', error);
        // Puedes manejar el error como desees, por ejemplo, mostrar un mensaje de error
      });
  };

  return (
    <PageContainer title="Registro Fungicida" description="Formulario de Registro de Fungicida">
      <DashboardCard title="Registro de Fungicida">
        <Typography>Completa el formulario para registrar el fungicida:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            label="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadAplicada"
            label="Cantidad Aplicada"
            type="number"
            value={formData.cantidadAplicada}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="formulaAplicada"
            label="Fórmula Aplicada"
            value={formData.formulaAplicada}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="germinacionId"
            label="ID de Germinación"
            type="number"
            value={formData.germinacionId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="fechaAplicacion"
            label="Fecha de Aplicación"
            type="date"
            value={formData.fechaAplicacion}
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

export default RegistroFungicida;
