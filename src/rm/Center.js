import { Grid } from '@mui/material';
import React from 'react';

export const Center = ({ children }) => {
    return (
        <Grid container direction="column" alignItems='center' justifyContent='center' sx={{ height: '90vh', width: '100vw' }}>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
};