import { Card, CardActionArea, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useApi } from './Api';
import { Center } from './Center';

export const AppHome = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [collections, setCollections] = useState([])
    const [levels, setLevels] = useState([])
    const api = useApi()
    const theme = useTheme()

    const load = async () => {
        const [cols, err] = await api.getPopularCollections();
        if (err != null) {
            setLoading(false)
            console.error(err.message)
            setError(true)
            return
        }
        setCollections(cols)
        const [levels, err2] = await api.getPopularLevels();
        if (err2 != null) {
            setLoading(false)
            console.error(err.message)
            setError(true)
            return
        }
        setLevels(levels)
        setLoading(false)
    }

    useEffect(() => {
        load();
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
                <Typography>An error ocurred while loading the levels, pleas try agan</Typography>
            </Center>
        )
    }

    return (
        <Grid container spacing={1} sx={{ padding: theme.spacing(2) }}>
            <Grid item xs={12}>
                <Typography variant='h5' fontFamily={'PublicPixel'}>Top Collections</Typography>
            </Grid>
            {collections.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                <Card variant='outlined'>
                    <CardActionArea onClick={() => { }}>
                        <CardContent>
                            <Typography variant='h6' fontFamily={'PublicPixel'}>{c.name}</Typography>
                            <Typography>{c.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>))}
            <Grid item xs={12}>
                <Typography variant='h5' fontFamily={'PublicPixel'}>Best Levels</Typography>
            </Grid>
            {levels.map((c) => (<Grid item xs={12} sm={3} key={c.id}>
                <Card variant='outlined'>
                    <CardActionArea onClick={() => { }}>
                        <CardContent>
                            <Typography variant='h6' fontFamily={'PublicPixel'}>{c.name}</Typography>
                            <Typography>{c.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>))}
        </Grid>
    );
};