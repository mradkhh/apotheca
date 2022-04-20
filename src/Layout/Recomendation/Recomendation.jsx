import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import { Card } from 'react-bootstrap'
import Request from '../../Services/Request'
import { Container } from 'react-bootstrap'
import { RecomendationWrapper } from './RecomendationStyles'

const Recomendation = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})
  const [recommends, setRecommends] = useState([])
  useEffect(() => {
    const recently = JSON.parse(localStorage.getItem('recently'));
    if(Array.isArray(recently) && recently?.length) {
      const ids =  recently.reduce((join, currentValue) => {
        return join + `ids[]=${currentValue}&`
      }, ``)
      Request()
        .get(`/drug/?${ids}lan=uz`)
        .then((res) => {
          const results = Array.isArray(res?.data) ? res?.data : []
          setRecommends(results)
        })
    }
  }, [])

    return recommends?.length ? <RecomendationWrapper>
    <Container>
      <h2>{t('recently-watched')}</h2>
      <div className="content flex">
      {
        recommends?.map((item, index) => <Card key={index} {...item}/>)
      }
      </div>
    </Container>
  </RecomendationWrapper> : null
}

export default Recomendation