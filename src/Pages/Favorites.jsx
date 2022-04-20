import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { BreadcrumbWrapper } from './Styles';
import Card from '../Components/Home/Card';
import { FavoritesWrapper } from './Styles';
import { Container } from 'react-bootstrap';

const Favorites = () => {
  const {t} = useTranslation('translation')
  const [openLoadingWindow, setOpenLoadingWindow] = useState(true);
  const {favorites} = useSelector(state => state);

  useEffect(() => {
    setOpenLoadingWindow(false);
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header/>
        <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
          <Container className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb pb-2">
                <li className="breadcrumb-item">
                  <Link to={'/'} >{t('breadcrumb.main')}</Link>
                  </li>
                <li className="breadcrumb-item active" aria-current="page">{t('favorites.title')}</li>
              </ol>
            </nav>
          </Container>
        </BreadcrumbWrapper>
        <FavoritesWrapper className="products" id="products">
          <Container className="container">
            <h2>{t('favorites.title')}</h2>
            <div className="row products-items">
            {
              favorites?.map((product, index) =>
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 products-item">
                  {
                    openLoadingWindow ? (
                      <div className="card card-custom">
                          <Skeleton sx={{height: 130}} animation='wave' variant='rectangular' />
                        <div className="card-body">
                          <Skeleton animation='wave' height={14}/>
                          <Skeleton animation='wave' height={48}/>
                          <Skeleton animation='wave' height={24}/>
                          <Skeleton animation='wave' height={80}/>
                        </div>
                       </div>
                    ) : ( <Card {...product}/> )
                  }
              </div>
              )
            }
            </div>
           </Container>
        </FavoritesWrapper>
      <Footer/>
    </>
  )
}

export default Favorites