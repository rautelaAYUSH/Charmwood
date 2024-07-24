import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'


const Services2 = () => {
    return (
        <Box>
            <Typography variant="h1" sx={{
                fontSize: "2rem",
                fontFamily: "Inter, serif",
            }}>
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
                        <img src="Compressed/Exploration1.webp" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4%' }}>
                    <Typography variant="h3" sx={{
                        fontSize: "1.2rem",
                        fontFamily: "Inter, serif",
                    }}>
                        Discover a world of wonder: Immerse yourself in the heart of nature as you embark on an unforgettable horseback adventure. Our expertly guided trails offer breathtaking scenery, diverse terrain, and the perfect opportunity to connect with nature.
                        <br />
                        <br />
                        Experience the thrill of exploration: Whether you're a seasoned rider or a novice, our trails cater to all levels. Feel the wind in your hair as you traverse through lush forests, cross tranquil streams, and climb gentle hills.
                        <br />
                        <br />
                        Create lasting memories: Share unforgettable moments with friends and family as you explore the great outdoors. Our knowledgeable guides will ensure your safety and comfort while you enjoy the beauty of nature.
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Services2
