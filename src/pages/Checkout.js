import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Grid,
  IconButton,
  Button,
  Box,
  Card,
  CardMedia,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, dispatch, cartTotals, formatPrice } = useCart();

  if (cart.length === 0) {
    return (
      <Container>
        <Box py={4} textAlign="center">
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              {cart.map(item => (
                <Box key={item.id} p={2}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="100"
                          image={item.image}
                          alt={item.name}
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <Grid item xs={12} sm={6}>
                          <Typography variant="h6">{item.name}</Typography>
                          <Typography color="primary">
                            {formatPrice(item.price)}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box display="flex" alignItems="center" justifyContent="flex-end">
                            <IconButton
                              onClick={() =>
                                dispatch({
                                  type: 'UPDATE_QUANTITY',
                                  payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                                })
                              }
                            >
                              <Remove />
                            </IconButton>
                            <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                            <IconButton
                              onClick={() =>
                                dispatch({
                                  type: 'UPDATE_QUANTITY',
                                  payload: { id: item.id, quantity: item.quantity + 1 }
                                })
                              }
                            >
                              <Add />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                            >
                              <Delete />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>Subtotal</Typography>
                <Typography>{formatPrice(cartTotals.subtotal)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>Shipping</Typography>
                <Typography>
                  {cartTotals.shipping === 0 ? 'Free' : formatPrice(cartTotals.shipping)}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" color="primary">
                  {formatPrice(cartTotals.total)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Checkout;