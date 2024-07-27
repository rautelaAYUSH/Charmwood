import React from 'react'
import { Box, Typography,useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const Services1 = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{
            marginTop : matches ? '0' : '2rem',
        }}>
            <Typography variant="h1" sx={{
                fontSize: "1.5rem",
                fontFamily: "Inter, serif",
            }}>
                Horses lend us the wings we lack, 
                So what’s better than learing how to ride?
            </Typography>
            <Typography variant="h3" sx={{
                fontSize: "1.4rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
                marginTop: '1.5rem',
            }}>
                Here are our most popular plans
            </Typography>
           
            
            <Typography variant="h1" sx={{
                fontSize: "1.5rem",
                fontFamily: "Inter, serif",
                marginTop: '1.5rem',
            }}>
                24 classes for 14999/-
            </Typography>
            <Typography variant="h3" sx={{
                fontSize: "1.3rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
            }}>
                6 classes a week our instructor will teach you the art of horse riding, each class consist of years of wisdom condensed in 40 mins.
            </Typography>

            <Typography variant="h1" sx={{
                fontSize: "1.5rem",
                fontFamily: "Inter, serif",
                marginTop: '1.5rem',
            }}>
                12 classes for 7999/-
            </Typography>
            <Typography variant="h3" sx={{
                fontSize: "1.3rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
            }}>
                3 classes a week our instructor will teach you the art of horse riding, each class consist of years of wisdom condensed in 40 mins.
            </Typography>
        </Box>
    )
}

export default Services1
