import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../Redux/dispatch';

const BasketCard = (item) => {
  const {id, name, title, Image, count} = item
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state);

  const handleDelete = () => {
    const newBasket = basket.filter((item) => item.id !== id)
    dispatch(addToBasket(newBasket))
  }

  const handleCountIncrement = () => {
    const newBasket = basket.map((basket) => {
      if(basket.id === id) {
        const newProduct = { ...basket, count: basket.count +1}
        return newProduct;
      } else {
        return basket;
      }
    })
    localStorage.setItem('basket',JSON.stringify(newBasket))
    dispatch(addToBasket(newBasket))
  }
  const handleCountDecrement = () => {
    const newBasket = basket.map((basket) => {
      if(basket.id === id) {
        const newProduct = { ...basket, count: basket.count <= 1 ? 1 : basket.count - 1}
        return newProduct;
      } else {
        return basket;
      }
    })
    localStorage.setItem('basket',JSON.stringify(newBasket))
    dispatch(addToBasket(newBasket))
  }


  return (
    <div className="row">
        <div className="card card-custom">
          <img src={Image[0]?.image} alt="corsina imgage" />
          <div className="card-body">
            <h4>{name}</h4>
            <h5>{title}</h5>
            <div className="price">
              <h4 className="sum">15000 сум</h4>
              <div className="flex">
                <img
                onClick={handleCountDecrement}
                className="minus" src="/images/corsina/minus.svg" alt="icon" />
                <h4 className="number">{count} шт</h4>
                <img
                onClick={handleCountIncrement}
                className="plus" src="/images/corsina/plus.svg" alt="icon" />
                <div
                className="img">
                  <img
                  onClick={handleDelete}
                  src="/images/corsina/corsina-icon.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BasketCard