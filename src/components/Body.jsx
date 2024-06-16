// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Grid } from '@mui/material';

// export default function Body() {
//     return (
//         <Card sx={{backgroundColor:'red'}}>
//             <Grid container xs={12} md={6}>
//                 <Grid item xs={12} md={6}>
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             Lizard
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                             species, ranging across all continents except Antarctica.
//                         </Typography>
//                     </CardContent>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <CardMedia
//                         component="img"
//                         height="140"
//                         image="Rider.png"
//                         alt="green iguana"
//                     />
//                 </Grid>
//             </Grid>
//             {/* <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions> */}
//         </Card>
//     );
// }
// import {Grid, Card, CardContent, Typography} from '@mui/material';
// import { Typography, Container } from '@mui/material';
// function Body() {
//     return(
//         <>
//             <Container fixed sx={{backgroundColor: 'red'}}>
//                 <Typography>
//                     MUI responsive design
//                 </Typography>
//             </Container>
//         </>
//     );
// }

// export default Body;

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Container, Box } from '@mui/material';

export default function Body() {
    return (
        <Container sx={{backgroundColor:'white'}}>
            <Box display="flex" justifyContent="center" >
                <Card sx={{ maxWidth:920, boxShadow:"none"}}>
                    <Grid container>
                        <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center" textAlign="center" >
                            <CardContent>
                                <Typography color="black" 
                                sx={{fontSize:{
                                    xs:'1.7rem',
                                    sm:'2.5rem',
                                    md:'3rem',
                                    lg:'4rem',
                                }}} >
                                        Escape the ordinary, 
                                </Typography>
                                <Typography color="black" 
                                sx={{fontSize:{
                                    xs:'1.7rem',
                                    sm:'2.5rem',
                                    md:'3rem',
                                    lg:'4rem',
                                }}} >
                                        ride extraordinary. 
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="rider_op.png"
                                alt="green iguana"
                                sx={{height:{xs:'full'}}}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Container>
    );
}
