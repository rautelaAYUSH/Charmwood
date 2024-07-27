import React from 'react'
import { Box, Typography, Grid, CardMedia, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { MdPhone } from 'react-icons/md';
import { useTheme } from '@mui/material/styles';
import Map from './map';
import "./underline.css"


const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Box padding="0 4%" sx={{height: '87vh'}}>
                <Typography variant="h1" gutterBottom component="div" className='heading-text'>
                    <div className="line"></div>
                    Contact Us
                </Typography>
                <Grid container spacing={2}>
                    <Grid item md={12} lg={5} xl={4} order={{ xs: 2, lg: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 4%' }}>
                        <Typography variant="h3" sx={{
                            fontSize: "1.4rem",
                            fontFamily: "Inter, serif",
                            textAlign: matches ? 'left' : 'center',
                        }}>
                            Lets get in touch and curate according to your needs
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            color: 'black',
                            backgroundColor: '#cfc9c9',
                            width: '100%',
                            margin: '12px auto',
                            height: '50px',
                            borderRadius: '21px',
                        }}>
                            <FontAwesomeIcon icon={faInstagram} color="red" height='100%' />
                            <FontAwesomeIcon icon={faFacebook} color="blue" height='100%' />
                            <MdPhone />
                            <Typography variant="p" sx={{
                                fontSize: "1rem",
                                fontFamily: "Inter, serif",
                                color: '#6D6666',
                            }}>
                                8755051014
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item md={12} lg={7} xl={8} order={{ xs: 1, lg: 1 }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Compressed/Group3.jpg"
                            alt="green iguana"
                            sx={{
                                borderRadius: '32px',
                                objectFit: "cover",
                                width: '100%',
                                height: '60vh',
                                padding: '2% 2%',
                            }}
                        />
                    </Grid>
                </Grid>

            </Box>

            <Box sx={{height: '100vh'}}>
                <Grid container spacing={2} sx={{ marginTop: '2%' }}>
                    <Grid item xs={12} sm={8} >
                        <Box padding="4rem 4rem 2rem 4rem">
                            <Map></Map>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4%' }}>
                        <Typography variant="h1" gutterBottom sx={{
                            textAlign: matches ? 'left' : 'center',
                        }}>
                            Meet Us
                        </Typography>
                        <Typography variant="h3" sx={{
                            fontSize: "1.4rem",
                            fontFamily: "Inter, serif",
                            textAlign: matches ? 'left' : 'center',
                        }}>
                            Lets get in touch and curate according to your needs
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Contact