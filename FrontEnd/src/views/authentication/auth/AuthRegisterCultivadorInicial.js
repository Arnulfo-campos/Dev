import React, { useState } from 'react';
import { Typography, TextField, Button, InputLabel, Input, FormControl } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AuthRegisterCultivador = ({ title, subtitle, subtext }) => {
  const { nameParam, identification } = useParams();
  const [formData, setFormData] = useState({
    id: identification,
    nombre: nameParam,
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
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
        imagen: base64String,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/cultivadores', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        window.location.href = '/dashboard';
      } else {
        // Handle errors here if necessary
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <PageContainer title={title} description={subtitle}>
      <Typography>{subtext}</Typography>
        
      <form onSubmit={handleFormSubmit}>
        <TextField
          name="id"
          label="ID"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="nombre"
          label="Name"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="apellido"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="direccion"
          label="Dirección"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="telefono"
          label="Telefono"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="correo"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="imagen">Attach Image</InputLabel>
          <Input
            id="imagen"
            name="imagen"
            type="file"
            onChange={handleImageChange}
          />
        </FormControl>
          
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </PageContainer>
  );
};

export default AuthRegisterCultivador;
