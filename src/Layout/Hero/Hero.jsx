import React from 'react'
import {useTranslation} from 'react-i18next'
import {Container} from 'react-bootstrap'
import HeroWrapper from './HeroStyles'


const Hero = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})

  return (
    <HeroWrapper className="main-section">
      <Container>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <div className="row flex">
                  <div className="card-info col">
                    <div className="card-body">
                      <h1 className="title">{t("hero-title")}</h1>
                        <button className="btn">
                        {t('more')}
                      </button>
                    </div>
                  </div>
                  <div className="card-img col">
                    <img src="images/main-photo.jpg" alt="main images" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <div className="row flex">
                  <div className="card-info col">
                    <div className="card-body">
                      <h1 className="title">{t("hero-title")}</h1>
                        <button className="btn">
                        {t('more')}
                      </button>
                    </div>
                  </div>
                  <div className="card-img col">
                    <img src="images/main-photo.jpg" alt="main images" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <div className="row flex">
                  <div className="card-info col">
                    <div className="card-body">
                      <h1 className="title">{t("hero-title")}</h1>
                      <button className="btn">
                      {t('more')}
                      </button>
                    </div>
                  </div>
                  <div className="card-img col">
                    <img src="images/main-photo.jpg" alt="main images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <img src="images/arrow-l.png" alt="arrow" />
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <img src="images/arrow-r.png" alt="arrow" />
          </a>
        </div>
      </Container>
  </HeroWrapper>
  )
}

export default Hero