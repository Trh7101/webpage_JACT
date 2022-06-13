//This is a template extracted from: https://mui.com/material-ui/getting-started/templates/ credits for the autor. 
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../../util/AuthContext';
import { Alert, CircularProgress } from '@mui/material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function SignIn({ onSignup }) {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const disabled = () => {
        for (const k in errors) {
            if (errors[k]) return true;
        }
        return !(email.length && password.length);
    }

    let from = location.state?.from?.pathname || "/app/home";

    // if (auth.user !== null) {
    //     return <Navigate to="/" />;
    // }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                {error ? <Alert severity='error' variant='filled'>Ocurrió un error, por favor intenta de nuevo.</Alert> : null}
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Dirección de mail"
                                name="email"
                                autoComplete="email"
                                disabled={loading}
                                error={errors.email}
                                helperText={errors.email ? "Email invalido" : null}
                                value={email}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setEmail(v);
                                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                                        setErrors({ ...errors, email: true })
                                    } else {
                                        setErrors({ ...errors, email: false })
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                disabled={loading}
                                error={errors.password}
                                helperText={errors.password ? 'Minimo 8 caracteres' : null}
                                value={password}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setPassword(v);
                                    if (v.length < 3) {
                                        setErrors({ ...errors, password: true })
                                    } else {
                                        setErrors({ ...errors, password: false })
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        disabled={disabled()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={async () => {
                            setLoading(true);
                            try {
                                await auth.login(email, password);
                                navigate(from, { replace: true });
                            } catch (e) {
                                console.error(e);
                                setError(true);
                                setLoading(false);
                            }
                        }}
                    >
                        {loading ? <CircularProgress size={25} /> : "Iniciar Sesión"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link onClick={onSignup} variant="body2">
                                No tienes cuenta? Crear cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>
    );
}