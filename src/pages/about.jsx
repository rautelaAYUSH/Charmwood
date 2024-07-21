import {React} from 'react'
import { Box, Typography, Grid } from "@mui/material";
import ReactPlayer from 'react-player';
import "./underline.css"

const About = () => {
    return (
        <div>
            <Box padding="2% 4%">
                <Typography variant="h1" gutterBottom component="div" className='heading-text'>
                    <div className="line"></div>
                    Our Story 
                </Typography>
            </ Box >

            <Box padding="2% 4%">
                <Grid container spacing={2} sx={{ marginTop: '2%' }}>
                    <Grid item xs={12} sm={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4%' }}>
                        <Typography variant="h3" sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Inter, serif",
                        }}>
                            Charmwood Horse Riding Academy was born from the passion of our founder, Abhishek. It all began in Pune, where he first discovered the joy of horse riding. This passion took him across India, learning from the best and perfecting his skills.

                            As Abhishek's reputation grew, people began approaching him for lessons. When the demand became overwhelming, he decided to open Charmwood, a place where his love for horses and teaching could flourish. Join us and experience the magic of riding at Charmwood Horse Riding Academy.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={7} >
                        <Box>
                            <ReactPlayer
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                                width="100%"
                                height="48vh"
                                controls={true}
                                light="kid1.jpg"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default About
