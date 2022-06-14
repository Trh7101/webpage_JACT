import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from './Api'
import { Center } from './Center';
import { Box, CircularProgress, Divider, Grid, Typography, Card, CardActionArea, CardContent, useTheme, CardActions, Button } from '@mui/material';

export const Profile = () => {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [drafts, setDrafts] = useState([])
    const [levels, setLevels] = useState([])
    let { id } = useParams()
    const theme = useTheme()
    const navigate = useNavigate()
    const api = useApi()

    const load = async () => {
        // TODO use auth profile instead of pulling
        id = parseInt(id)
        setLoading(true)
        const [user, userErr] = await api.getUser(id)
        if (userErr != null) {
            setError(true)
            setLoading(false)
            return
        }
        setProfile(user)
        const [levels, levelsErr] = await api.getUserLevels(id)
        if (levelsErr != null) {
            setError(true)
            setLoading(false)
            return
        }
        setLevels(levels)
        if (id === 0) {
            const [drafts, draftsErr] = await api.getUserDrafts(id)
            if (draftsErr != null) {
                setError(true)
                setLoading(false)
                return
            }
            setDrafts(drafts)
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
                <Typography variant='h4' fontFamily={'PublicPixel'}>Error</Typography>
                <Typography>Ocurrió un error cargando el perfil, por favor intenta de nuevo</Typography>
            </Center>
        )
    }

    return (
        <Box sx={{ padding: theme.spacing(2) }}>
            <Typography variant='h5' fontFamily={'PublicPixel'}>Perfil</Typography>
            <Typography>{`Nombre: ${profile.name}`}</Typography>
            <Typography>{`Email: ${profile.email}`}</Typography>
            <Typography>{`Fecha de creación: ${profile.joined}`}</Typography>
            <Button href='/'>
                <Typography variant='h9' fontFamily={'PublicPixel'}>SIGN OUT</Typography>
            </Button>
            <Divider sx={{ mt: theme.spacing(1), mb: theme.spacing(1) }} />
            {id == 0 ? (
                <React.Fragment>
                    <Typography variant='h5' fontFamily={'PublicPixel'} sx={{ mb: theme.spacing(1) }}>Drafts</Typography>
                    <Grid container spacing={1}>
                        {drafts.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                            <Card variant='outlined'>
                                <CardActionArea onClick={() => {
                                    navigate(`/app/draft/${c.id}`)
                                }}>
                                    <CardContent>
                                        <Typography variant='h6' fontFamily={'PublicPixel'}>{c.name}</Typography>
                                        <Typography>{c.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size='small' onClick={() => {
                                        navigate(`/app/draft/${c.id}`)
                                    }}>Editar</Button>
                                    <Button size='small' color='error' onClick={async () => {
                                        await api.deleteDraft(c.id)
                                        load()
                                    }}>Eliminar</Button>
                                </CardActions>
                            </Card>
                        </Grid>))}
                    </Grid>
                    <Divider sx={{ mt: theme.spacing(1), mb: theme.spacing(1) }} />
                </React.Fragment>
            ) : null}
            <Typography variant='h5' fontFamily={'PublicPixel'} sx={{ mb: theme.spacing(1) }}>Niveles</Typography>
            <Grid container spacing={1}>
                {levels.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                    <Card variant='outlined'>
                        <CardActionArea onClick={() => { navigate(`/app/level/${id}`) }}>
                            <CardContent>
                                <Typography variant='h6' fontFamily={'PublicPixel'}>{c.name}</Typography>
                                <Typography>{c.description}</Typography>
                                <Typography>{`Dificultad: ${c.difficulty}`}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' onClick={() => {
                                navigate(`draft/${c.id}`)
                            }}>Analytics</Button>
                            <Button size='small' color='error' onClick={async () => {
                                await api.deleteLevel(c.id)
                                load()
                            }}>Eliminar</Button>
                        </CardActions>
                    </Card>
                </Grid>))}
            </Grid>
        </Box>
    );
}