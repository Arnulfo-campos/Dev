import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterSecadoForm = () => {
  const [formData, setFormData] = useState({
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    tipoSecado: '',
    pesoAntesSecado: 0,
    pesoFinalSecado: 0,
    humedad: 0,
    factor: 0,
    observacion: '',
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

    const fechaInicio = new Date(formData.fechaInicio);
    const fechaFinal = new Date(formData.fechaFinal);

    const fechaInicioFormateada = fechaInicio.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"
    const fechaFinalFormateada = fechaFinal.toISOString(); // Formatear la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

    const formDataToSend = new FormData();
    formDataToSend.append('fechaInicio', fechaInicioFormateada);
    formDataToSend.append('fechaFinal', fechaFinalFormateada);
    formDataToSend.append('tipoSecado', formData.tipoSecado);
    formDataToSend.append('pesoAntesSecado', formData.pesoAntesSecado);
    formDataToSend.append('pesoFinalSecado', formData.pesoFinalSecado);
    formDataToSend.append('humedad', formData.humedad);
    formDataToSend.append('factor', formData.factor);
    formDataToSend.append('observacion', formData.observacion);
    formDataToSend.append('imagen', formData.imagen || null);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/secado', formDataToSend, {
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
    <PageContainer title="Registro de Secado" description="Formulario de Registro de Secado">
      <DashboardCard title="Registro de Secado">
        <Typography>Completa el formulario para registrar la actividad de secado:</Typography>
        
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
            name="tipoSecado"
            label="Tipo de Secado"
            select
            value={formData.tipoSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Natural', 'Mecanico'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="pesoAntesSecado"
            label="Peso Antes del Secado"
            type="number"
            value={formData.pesoAntesSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="pesoFinalSecado"
            label="Peso Final del Secado"
            type="number"
            value={formData.pesoFinalSecado}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="humedad"
            label="Humedad"
            type="number"
            value={formData.humedad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="factor"
            label="Factor"
            type="number"
            value={formData.factor}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="observacion"
            label="Observación"
            multiline
            rows={4}
            value={formData.observacion}
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

export default RegisterSecadoForm;
