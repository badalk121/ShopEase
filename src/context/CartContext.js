import React, { createContext, useReducer, useEffect } from 'react';
import { formatPrice } from '../utils/currency';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        const newState = [...state];
        newState[existingItemIndex] = {
          ...newState[existingItemIndex],
          quantity: newState[existingItemIndex].quantity + 1
        };
        return newState;
      }
      
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const cartTotals = {
    itemCount: cart.reduce((total, item) => total + item.quantity, 0),
    subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    shipping: cart.length > 0 ? (cart.every(item => item.freeDelivery) ? 0 : 99) : 0,
  };

  cartTotals.total = cartTotals.subtotal + cartTotals.shipping;

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        cartTotals,
        formatPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};