import React from 'react'
import { Box, Typography, Grid, useMediaQuery } from '@mui/material'
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { useTheme } from '@mui/material/styles';
import CommonCarousel from "../components/reusableComponents/commonCarousel.jsx";
import { exploration2 } from '../consts';


const Services2 = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <>
        <Box>
            <Typography variant="h1" style={{fontSize: '2rem', textAlign: 'center'}}>
                Exploration Trails
            </Typography>
            {/* <Typography variant="h3" sx={{
                fontSize: "1.4rem",
                fontFamily: "Inter, serif",
                color: '#908A8A',
                marginTop: '1.5rem',
            }}>
                Join us and experience the thrill and adventure and discover the beauty of nature, on horseback.
            </Typography> */}

            <Grid container spacing={2} sx={{ marginTop: '2%' }}>
                <Grid item xs={12} sm={5} >
                    <Box>
                        <img src="Compressed/Exploration1.jpg" alt="" 
                        // style={{height: '55vh', width: '100%'}}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5% 5%' }}>
                    <Typography variant="h3" sx={{
                        fontSize: "1.2rem",
                        fontFamily: "Inter, serif",
                        textAlign: matches ? 'left' : 'center',
                    }}>
                        Discover a world of wonder: Immerse yourself in the heart of nature as you embark on an unforgettable horseback adventure. Our expertly guided trails offer breathtaking scenery, diverse terrain, and the perfect opportunity to connect with nature.
                    </Typography>

                </Grid>
            </Grid>


        </Box>
        <CommonCarousel title="Trail Experience" images={exploration2} />
        </>

    )
}

export default Services2
