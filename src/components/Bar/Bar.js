import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Bar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div">
                    Movies
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Bar;