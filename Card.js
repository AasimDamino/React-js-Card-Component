import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from '../images/Fort.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavIcon from './icons/svg/Navigation.svg';



export default function RecipeReviewCard() {

  

  return (
    <Card sx={{ maxWidth: 345 , borderRadius: 8 }}>
      
      <Grid 
        sx={{
          marginTop:2,
          marginLeft:3,
          marginRight:3
         
        }}
      >
      <CardMedia 
         component="img"
         height="250"
         image={Image}
         alt=""
         sx={{
            borderRadius:4
         }}
    
      />
         
       
      
      

      <CardContent  >
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 1, mx: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs>
          <Typography variant="body2" color="text.secondary">
          <strong>Trip to</strong> <href>#</href>
        </Typography>
        
          </Grid>
          <Grid item>
            <Typography  variant="body2" color="text.secondary" component="div">
              <strong>$450</strong>
            </Typography>
          </Grid>
        </Grid>
       
      </Box>
     
      </Box>
      
        
     </CardContent>
     
      <CardActions disableSpacing>
        <IconButton aria-label="Navigation">
        <img  
            
              src={NavIcon} 
              alt="Navigation"
              margin="100px"
              width="25px"
              
            />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          <strong>10 Days Trip</strong> <href>#</href>
        </Typography>
       
      </CardActions>
      </Grid>
     
    </Card>
  );
}