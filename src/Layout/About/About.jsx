import React from 'react'
import { useTranslation } from 'react-i18next'
import { AboutWrapper } from './AboutStyles'


const About = () => {
  const {t} = useTranslation('translation', {keyPrefix: "home"})

  return (
  <AboutWrapper>
    <div className="container">
      <div className="about__items row">
        <div className="item col-lg-4">
          <img src="images/about-1.jpg" alt="about" />
          <h6 className="title">{t('large-assortment')}</h6>
          <p>{t('large-assortment-description')}</p>
        </div>
        <div className="item col-lg-4">
          <img src="images/about-2.jpg" alt="about" />
          <h6 className="title">{t('experts-at-pharmacies')}</h6>
          <p>{t('large-assortment-description')}</p>
        </div>
        <div className="item col-lg-4">
          <img src="images/about-3.jpg" alt="about" />
          <h6 className="title">{t('reservation-and-delivery')}</h6>
          <p>{t('large-assortment-description')}</p>
        </div>
      </div>
    </div>
  </AboutWrapper>

  )
}

export default About