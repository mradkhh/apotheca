import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Layout/Categories/Categories';
import Basket from './Pages/Basket';
import Company from './Pages/Company';
import Drug from './Pages/Drug';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import Products from './Pages/Products';
import { addToBasket, addToFavorites } from './Redux/dispatch';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const initialBasket = JSON.parse(localStorage.getItem('basket'));
    const initialFavorites = JSON.parse(localStorage.getItem('favorites'));
    const basket = Array.isArray(initialBasket) ? initialBasket : [];
    const favorites = Array.isArray(initialFavorites) ? initialFavorites : [];
    dispatch(addToBasket(basket));
    dispatch(addToFavorites(favorites));
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}></Route>
        <Route path='company' element={<Company />} />
        <Route path='basket' element={<Basket />} />
        <Route path='categories' element={<Categories />} />
        <Route path='drug' element={<Drug />} />
        <Route path='products' element={<Products />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='products/:productSlug' element={<Drug />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;