import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { BreadcrumbWrapper } from './Styles'
import { CompanyWrapper, BranchWrapper } from './Styles'
import ContactUs from '../Layout/ContactUs/ContactUs'

const Company = () => {
  return (
    <>
    <Header/>
  <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
    <Container className="container">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb pb-2">
          <li className="breadcrumb-item">
            <Link to={'/'}>Главная</Link></li>
          <li className="breadcrumb-item active" aria-current="page">О компании</li>
        </ol>
      </nav>
    </Container>
  </BreadcrumbWrapper>
  <CompanyWrapper className="vacans company" id="company">
    <Container className="container">
      <h2>О компании</h2>
      <div className="content flex">
        <div className="info">
          <span>— О НАС</span>
          <h4>Apotheka — крупная сеть аптек премиальных препаратов для
            спортивного питания</h4>
          <div className="count flex">
            <div>
              <span>&gt; 32 000</span>
              <p>Товаров в базе</p>
            </div>
            <div>
              <span>&gt; 20</span>
              <p>Аптек в Ташкенте</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img className="img-1" src="../images/company/img-1.jpg" alt="company" />
          <img className="img-2" src="../images/company/img-2.jpg" alt="company" />
        </div>
      </div>
      <div className="info">
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти
          предложений в абзаце, что позволяет сделать текст более
          привлекательным и живым для визуально-слухового восприятия.
        </p>
        <p>
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
          русском языке наполнит любой макет непонятным смыслом и придаст
          неповторимый колорит советских времен.
        </p>
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти
          предложений в абзаце, что позволяет сделать текст более
          привлекательным и живым для визуально-слухового восприятия.
        </p>
      </div>
    </Container>
  </CompanyWrapper>
  <BranchWrapper className="branch" id="branch">
    <Container className="container">
      <div className="row">
        <div className="col img">
          <img className="bottom-img" src="/images/company/branch-1.png" alt="company" />
          <img className="top-img" src="/images/company/branch-2.png" alt="company" />
        </div>
        <div className="col info">
          <span>— ФИЛИАЛЫ</span>
          <h4>Apotheka — крупная сеть аптек премиальных препаратов для
            спортивного питания</h4>
          <button className="btn">
            <img src="/images/garbage.svg" alt="garbage icon" />
            <span>Посмотреть филиалы</span>
          </button>
        </div>
      </div>
    </Container>
  </BranchWrapper>
  <ContactUs/>
  <Footer/>
</>
  )
}

export default Company