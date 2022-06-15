import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from './Api';
import { Center } from './Center';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useAuth } from '../util/AuthContext';
import FullscreenBttn from '.././compt/BUTTONS/Fullscreen-export.png';

export const Draft = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [draft, setDraft] = useState({});
    const [error, setError] = useState(false);
    const [loadedFunc, setLoadedFunc] = useState(false);
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
        id = parseInt(id)
        if (id === 0) {
            setDraft({ name: 'Nuevo Draft', description: 'Draft en blanco', id: 0 })
            setLoading(false);
            return
        }
        const [draft, error] = await api.getDraft(id)
        if (error != null) {
            console.error(error)
            setError(true)
            setLoading(false)
            return
        }
        setDraft(draft)
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
        setLoadedFunc(true);
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
                <Typography variant='h4' fontFamily={'PublicPixel'} >Error</Typography>
                <Typography>An error ocurred while loading the draft, pleas try agan</Typography>
            </Center>
        )
    }



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{ width: '1280px',padding: theme.spacing(2), display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant='h5' sx={{ fontFamily: 'PublicPixel', alignSelf: 'flex-start' }}>{draft.name}</Typography>
                <Typography sx={{ mb: theme.spacing(2), alignSelf: 'flex-start'}}>{draft.description}</Typography>
                {
                    loadedFunc ? <Unity style={{ height: '720px', width: '1280px' }} unityProvider={unityProvider} /> : null
                }
                <Button onClick={handleClickEnterFullscreen} sx={{ alignSelf: 'flex-end'}}>
                    <img src={FullscreenBttn} width="185" height="42.5" />
                </Button>
            </Box>
        </Box>
    );
}