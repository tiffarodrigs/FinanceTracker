import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const MyCard =({title,content, footer}) => {
  return (
    <Card sx={{ maxWidth: 250, minWidth: 250, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
        {content}
        </Typography>
      </CardContent>
      { 
      footer ? <CardActions>
      <Button size="small">{footer}</Button>
    </CardActions> : null }
      
    </Card>
  );
}

export default MyCard;