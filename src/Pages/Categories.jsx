import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Request from '../Services/Request'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { CategoriesWrapper, BreadcrumbWrapper } from '../Pages/Styles'
import { Container } from 'react-bootstrap'

const Category = () => {
  const {t} = useTranslation('translation' )
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
    <>
    <Header/>
     <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
        <Container className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pb-2">
              <li className="breadcrumb-item">
                <a href="/">{t('breadcrumb.main')}</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">{t('breadcrumb.categories')}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">{t('breadcrumb.medical')}
              </li>
            </ol>
          </nav>
        </Container>
      </BreadcrumbWrapper>
      <CategoriesWrapper>
        <Container className="container">
          <div className="row filter-row d-lg-none mx-sm-2">
            <div className="filter">
              <div className="filter-head">
                <h4>{t('categories.title')}</h4>
                <button type="button" className="restart-btn btn">{t('categories.reset')}</button>
              </div>
              <hr />
              <div className="row filter-items">
                <div className="col-12 col-sm-6 filter-category">
                  <h3>{t('categories.filter')}</h3>
                  {
                    categories.map((item, index) =>
                    <label key={index} htmlFor="check-01">
                      <input type="checkbox" name="check-1" id="check-01" />
                      {item?.name}
                    </label>
                    )
                  }
                  <span>{t('categories.load-more')}</span>
                </div>
                <div className="col-12 col-sm-6 filter-brand">
                  <h3>{t('brand')}</h3>
                  <label htmlFor="check-011">
                    <input type="checkbox" name="check-1" id="check-011" />
                    PlaReceta
                  </label>
                  <label htmlFor="check-012">
                    <input type="checkbox" name="check-2" id="check-012" />
                    Bb Laboratories
                  </label>
                  <label htmlFor="check-013">
                    <input type="checkbox" name="check-3" id="check-013" />
                    GHC Placental Cosmetic
                  </label>
                  <label htmlFor="check-014">
                    <input type="checkbox" name="check-4" id="check-014" />
                    Лаеннек
                  </label>
                  <label htmlFor="check-015">
                    <input type="checkbox" name="check-5" id="check-015" />
                    LNC - Cosmetic
                  </label>
                  <label htmlFor="check-016">
                    <input type="checkbox" name="check-6" id="check-016" />
                    Эвалар
                  </label>
                  <span>Показать еще +</span>
                </div>
              </div>
              <div className="btn-out">
                <button className="filter-result btn">
                  <img src="../images/garbage.svg" alt="bag" />
                  <span>{t('view-result')}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row row-top">
            <h2>{t('breadcrumb.medical')}</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block filter-col">
              <div className="filter">
                <div className="filter-head">
                  <h4>{t('categories.filter')}</h4>
                  <button type="button" className="restart-btn btn">{t('categories.reset')}</button>
                </div>
                <hr />
                <div className="filter-category">
                  <h3>{t('categories.title')}</h3>
                  <label htmlFor="check-01">
                    <input type="checkbox" name="check-1" id="check-01" />
                    Лекарственные препараты
                  </label>
                  <label htmlFor="check-02">
                    <input type="checkbox" name="check-2" id="check-02" />
                    Витамины и БАДы
                  </label>
                  <label htmlFor="check-03">
                    <input type="checkbox" name="check-3" id="check-03" />
                    Фитопрепараты
                  </label>
                  <label htmlFor="check-04">
                    <input type="checkbox" name="check-4" id="check-04" />
                    Медицинские изделия
                  </label>
                  <label htmlFor="check-05">
                    <input type="checkbox" name="check-5" id="check-05" />
                    Мама и малыш
                  </label>
                  <label htmlFor="check-06">
                    <input type="checkbox" name="check-6" id="check-06" />
                    Гигиена, красота и уход
                  </label>
                  <span>{t('categories.load-more')}</span>
                </div>
                <div className="filter-brand">
                  <h3>{t('categories.brand')}</h3>
                  <label htmlFor="check-11">
                    <input type="checkbox" name="check-1" id="check-11" />
                    PlaReceta
                  </label>
                  <label htmlFor="check-12">
                    <input type="checkbox" name="check-2" id="check-12" />
                    Bb Laboratories
                  </label>
                  <label htmlFor="check-13">
                    <input type="checkbox" name="check-3" id="check-13" />
                    GHC Placental Cosmetic
                  </label>
                  <label htmlFor="check-14">
                    <input type="checkbox" name="check-4" id="check-14" />
                    Лаеннек
                  </label>
                  <label htmlFor="check-15">
                    <input type="checkbox" name="check-5" id="check-15" />
                    LNC - Cosmetic
                  </label>
                  <label htmlFor="check-16">
                    <input type="checkbox" name="check-6" id="check-16" />
                    Эвалар
                  </label>
                  <span>{t('categories.load-more')}</span>
                </div>
                <div className="btn-out">
                  <button className="filter-result btn">
                    <img src="../images/garbage.svg" alt="bag  " />
                    <span>{t('categories.view-result')}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 product-col">
              <div className="row product-items">
                <div className="col-12 col-sm-6 col-md-4 products-item">
                  <div className="card card-custom">
                    <div className="card-img">
                      <div className="icon">
                        <img src="../images/Heart.png" alt="heart icon" />
                      </div>
                      <img src="../images/prod-1.jpg" alt="product" />
                    </div>
                    <div className="card-body">
                      <h6>Эвалар</h6>
                      <h4>Доритрицин таблетки для рассасывания</h4>
                      <h4>от <strong>5 600 сум</strong></h4>
                      <button className="btn">
                        <img src="../images/garbage.svg" alt="icon" />
                        <span>{t('utils.add')}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/">1</a>
                      </li>
                    <li className="page-item active">
                      <a className="page-link active-page-link" href="/">2 </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">3</a>
                      </li>
                    <li className="page-item">
                      <a className="page-link" href="/">4</a>
                      </li>
                    <li className="page-item">
                      <a className="page-link" href="/">5</a>
                      </li>
                    <li className="page-item">
                      <a className="page-link" href="/">...</a>
                      </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        <img src="../images/arrow.svg" alt="arrow icon" />
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Pagination */}
              </div>
            </div>
          </div>
        </Container>
      </CategoriesWrapper>
    <Footer/>
    </>
  )
}

export default Category