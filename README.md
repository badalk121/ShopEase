# ShopEase - React E-commerce Application

## Project Overview

ShopEase is a modern e-commerce application built with React, showcasing a fully functional shopping experience with dynamic product categories, cart management, and a sleek user interface. This project was developed as part of the final assessment for the React Training Program at Internshala.

## Features

- Dynamic product categorization
- Real-time cart management
- Persistent shopping cart using localStorage
- Responsive design for all devices
- Product filtering capabilities
- Indian Rupee (₹) currency support
- Free delivery options
- Product ratings and reviews

## Technical Stack

- React 18.2.0
- React Router DOM 6.14.2
- Material-UI (MUI) for styling
- Context API for state management
- Local Storage for data persistence

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation & Setup

1. Clone the repository
   git clone https://github.com/badalk121/shopease.git
2. Navigate to the project directory
   cd shopease
3. Install dependencies
   npm install
4. Start the development server
   npm start
5. Open your browser and visit http://localhost:3000

## Project Structure

shopease/
|-- public/
| |-- index.html
| |-- manifest.json
|-- src/
| |-- components/
| | |-- Header.js
| | |-- ProductCard.js
| | |-- CartItem.js
| | |-- CurrencySymbol.js
| |-- context/
| | |-- CartContext.js
| |-- data/
| | |-- categories.json
| | |-- products.json
| |-- pages/
| | |-- Home.js
| | |-- Category.js
| | |-- Checkout.js
| |-- utils/
| | |-- currency.js
| |-- theme.js
| |-- App.js
| |-- index.js
|-- package.json

## Key Features Implemented

1. Home Page

   - Category listing
   - Dynamic navigation
   - Responsive grid layout

2. Category Pages

   - Product filtering
   - Free delivery filter
   - Product cards with ratings

3. Shopping Cart

   - Add/Remove items
   - Quantity adjustment
   - Price calculations
   - Persistent storage

4. Checkout Page

   - Order summary
   - Delivery options
   - Total calculation

## Technical Implementation

- Used Context API for global state management
- Implemented custom hooks for cart operations
- Utilized Material-UI components for consistent styling
- Implemented responsive design principles
- Used React Router for navigation
- Implemented local storage for cart persistence

## Problem Statement

This project was developed as a solution to the following requirements:

- Create a multi-page e-commerce application
- Implement dynamic routing for categories
- Manage shopping cart state
- Implement filters for products
- Persist cart data
- Create responsive and user-friendly interface

## UI Features

- Modern and clean design
- Responsive layout
- Interactive product cards
- Dynamic cart badge
- Smooth animations
- User-friendly navigation

## State Management

- Context API for global state
- Local storage for persistence
- Reducer pattern for cart operations

## Responsive Design

- Mobile-first approach
- Tablet-friendly layout
- Desktop optimization

## Future Enhancements

- User authentication
- Payment gateway integration
- Order history
- Wishlist functionality
- Search functionality
- Product reviews and ratings

## Author

Badal Kumar
GitHub: @badalk121
LinkedIn: https://www.linkedin.com/in/badal-k-4a498a1a1/

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- Internshala Training Platform
- StackOverFlow
- React Development Community

Note: This project was created as part of the Internshala React Training Program's final assessment.
