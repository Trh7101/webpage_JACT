import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from './Api';
import { Center } from './Center';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useAuth } from '../util/AuthContext';

export const Draft = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [draft, setDraft] = useState({})
    const [error, setError] = useState(false);
    const [loadedFunc, setLoadedFunc] = useState(false);
    const theme = useTheme()
    const api = useApi()
    const auth = useAuth()

    const { unityProvider } = useUnityContext({
        loaderUrl: '/Build/RaceMakerBuild.loader.js',
        dataUrl: "/Build/RaceMakerBuild.data",
        frameworkUrl: "/Build/RaceMakerBuild.framework.js",
        codeUrl: '/Build/RaceMakerBuild.wasm'
    })

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
                <Typography variant='h4'>Error</Typography>
                <Typography>Ocurrió un error cargando el draft, por favor intenta de nuevo</Typography>
            </Center>
        )
    }



    return (
        <Box sx={{ padding: theme.spacing(2) }}>
            <Typography variant='h5'>{draft.name}</Typography>
            <Typography sx={{ mb: theme.spacing(2) }}>{draft.description}</Typography>
            {
                loadedFunc ? <Unity style={{ height: '50vh', width: '80vw' }} unityProvider={unityProvider} /> : null
            }
        </Box>
    );
}