import { React, useState } from 'react'
import { Box, Typography, Grid, Link } from "@mui/material";
import './underline.css'
import Services1 from './services1';
import Services2 from './services2';

const Services = () => {
    const [activeLink, setActiveLink] = useState("link1")

    const handleLinkClick = (link) => {
        setActiveLink(link);
        console.log(activeLink)
    };

    const activeStyle = {
        color: '#A02321',
        textDecoration: 'none',
        fontFamily: "Inter, serif",
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'pointer',
        },
    }

    const inactiveStyle = {
        color: 'grey',
        textDecoration: 'none',
        fontFamily: "Inter, serif",
        fontWeight: '500',
        '&:hover': {
          cursor: 'pointer'
        },
    }

    return (
        <Box padding="4rem 4rem 4rem 4rem" sx={{minHeight: '87vh'}}>
            <Typography variant="h1" gutterBottom component='div' className='heading-text' sx={{ marginBottom: '23px', fontSize: '2.8rem' }}>
                <div className="line"></div>
                Services
            </Typography>
            <Grid container spacing={2} sx={{ alignItems: 'flex-start', fontSize: '1.7rem'}}>
                <Grid item md={2}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <Link to="/link1"
                            onClick={() => handleLinkClick('link1')}
                            sx={activeLink === 'link1' ? activeStyle : inactiveStyle}>Riding Lessons</Link>

                        <Link to="/link2"
                            onClick={() => handleLinkClick('link2')}
                            sx={activeLink === 'link2' ? activeStyle : inactiveStyle}>Exploration Trails</Link>

                        {/* <Link to="/link3"
                            onClick={() => handleLinkClick('link3')}
                            sx={activeLink === 'link3' ? activeStyle : inactiveStyle}>Hore Sales and Purchases</Link>

                        <Link to="/link4"
                            onClick={() => handleLinkClick('link4')}
                            sx={activeLink === 'link4' ? activeStyle : inactiveStyle}>Customization</Link> */}

                    </Box>
                </Grid>

                <Grid item md={10} sx={{padding: '0 4%'}}>
                    {activeLink === 'link1' && <Services1></Services1>}
                    {activeLink === 'link2' && <Services2></Services2>}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Services
