/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography, Box } from '@mui/material';
import { PrimaryButton } from './reusableComponents/primaryButton';

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: '#F6F2E2' }} style={{height: '100vh', display: "flex"}}>
      <Grid container sx={{padding: '20px', alignItems: "center"}}>
        <Grid item xs={12} md={6} sx={{padding: '20px', height: "100%"}}>
          <Grid container sx={{padding: '20px', alignItems: "center"}}>
            <Grid item xs={12} md={6}>
              <img src="image (25).jpg" alt="Horse Riding 1" style={{ width: '90%', fill: 'cover', borderRadius: '10px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container direction="column">
                <Grid item xs={12} md={6} sx={{padding: '10px'}}>
                  <img src="kid3.jpg" alt="Horse Riding 2" style={{ width: '85%', height: '40vh', borderRadius: '10px', objectFit: "cover" }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{padding: '10px'}}>
                  <img src="kid1.jpg" alt="Horse Riding 3" style={{ width: '85%', height: '40vh', borderRadius: '10px', objectFit: "cover"  }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{padding: '20px', textAlign: "center"}}>
          <Typography variant="h1" gutterBottom sx={{fontWeight: 700}}>
            About Us
          </Typography>
          <Typography variant="h5" sx={{marginTop: "2rem", fontSize: "18px", fontFamily: "Inter, sans-serif"}}>
            Charmwood Horse Riding Academy was born from the passion of our founder, Abhishek. It all began in Pune, where he first discovered the joy of horse riding. This passion took him across India, learning from the best and perfecting his skills.
          </Typography>
          <Typography variant="h5" sx={{marginTop: "2rem", fontSize: "18px", fontFamily: "Inter, sans-serif"}} >
            As Abhishek's reputation grew, people began approaching him for lessons. When the demand became overwhelming, he decided to open Charmwood, a place where his love for horses and teaching could flourish. Join us and experience the magic of riding at Charmwood Horse Riding Academy.
          </Typography>
          <PrimaryButton sx={{marginTop: "2rem"}}>
            View more
          </PrimaryButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
