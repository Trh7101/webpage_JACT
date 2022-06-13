import { Box, CircularProgress, Grid, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from './Api';
import { Center } from './Center';

export const Level = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState({})
    const [otherLevels, setOtherLevels] = useState([]);
    const [error, setError] = useState(false);
    const theme = useTheme()
    const api = useApi()

    const load = async () => {
        const [level, error] = await api.getLevel(id)
        if (error != null) {
            console.error(error)
            setError(true)
            setLoading(false)
            return
        }
        setLevel(level)
        const [other, err] = await api.getUserLevels(level.uid)
        if (err != null) {
            console.error(error)
        } else {
            setOtherLevels(other)
        }
        setLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    if (loading) {
        return (
            <Center>
                <CircularProgress />
            </Center>
        );
    }

    if (error) {
        return (
            <Center>
                <Typography variant='h4'>Error</Typography>
                <Typography>Ocurrió un error cargando el nivel, por favor intenta de nuevo</Typography>
            </Center>
        )
    }

    return (
        <Box sx={{ padding: theme.spacing(2) }}>
            <Typography variant='h5'>{level.name}</Typography>
            <Typography variant='h6'>{level.user.name}</Typography>
            <Typography>{level.description}</Typography>
            <Typography>{`Dificultad ${level.difficulty}`}</Typography>
            <Typography sx={{ mb: theme.spacing(2) }}>{`Creado ${level.created}${level.updated && level.updated.valid ? ' · Actualizado: ' + level.updated.date : ''}`}</Typography>
            <div style={{ backgroundColor: 'red', height: '40vh', 'width': '80vw' }}></div>
            {
                otherLevels.length ? (
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ mb: theme.spacing(1), mt: theme.spacing(2) }}>Te puede gustar</Typography>
                        </Grid>
                        {otherLevels.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                            <Card variant='outlined'>
                                <CardActionArea onClick={() => { }}>
                                    <CardContent>
                                        <Typography variant='h6'>{c.name}</Typography>
                                        <Typography>{c.description}</Typography>
                                        <Typography>{`Dificultad: ${c.difficulty}`}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>))}
                    </Grid>
                ) : null
            }
        </Box>
    );
}