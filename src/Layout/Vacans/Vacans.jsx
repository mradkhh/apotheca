import React from 'react'
import {useTranslation} from 'react-i18next'
import { VacansWrapper } from './VacansStyles'
import { Container } from 'react-bootstrap'


const Vacans = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})

  return (
  <VacansWrapper>
    <Container>
      <div className="content flex">
        <div className="info">
          <span>{t('vacancies')}</span>
          <h4>{t('vacancies-description')}</h4>
          <div className="count flex">
            <div>
              <span>&gt; 100</span>
              <p>{t('available-vacancies')}</p>
            </div>
            <div>
              <span>&gt; 20</span>
              <p>{t('pharmacies-at-tashkent')}</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img className="img-1" src="images/vacans-1.png" alt="vacans" />
          <img className="img-2" src="images/vacans-2.png" alt="vacans" />
        </div>
      </div>
    </Container>
  </VacansWrapper>
  )
}

export default Vacans