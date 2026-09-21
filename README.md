# UzShop

An online shop built with React, Redux Toolkit and Firebase. I made it to practice building a full frontend: routing, global state for the cart, and real authentication with Firebase.

## What it does

- Home page with trending products, best sales, new arrivals and a countdown offer
- Shop page with category filter, price sorting and search
- Product page with description, reviews and related products
- Cart with total quantity and subtotal (Redux)
- Sign up and login with Firebase Auth (with optional profile photo in Firebase Storage)
- Checkout page is protected, you need to be logged in to open it

## Built with

- React 18 (Create React App)
- Redux Toolkit + React Redux
- React Router v6
- Firebase (Auth, Firestore, Storage)
- Reactstrap + Bootstrap 5
- Framer Motion
- React Toastify
- Remix Icon

## How to run

1. Clone the repo and install packages

```bash
git clone https://github.com/IkboljonMe/uzshop-ecommerce.git
cd uzshop-ecommerce
npm install
```

2. Create a project in [Firebase console](https://console.firebase.google.com/), turn on **Email/Password** sign in, and create a Firestore database and Storage.

3. Copy `.env.example` to `.env` and fill it with your Firebase web app config

```bash
cp .env.example .env
```

4. Start the app

```bash
npm start
```

It opens on http://localhost:3000

To make a production build run `npm run build`, the files will be in the `build` folder.

## Project structure

```
src/
  assets/        images and product data
  components/    Header, Footer, Layout and UI parts
  custom-hooks/  useAuth hook
  pages/         Home, Shop, ProductDetails, Cart, Checkout, Login, Signup
  redux/         store and cart slice
  routers/       routes and protected route
```

## TODO

- [ ] Login with Google and GitHub
- [ ] Forgot password
- [ ] Save cart in localStorage
- [ ] Real order placing on checkout

---

Made by [IkboljonMe](https://github.com/IkboljonMe)
