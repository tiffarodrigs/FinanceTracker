import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyCard = ({ title, content, footer, type }) => {
  const sx = { margin: 2 };
  if (type === 'long') {
    sx['maxWidth'] = 250;
    sx['minWidth'] = 250;
    sx['maxHeight'] = 400;
    sx['minHeight'] = 400;
  } else if (type === 'wide') {
    sx['maxWidth'] = 400;
    sx['minWidth'] = 400;
    sx['maxHeight'] = 450;
    sx['minHeight'] = 450;
  } else {
    sx['maxWidth'] = 150;
    sx['minWidth'] = 150;
    sx['maxHeight'] = 150;
    sx['minHeight'] = 150;
    sx['margin'] = 2;
  }
  return (
    <Card sx={sx}>
      <CardContent sx>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5' component='div'>
          {content}
        </Typography>
      </CardContent>
      {footer ? (
        <CardActions>
          <Button size='small'>{footer}</Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default MyCard;
