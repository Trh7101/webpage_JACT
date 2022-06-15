import { Box, Button, CircularProgress, Grid, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../util/AuthContext';
import { useApi } from './Api';
import { Center } from './Center';
import { Unity, useUnityContext } from "react-unity-webgl";
import FullscreenBttn from '.././compt/BUTTONS/Fullscreen-export.png';

export const Level = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState({})
    const [otherLevels, setOtherLevels] = useState([]);
    const [error, setError] = useState(false);
    const theme = useTheme()
    const api = useApi()
    const auth = useAuth()

    const { unityProvider, requestFullscreen } = useUnityContext({
        loaderUrl: '/Build/RaceMakerBuild.loader.js',
        dataUrl: "/Build/RaceMakerBuild.data",
        frameworkUrl: "/Build/RaceMakerBuild.framework.js",
        codeUrl: '/Build/RaceMakerBuild.wasm'
    })

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

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
        const rmBridge = {
            config: () => JSON.stringify({
                type: 'draft',
                id: parseInt(id),
                token: auth.token(),
            }),
        };
        window.rmBridge = rmBridge;
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
                <Typography>An error ocurred while loading the level, pleas try agan</Typography>
            </Center>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{ width: '1280px',padding: theme.spacing(2), display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant='h5' sx={{ fontFamily: 'PublicPixel', alignSelf: 'flex-start' }} >{level.name}</Typography>
                <Typography variant='h6' sx={{ fontFamily: 'PublicPixel', alignSelf: 'flex-start' }}>{level.user.name}</Typography>
                <Typography sx={{ alignSelf: 'flex-start'}}>{level.description} </Typography>
                <Typography sx={{ alignSelf: 'flex-start'}}>{`Dificultad ${level.difficulty}`} </Typography>
                <Typography sx={{ mb: theme.spacing(2), alignSelf: 'flex-start'}}>{`Creado ${level.created}${level.updated && level.updated.valid ? ' · Actualizado: ' + level.updated.date : ''}`}</Typography>
                <Unity style={{ height: '720px', width: '1280px' }} unityProvider={unityProvider} />
                {
                    otherLevels.length ? (
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography fontFamily={'PublicPixel'} variant='h5' sx={{ mb: theme.spacing(1), mt: theme.spacing(2) }}>Te puede gustar</Typography>
                            </Grid>
                            {otherLevels.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                                <Card variant='outlined'>
                                    <CardActionArea onClick={() => { }}>
                                        <CardContent>
                                            <Typography variant='h6' fontFamily={'PublicPixel'}>{c.name}</Typography>
                                            <Typography>{c.description}</Typography>
                                            <Typography>{`Dificultad: ${c.difficulty}`}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>))}
                        </Grid>
                    ) : null
                }
                <Button onClick={handleClickEnterFullscreen} sx={{ alignSelf: 'flex-end'}}>
                    <img src={FullscreenBttn} width="185" height="42.5" />
                </Button>
            </Box>
        </Box>
    );
}