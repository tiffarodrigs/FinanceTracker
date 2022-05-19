import React from 'react';
import { styled } from '@mui/material/styles';
import {
  ListItem,
  ListItemText,
  Divider,
  Typography,
  CardContent,
  Card,
  Box,
  List,
  listItemSecondaryActionClasses,
  Button,
} from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function OutlinedCard({ header, summary, data = [], showMore }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontFamily: '"Roboto Condensed"' }}
            color='text.secondary'
            gutterBottom
          >
            {header}
          </Typography>
          <Typography
            variant='h5'
            component='div'
            sx={{ fontFamily: 'Eczar', fontSize: 24, fontWeight: 500 }}
          >
            {summary}
          </Typography>
          <Divider variant='middle' />
          <List>
            {data.map(({ label, summary, value, key }) => (
              <ListItem
                key={key}
                sx={{ borderLeft: '2px red solid' }}
                secondaryAction={
                  <Typography>
                    <Item sx={{ fontFamily: 'Eczar', fontSize: '18px' }}>
                      $ {value.toFixed(2)}
                    </Item>
                  </Typography>
                }
              >
                <ListItemText
                  primary={
                    <Item
                      sx={{ fontFamily: 'Roboto Condensed', fontSize: '15px' }}
                    >
                      {label}
                    </Item>
                  }
                  secondary={summary}
                />
              </ListItem>
            ))}
          </List>
          <Divider></Divider>
        {showMore}
        </CardContent>
      </Card>
    </Box>
  );
}
