import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FooterWrapper } from './FooterStyles'

const Footer = () => {
  const [t] = useTranslation('translation', {keyPrefix: "footer"})

  return (
    <FooterWrapper>
        <Container className="container">
          <div className="content flex">
            <div className="footer__socialy-link">
              <Link className="footer-logo" to={"/"}>
                <img src="/images/footer-logo.png" alt="logo" />
              </Link>
              <div className="socialy">
                <a  target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/apotheca.uz'>
                  <img src="/images/instagram.svg" alt="instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://t.me/apothecauz'>
                  <img src="/images/telegram.svg" alt="telegram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/apothecauzb'>
                  <img className="facebook-icon" src="/images/facebook.svg" alt="facebook" />
                </a>
              </div>
            </div>
            <div className="footer__about">
              <h4 className="title">{t('about')}</h4>
              <ul className="items">
                <li className="item">
                  <Link to={'/company'}>{t('site-map')}</Link>
                </li>
                <li className="item">
                  <Link to={'/partner'}>{t('client')}</Link>
                </li>
                <li className="item">
                  <Link to={'/contact'}>{t('contacts')}</Link>
                </li>
                <li className="item">
                  <Link to={'/aferta'}>{t('oferta')}</Link>
                </li>
                <li className="item">
                  <Link to={'/vacans'}>{t('vacans')}</Link>
                </li>
              </ul>
            </div>
            <div className="footer__category">
              <h4 className="title">{t('categories')}</h4>
              <ul className="items">
                <li className="item">
                  <Link to={'/sport'}>{t('sport')}</Link>
                </li>
                <li className="item">
                  <Link to={'/for'}>{t('weight-loss')}</Link>
                </li>
                <li className="item">
                  <Link to={'/virus'}>{t('antivirus')}</Link>
                </li>
                <li className="item">
                  <Link to={'/sport'}>{t('sport')}</Link>
                </li>
                <li className="item">
                  <Link to={'/for'}>{t('weight-loss')}</Link>
                </li>
              </ul>
            </div>
            <div className="footer__contact">
              <h4 className="title">{t('contacts')}</h4>
              <ul className="items">
                <li className="item">
                  <a href="tel:+998716914837">+998 71 691-48-37</a>
                </li>
                <li className="item">
                  info@apotheka.com
                </li>
                <li className="item">{t('work-time')}</li>
                <li className="item">{t('address')}</li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footer-bottom" style={{textAlign: 'center'}}>
          <hr />
          <span className="copyright">{t('all-rights-reserved')}</span>
        </div>
    </FooterWrapper>
  )
}

export default Footer