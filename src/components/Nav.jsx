// import { AppBar, Toolbar , IconButton, Typography, Box , Button, Menu, MenuList, MenuItem} from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import {useState, MouseEvent} from 'react ';

// const pages=['Home','Our Story','Services','Horses','FAQ','Contact Us'];

// function Nav() {
//     const [nav,setNav] = useState<null | HTMLElement>(null);
//     const openNav = (event:MouseEvent<HTMLElement>)=>{
//         setNav(event.currentTarget);
//     };
//     const closeNav = () => {
//         setNav(null);
//     };

//     return(
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton sx={{display:{xs:'none', md:'flex' }}}>
//                         <img src="charmwood_logo.jpg" className="size-20 rounded-full "/>
//                     </IconButton>
//                     <Typography sx={{flexGrow:1, display:{xs:'none', md:'flex' }}}>Charmwood horseriding</Typography>
//                     <Box sx={{display:{xs:'none', md:'flex' }}}>       
//                         {/* <Button color='inherit'>Home</Button>
//                         <Button color='inherit'>Our Story</Button>
//                         <Button color='inherit'>Services</Button>
//                         <Button color='inherit'>Horses</Button>
//                         <Button color='inherit'>FAQ</Button>
//                         <Button color='inherit'>Contact US</Button> */}
//                         {pages.map((page)=>(
//                             <Button color='inherit'>{page}</Button>
//                         ))}
//                     </Box>
//                     <Box sx={{display:{xs:'flex', md:'none' }}}>
//                         <IconButton color='inherit' size='large' onClick={openNav}>
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu open={Boolean(Nav)} onClose={closeNav} sx={{display:{xs:'flex', md:'none' }}}>
//                             {/* <Menulist>
//                                 <MenuItem>Home</MenuItem>
//                                 <MenuItem>Our Story</MenuItem>
//                                 <MenuItem>Services</MenuItem>
//                                 <MenuItem>Horses</MenuItem>
//                                 <MenuItem>FAQ</MenuItem>
//                                 <MenuItem>Contact US</MenuItem>
//                             </Menulist> */}
//                             {pages.map((page)=>(
//                                 <MenuItem>{page}</MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <IconButton sx={{display:{xs:'flex', md:'none' }}}>
//                         <img src="charmwood_logo.jpg" className="size-20 rounded-full "/>
//                     </IconButton>
//                     <Typography sx={{flexGrow:1, display:{xs:'flex', md:'none' }}}>Charmwood horseriding</Typography>
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// }

// export default Nav;


import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Our Story', 'Services', 'Horses', 'FAQ', 'Contact Us'];

function Nav() {
    const [nav, setNav] = useState(null);

    const openNav = (event) => {
        setNav(event.currentTarget);
    };

    const closeNav = () => {
        setNav(null);
    };

    return (
        <>
            <AppBar position="static" sx={{backgroundColor:'white', boxShadow:'none'}}>
                <Toolbar>
                    <IconButton sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src="charmwood_logo.jpg" alt="Charmwood Logo" className="size-20 rounded-full" />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color:'black', fontWeight:700, fontSize:'1.5rem' }}>Charm Wood</Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' },color:'black' , fontWeight:700, fontSize:'1.5rem'}}>
                        {pages.map((page) => (
                            <Button key={page} color="inherit">{page}</Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, color:'black', fontWeight:700, fontSize:'1.5rem'}}>
                        <IconButton color="inherit" size="large" onClick={openNav}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={nav}
                            open={Boolean(nav)}
                            onClose={closeNav}
                            sx={{ display: { xs: 'block', md: 'none' }, color:'black', fontWeight:700, fontSize:'1.5rem' }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={closeNav}>{page}</MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <img src="charmwood_logo.jpg" alt="Charmwood Logo" className="size-20 rounded-full" />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color:'black' , fontWeight:700,  fontSize:'1.5rem'}}>Charm Wood</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav;
