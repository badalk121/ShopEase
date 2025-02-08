import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartTotals } = useCart();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          edge="start"
        >
          <HomeIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            ml: 2,
          }}
        >
          ShopEase
        </Typography>
        <Box>
          <IconButton
            component={Link}
            to="/checkout"
            color="inherit"
          >
            <Badge badgeContent={cartTotals.itemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;