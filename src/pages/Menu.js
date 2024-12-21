import React from 'react';
import { MenuList } from '../data/data';  // Make sure the path is correct
import Layout from '../components/Layout';
import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: 2, padding: 2 }}>
        {/* Mapping over MenuList and rendering each item */}
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ minHeight: '400px', objectFit: 'cover' }}
                image={menu.image}
                alt={menu.name}
              />
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">{menu.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  {menu.description}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  ₹{menu.price}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
