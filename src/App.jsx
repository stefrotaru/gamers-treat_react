import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

import AllGames from "./pages/shop/AllGames";
import PCGames from "./pages/shop/PCGames";
import XboxGames from "./pages/shop/XboxGames";
import PSGames from "./pages/shop/PSGames";
import NintendoGames from "./pages/shop/NintendoGames";

import Wishlist from "./pages/wishlist/Wishlist";

import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";

import Login from "./pages/account/Login";
import Register from "./pages/account/Register";

// layouts
import RootLayout from "./layouts/RootLayout";
import ShopLayout from "./layouts/ShopLayout";
import CartLayout from "./layouts/CartLayout";
import AccountLayout from "./layouts/AccountLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route path="all" element={<AllGames />} />
        <Route path="pc" element={<PCGames />} />
        <Route path="xbox" element={<XboxGames />} />
        <Route path="playstation" element={<PSGames />} />
        <Route path="nintendo" element={<NintendoGames />} />
      </Route>

      <Route path="wishlist" element={<Wishlist />} />

      <Route path="cart" element={<CartLayout />}>
        <Route path="" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="account" element={<AccountLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="search_results" element={<SearchResults />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
