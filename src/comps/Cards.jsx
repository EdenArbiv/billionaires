import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import About from './About';



export default function Cards({all}) {
  
  const [check, setcheck] = useState(false)
const [data, setdata] = useState([])

 if(check){
  return <About data={data} setcheck={setcheck}/>
 }

         return (
             <div className='cards'>
           {
               all.map(per => <Card key={per.person.name} sx={{ maxWidth: 300, marginBottom:5}} >
                <CardActionArea>
                  <CardMedia
          
                    component="img"
                    height="200"
                    image={per.person.squareImage}
                    alt="image"
                  />
                  <CardContent>
                    <Typography id={per.person.name} gutterBottom variant="h5" component="div" onClick={async (e)=>{
                      setcheck(true)
                      let finded = all.find((per)=> per.person.name == e.target.id)
                      setdata(finded)
                      }}>
                  
                    {per.person.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {per.source}
                    <br/>
                    {per.abouts}
                    <br/>
                    Click To See More
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
  
                </CardActions>
               
              </Card>
              )
             
           }
        </div>
    )
    


   
}
