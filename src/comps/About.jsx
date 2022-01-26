import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function About({data, setcheck}) {
  console.log(data)

 
    return (
      
        <div className='about'>
        <Card sx={{ maxWidth: 550 }}>
      <CardMedia
        component="img"
        height="250"
        image={data.person.squareImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          EstWorthPrev: {Math.floor(data.estWorthPrev).toLocaleString('en-EN')} B$<br/>
          Work in: {data.source}<br/>
          Live in: {data.city}, {data.countryOfCitizenship}<br/>
          Bios: {data.bios}
        </Typography>
      </CardContent>
      <CardActions>
      
        <button onClick={() => setcheck(false)}>← Back</button>
      </CardActions>
    </Card>
        </div>
    ) 
  

  

   
}
