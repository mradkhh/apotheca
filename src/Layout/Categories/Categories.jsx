import React, {useState, useEffect} from 'react'
import Request from '../../Services/Request'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import { CategoriesWrapper } from './CategoriesStyles'
import { Container } from 'react-bootstrap'

const Categories = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    Request()
      .get(`/category/?lan=uz`)
      .then((res) => {
        setCategories(res?.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
  <CategoriesWrapper>
    <Container>
      <div className="content">
        <h2>{t('popular-categories')}</h2>
        <div className="category__items flex">
          {
            categories.map((item, index) =>
            <Link to={`/category}`}>
              <div key={index} className="item">
                <img src={item?.image} alt="category" />
                <span>{item?.name}</span>
              </div>
            </Link>
            )
          }
        </div>
      </div>
    </Container>
  </CategoriesWrapper>
  )
}

export default Categories