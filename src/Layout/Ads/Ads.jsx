import React from 'react'
import {useTranslation} from 'react-i18next'
import { AdsWrapper } from './AdsStyles'
import { Container } from 'react-bootstrap'

const Ads = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})
  return (
  <AdsWrapper>
    <Container>
      <div className="content flex">
        <div className="info">
          <a target="_blank" rel='noreferrer' href="https://osonapteka.uz/" className="partner-link">
            <img src="images/oson-apteka.png" alt="oson apteka" />
          </a>
          <h4 className="title">{t('our-main-partner')}</h4>
          <p className="description">
            {t('our-main-partner-description')}
          </p>
          <div className="link">
            <a href="https://play.google.com/store/apps/details?id=uz.oson.apteka&hl=en_US&gl=US" className="store">
              <img src="images/app-store.png" alt="app-store" />
            </a>
            <a href="https://apps.apple.com/us/app/oson-apteka-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA/id1543341946" className="store">
              <img src="images/google-play.png" alt="google-play" />
            </a>
          </div>
        </div>
        <div className="talk">
          <img src="images/talk.png" alt="talk" />
        </div>
        <img src="images/ads-photo.jpg" alt="ads section" />
      </div>
    </Container>
  </AdsWrapper>

  )
}

export default Ads