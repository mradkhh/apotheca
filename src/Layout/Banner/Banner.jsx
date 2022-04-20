import React from 'react'
import {useTranslation} from 'react-i18next'
import { BannerWrapper } from './BannerStyles'
import {Container} from 'react-bootstrap'

function Banner() {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})

  return (
  <BannerWrapper>
    <Container>
      <div className="content">
        <div className="card info card-custom" style={{backgroundImage: "url('images/banner.jpg')"}}>
          <h1 className="title">{t('start-today')}</h1>
          <button className="btn" type="button">{t('more-details')}</button>
        </div>
      </div>
    </Container>
  </BannerWrapper>

  )
}

export default Banner