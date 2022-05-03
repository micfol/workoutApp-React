import {Box, Stack, Typography } from '@mui/material'
import React from 'react'
import loadingBear from './Icons/rainbow-bear.gif'

function Loading() {

    return (
        <Stack component='div' sx={{display: 'flex', justifyContent: 'center'}}>
            <Box>
            <img 
                src={loadingBear} 
                alt="Loading..."/>
            </Box>
            <Typography variant='h5'>
                Loading...
            </Typography>
        </Stack>
    )
}

export default Loading