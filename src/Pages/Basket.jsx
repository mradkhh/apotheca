import React from 'react'
import {  useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { Container } from 'react-bootstrap'
import { BreadcrumbWrapper, BasketWrapper } from './Styles'
import BasketCard from '../Components/BasketCard'

 const Basket = () => {
  const { basket } = useSelector(state => state)

  return (
    <>
      <Header/>
      <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
        <div className="container">
          <nav  aria-label="breadcrumb">
            <ol className="breadcrumb pb-2">
              <li className="breadcrumb-item">
                <Link to={'/'}>Главная</Link>
                </li>
              <li className="breadcrumb-item active" aria-current="page">Корзина</li>
            </ol>
          </nav>
        </div>
      </BreadcrumbWrapper>

      <BasketWrapper>
        <Container>
          <h2 className="title mb-5">Корзина</h2>
          <div className="row">
            <div className="corsina-items col-lg-8 col-12">
              {
                basket.map((item, index) =>
              <BasketCard
              key={index}
              {...item}/>
                  )
              }
            </div>
            <div className="corsina__info col-12 col-lg-4">
            <div className="card corsina__info-card">
              <h3>Детали заказа</h3>
              <ol className="items">
                <li className="number item">
                  <h6>Количество (шт.)</h6>
                  <span>8</span>
                </li>
                <li className="product-price item">
                  <h6>Товары на сумму</h6>
                  <span>1 780 000 сум</span>
                </li>
                <li className="total-price">
                  <h6>Всего к оплате:</h6>
                  <span>
                    <strong>3 540 000 сум</strong>
                  </span>
                </li>
              </ol>
              <button className="btn">Заказать доставку</button>
            </div>
            </div>
          </div>

        </Container>
       </BasketWrapper>
      <Footer/>
    </>
  )
}

export default Basket