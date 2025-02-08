import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import categoriesData from '../data/categories.json';

const Home = () => {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to ShopEase
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
          Discover our wide range of products
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categoriesData.categories.map(category => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <Card
                component={Link}
                to={`/category/${category.id}`}
                sx={{
                  textDecoration: 'none',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;