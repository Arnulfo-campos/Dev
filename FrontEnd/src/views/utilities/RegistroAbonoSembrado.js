import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegistroAbonoSembrado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidadAplicada: '',
    fechaAplicacion: new Date(),
    formulaAplicada: '',
    sembradoId: 0,
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

    const fechaAplicacion = new Date(formData.fechaAplicacion);
    const fechaFormateada = fechaAplicacion.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('cantidadAplicada', formData.cantidadAplicada);
    formDataToSend.append('fechaAplicacion', fechaFormateada);
    formDataToSend.append('formulaAplicada', formData.formulaAplicada);
    formDataToSend.append('sembradoId', formData.sembradoId);
    formDataToSend.append('imagen', formData.imagen || null);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/abonos-sembrados', formDataToSend, {
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
    <PageContainer title="Registro de Abono" description="Formulario de Registro de Abono">
      <DashboardCard title="Registro de Abono">
        <Typography>Completa el formulario para registrar el abono aplicado a un sembrado:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            label="Nombre del Abono"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadAplicada"
            label="Cantidad Aplicada (Kg)"
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
            name="sembradoId"
            label="ID del Sembrado"
            type="number"
            value={formData.sembradoId}
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

export default RegistroAbonoSembrado;
