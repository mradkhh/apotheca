import { Pagination, Stack, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Request from '../Services/Request';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { BreadcrumbWrapper, ProductsWrapper } from './Styles';
import Card from '../Components/Home/Card'
import { Container } from 'react-bootstrap';


const Products = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'breadcrumb'})
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);

  const [openPage, setOpenPage] = React.useState(false);
  const [openLoadingWindow, setOpenLoadingWindow] = React.useState(false);

  const handleToggle = () => {
    setOpenPage(!openPage);
  };

  useEffect(() => {
    setOpenLoadingWindow(true);
    Request().get(`/drug/?lan=ru&page=${page}&per_page=12`).then(res => {
      setProducts(res?.data.results)
      setOpenLoadingWindow(false);
    })
    .catch(err => console.log(err))
    window.scrollTo(0, 0)
  }, [page])

  return (

    <>
      <Header/>
        <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
          <Container className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb pb-2">
                <li className="breadcrumb-item">
                  <Link to={'/'} >{t('main')}</Link>
                  </li>
                <li className="breadcrumb-item active" aria-current="page">{t('all-product')}</li>
              </ol>
            </nav>
          </Container>
        </BreadcrumbWrapper>
        <ProductsWrapper className="products" id="products">
          <Container className="container">
            <h2>{t('all-product')}</h2>
            <div className="row products-items">
            {
              products?.map((product, index) =>
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
           <Stack spacing={2}>
              <Pagination
              defaultPage={page}
              hidePrevButton={(page === 1) ? true : false}
              hideNextButton={(page === 316) ? true : false}
              onChange={(e, page) => setPage(page)}
              onClick={handleToggle}
              count={316}
              variant="outlined"
              shape="rounded" />
            </Stack>
           </Container>
        </ProductsWrapper>
      <Footer/>
    </>
  )
}

export default Products