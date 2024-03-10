import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    tipoVariedad: '',
    origen: '',
    certificada: false,
    cantidadKG: 0,
    fechaRegistro: new Date(),
    fechaAdquisicion: '',
    germinacionId: 0,
    loteCafeId: 0,
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

    const fechaAdquisicion = new Date(formData.fechaAdquisicion);
    const fechaRegistro = new Date(formData.fechaRegistro);

    const fechaFormateada = fechaAdquisicion.toISOString(); // Formatea la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"
    const fechaFormateada2 = fechaRegistro.toISOString(); // Formatea la fecha al formato "YYYY-MM-DDTHH:mm:ss.sssZ"

    console.log(formData.imagen)
    const formDataToSend = new FormData();
    formDataToSend.append('tipoVariedad', formData.tipoVariedad);
    formDataToSend.append('origen', formData.origen);
    formDataToSend.append('certificada', formData.certificada);
    formDataToSend.append('cantidadKG', formData.cantidadKG);
    formDataToSend.append('fechaRegistro', fechaFormateada2);
    formDataToSend.append('fechaAdquisicion', fechaFormateada);
    formDataToSend.append('germinacionId', formData.germinacionId);
    formDataToSend.append('loteCafeId', formData.loteCafeId);
    formDataToSend.append('imagen', formData.imagen || null);

    // Enviar la solicitud POST al servidor
    axios.post('http://localhost:8080/semillas-cafe',formDataToSend, {
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
    <PageContainer title="Registro Semilla" description="Formulario de Registro de Semilla">
      <DashboardCard title="Registro de Semilla">
        <Typography>Completa el formulario para registrar la semilla:</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            name="tipoVariedad"
            label="Tipo de Variedad"
            select
            value={formData.tipoVariedad}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {['Arábica','Robusta','Liberica','Excelsa','Bourbon','Typica','Geisha','Catuai','Mundo Novo','Caturra'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="origen"
            label="Origen"
            value={formData.origen}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="cantidadKG"
            label="Cantidad (KG)"
            type="number"
            value={formData.cantidadKG}
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
            name="loteCafeId"
            label="ID de Lote de Café"
            type="number"
            value={formData.loteCafeId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="fechaAdquisicion"
            label="Fecha de Adquisición"
            type="date"
            value={formData.fechaAdquisicion}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={<Checkbox name="certificada" checked={formData.certificada} onChange={handleChange} />}
            label="Certificada"
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

export default RegisterForm;
