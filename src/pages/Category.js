import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const Category = () => {
  const { id } = useParams();
  const [showFreeDeliveryOnly, setShowFreeDeliveryOnly] = useState(false);

  const category = categoriesData.categories.find(
    cat => cat.id === parseInt(id)
  );

  const categoryProducts = productsData.products.filter(
    product => product.categoryId === parseInt(id)
  );

  const filteredProducts = showFreeDeliveryOnly
    ? categoryProducts.filter(product => product.freeDelivery)
    : categoryProducts;

  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          {category?.name}
        </Typography>
        <Paper sx={{ p: 2, mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showFreeDeliveryOnly}
                onChange={e => setShowFreeDeliveryOnly(e.target.checked)}
              />
            }
            label="Show Free Delivery Only"
          />
        </Paper>
        <Grid container spacing={3}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Category;