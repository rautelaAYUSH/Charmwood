import React from 'react'
import { Box, Typography } from '@mui/material'

const Services1 = () => {
    return (
        <Box>
            <Typography variant="h1" sx={{
                fontSize: "2rem",
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
                fontSize: "1.7rem",
                fontFamily: "Inter, serif",
                marginTop: '1.5rem',
            }}>
                24 classes for 14999/-
            </Typography>
            <Typography variant="h3" sx={{
                fontSize: "1.4rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
            }}>
                6 classes a week our instructor will teach you the art of horse riding, each class consist of years of wisdom condensed in 40 mins.
            </Typography>

            <Typography variant="h1" sx={{
                fontSize: "1.7rem",
                fontFamily: "Inter, serif",
                marginTop: '1.5rem',
            }}>
                12 classes for 7999/-
            </Typography>
            <Typography variant="h3" sx={{
                fontSize: "1.4rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
            }}>
                3 classes a week our instructor will teach you the art of horse riding, each class consist of years of wisdom condensed in 40 mins.
            </Typography>
        </Box>
    )
}

export default Services1