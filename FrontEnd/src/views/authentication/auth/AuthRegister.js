import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

const AuthRegister = ({ title, subtitle, subtext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [identification, setIdentification] = useState('');

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: name,
                    email: email,
                    password: password,
                    identification: identification,
                    tipo_usuario: 3, // Tipo de usuario: Cultivador
                }),
            });

            if (response.ok) {
                // Construir la URL con los parámetros necesarios
                const url = `/auth/registerCultivadorInicial/${name}/${identification}`;
                // Redirigir a la vista de registro de cultivador inicial con los parámetros
                window.location.href = url;
            } else {
                // Manejar errores aquí si es necesario
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Box>
                <Stack mb={3}>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                    <CustomTextField id="name" variant="outlined" fullWidth
                        value={name} onChange={(e) => setName(e.target.value)} />

                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                    <CustomTextField id="email" type="email" variant="outlined" fullWidth
                        value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                    <CustomTextField id="password" type="password" variant="outlined" fullWidth
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='identification' mb="5px" mt="25px">Identification</Typography>
                    <CustomTextField id="identification" variant="outlined" fullWidth
                        value={identification} onChange={(e) => setIdentification(e.target.value)} />

                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='userType' mb="5px" mt="25px">User Type</Typography>
                    <CustomTextField id="userType" variant="outlined" fullWidth defaultValue="Cultivador" disabled />
                </Stack>
                <Button color="primary" variant="contained" size="large" fullWidth onClick={handleFormSubmit}>
                    Sign Up
                </Button>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthRegister;

