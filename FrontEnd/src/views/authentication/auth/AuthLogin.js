import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ title, subtitle, subtext }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberDevice, setRememberDevice] = useState(false);
    const [error, setError] = useState('');

    const handleFormSubmit = async () => {
        try {
            // Realizar llamada al servicio GET para verificar la existencia del usuario
            const response = await fetch(`http://localhost:8080/usuarios/${username}`);
            if (response.ok) {
                const userData = await response.json();
                if (userData.password === password) {
                    // Contraseña correcta, redirigir a la vista Dashboard
                    window.location.href = '/dashboard';
                } else {
                    setError('Usuario o contraseña incorrectos');
                }
            } else {
                setError('Usuario no encontrado');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setError('Error al enviar el formulario');
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

            <Stack>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                    <CustomTextField id="username" variant="outlined" fullWidth
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                    <CustomTextField id="password" type="password" variant="outlined" fullWidth
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember this Device"
                            checked={rememberDevice} onChange={(e) => setRememberDevice(e.target.checked)}
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleFormSubmit}
                >
                    Sign In
                </Button>
            </Box>
            {error && <Typography color="error">{error}</Typography>}
            {subtitle}
        </>
    );
};

export default AuthLogin;