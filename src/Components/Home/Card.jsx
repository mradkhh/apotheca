import React from 'react'
import { CardWrapper } from './CardStyles'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket, addToFavorites } from '../../Redux/dispatch';
    // lodash
    // react-infinite-scroller
    // react-input-mask
    // jQuery in React
    // react-yandex-maps
    // tinymce

const Card = (drug) => {
  const  {id,  name, Image, Country_of_origin, slug } = drug;
  const [t] = useTranslation("translation", {keyPrefix: "drug"})
  const dispatch = useDispatch();
  const {basket, favorites} = useSelector(state => state);

  const isAddedBasket = basket.find((basket) => basket.id === id);
  const isAddedFavorites = favorites.find((favorite) => favorite.id === id);
  const handleBasketClick = () => {
    if(isAddedBasket) {
      const newBasket = basket.filter(drug => drug.id !== id);
      localStorage.setItem('basket',JSON.stringify(newBasket))
      dispatch(addToBasket(newBasket))
    } else {
      const newBasket = [...basket, {...drug, count: 1}];
      localStorage.setItem('basket',JSON.stringify(newBasket))
      dispatch(addToBasket(newBasket))
    }
  }

  const handleFavoritesClick = () => {
    if(isAddedFavorites) {
      const newFavorites = favorites.filter(drug => drug.id !== id);
      localStorage.setItem('favorites',JSON.stringify(newFavorites))
      dispatch(addToFavorites(newFavorites))
    } else {
      const newFavorites = [...favorites, {...drug}];
      localStorage.setItem('favorites',JSON.stringify(newFavorites))
      dispatch(addToFavorites(newFavorites))
    }
  }
  return (
      <CardWrapper>
        <div className="card card-custom">
          <div className="card-img">
            <div
            onClick={handleFavoritesClick}
            className="heart-icon">
            {/* <FavoriteIcon/> */}
            <svg
            style={{fill: (isAddedFavorites) ? "red" : "#F7F8FC"}}
            width="24" height="24" viewBox="0 0 16 15" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.9146 7.23221C1.19926 4.99888 2.03526 2.44621 4.37993 1.69088C5.61326 1.29288 6.9746 1.52755 7.99993 2.29888C8.96993 1.54888 10.3813 1.29555 11.6133 1.69088C13.9579 2.44621 14.7993 4.99888 14.0846 7.23221C12.9713 10.7722 7.99993 13.4989 7.99993 13.4989C7.99993 13.4989 3.06526 10.8135 1.9146 7.23221Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6667 3.9668C11.38 4.19746 11.884 4.83413 11.9447 5.58146" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
          <Link to={`/products/${slug}`}>
            <img className='main-img' src={Array.isArray(Image)?Image[0]?.image : ''} alt="product" />
          </Link>
          </div>

          <div className="card-body">
          <Link to={`/products/${slug}`}>
              <h6>{Country_of_origin?.name} -</h6>
              <h4>{name}</h4>
              <h4>от<strong> 15 000 сум</strong></h4>
          </Link>
           <button
            onClick={handleBasketClick}
            style={{background: (isAddedBasket) ? "#f7f8fc" : "#e93235"}}
            className="btn">
              <svg
                style={{display: isAddedBasket ? 'none' : 'inline', marginRight: '8px'}}
              width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0092 13.8334H4.44398C2.39974 13.8334 0.831475 13.095 1.27694 10.1232L1.79562 6.09575C2.07022 4.61292 3.01607 4.04541 3.84597 4.04541H10.6316C11.4737 4.04541 12.3647 4.65563 12.682 6.09575L13.2007 10.1232C13.579 12.7594 12.0534 13.8334 10.0092 13.8334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1007 3.89882C10.1007 2.30811 8.81117 1.01858 7.22045 1.01858V1.01858C6.45445 1.01533 5.71871 1.31735 5.17592 1.85786C4.63312 2.39836 4.328 3.13282 4.328 3.89882H4.328" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.19762 6.9013H9.16711" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.31048 6.9013H5.27997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <span style={{color: isAddedBasket ? '#6f818f' : '#fff'}}>{
                  isAddedBasket ? t('added') : t('add')
                }</span>
            </button>

          </div>
        </div>
      </CardWrapper>
  )
}

export default Card