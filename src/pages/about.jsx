import {React} from 'react'
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import ReactPlayer from 'react-player';
import { useTheme } from '@mui/material/styles';
import "./underline.css"

const About = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <div>
            <Box padding="2% 4%" sx={{minHeight: '87vh'}}>
                <Typography variant="h1" gutterBottom component="div" className='heading-text'>
                    <div className="line"></div>
                    Our Story 
                </Typography>
           
                <Grid container spacing={2} sx={{ marginTop: '2%' }}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4%' }} order={{ xs: 2, md: 1 }}>
                        <Typography variant="h3" sx={{
                            fontSize: "1.1rem",
                            fontFamily: "Inter, serif",
                            marginTop: "5%",
                            padding: matches ? "4%": '0',
                            textAlign: matches ? 'left' : 'center',
                        }}>
                            Charmwood Horse Riding Academy was born from the passion of our founder, Abhishek. It all began in Pune, where he first discovered the joy of horse riding. This passion took him across India, learning from the best and perfecting his skills.

                            As Abhishek's reputation grew, people began approaching him for lessons. When the demand became overwhelming, he decided to open Charmwood, a place where his love for horses and teaching could flourish. Join us and experience the magic of riding at Charmwood Horse Riding Academy.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} >
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <ReactPlayer
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                                width="80%"
                                // height="48vh"
                                // height="80vh"
                                controls={true}
                                light="Compressed/Academy2.webp"
                                   
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default About
