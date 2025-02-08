import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Chip,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch, formatPrice } = useCart();

  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          {formatPrice(product.price)}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={product.rating} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({product.rating})
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
        {product.freeDelivery && (
          <Chip
            icon={<LocalShippingIcon />}
            label="Free Delivery"
            color="success"
            size="small"
            sx={{ mb: 2 }}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;