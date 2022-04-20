import {Skeleton, Stack} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import { addToBasket, addToFavorites } from '../Redux/dispatch';
import Request from '../Services/Request';
import { BreadcrumbWrapper, DiscriptionWrapper, DrugWrapper } from './Styles';

const Drug = () => {
  const [clickBtn, setClickBtn] = useState(false)
  const {t} = useTranslation('translation' )
  const [product, setProduct] = useState({
    Image: [],
    id: ''
  });
  const id = product?.id;
  const {productSlug} = useParams();
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const {basket, favorites} = useSelector(state => state);


  const isAddedBasket = basket.find((basket) => basket.id === id);
  const isAddedFavorites = favorites.find((favorite) => favorite.id === id);
  const handleBasketClick = () => {
    if(isAddedBasket) {
      const newBasket = basket.filter(product => product.id !== id);
      localStorage.setItem('basket',JSON.stringify(newBasket))
      dispatch(addToBasket(newBasket))
    } else {
      const newBasket = [...basket, {...product, count: 1}];
      localStorage.setItem('basket',JSON.stringify(newBasket))
      dispatch(addToBasket(newBasket))
    }
    setClickBtn(!clickBtn)
  }

  const handleFavoritesClick = () => {
    if(isAddedFavorites) {
      const newFavorites = favorites.filter(drug => drug.id !== id);
      localStorage.setItem('favorites',JSON.stringify(newFavorites))
      dispatch(addToFavorites(newFavorites))
    } else {
      const newFavorites = [...favorites, {...product}];
      localStorage.setItem('favorites',JSON.stringify(newFavorites))
      dispatch(addToFavorites(newFavorites))
    }
  }

  const getProduct = () => {
    Request()
      .get(`/drug/${productSlug}/?lan=uz`)
      .then(res => {
        setProduct(res?.data);
        setLoading(false)
      })
      .catch(err => console.log(err))
      window.scrollTo(0, 0)
  }
  useEffect(() => {
    getProduct();
  }, [productSlug]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recently'));
    const recently = Array.isArray(data)?data:[];
    const isExist = recently.find(product => product.id === id);
    if(!isExist && id) {
      const newRecently = [id, ...recently.slice(0, 6)];
      localStorage.setItem('recently', JSON.stringify(newRecently));
    }
  }, [id])


  return (
    <>
    <Header/>
    <BreadcrumbWrapper className="breadcrumb-section" style={{paddingTop: 234}}>
      <Container className="container">
      { loading ? (
            <Skeleton animation="wave" height={18} sx={{ width: '60%', borderRadius: '4px' }} variant='rectangular' />
          ) : ( <nav aria-label="breadcrumb">
                  <ol className="breadcrumb pb-2">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>{t('breadcrumb.main')}</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to={"/categorys"}>{t('breadcrumb.categories')}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{product?.name}</li>
                  </ol>
                </nav>
          )}
      </Container>
    </BreadcrumbWrapper>
    <DrugWrapper>
      <Container>
        <div className="row wrap info">
          <div className="col-12 col-lg-4 info-img">
            {
              loading ? (
                <Skeleton animation='wave' height={374} max-width={374} sx={{borderRadius: '8px', width: '100%', height: '100%'}}  />
              ) : ( <img src={product?.Image[0]?.image} alt="product" /> )
            }
          </div>
          <div className="col-12 col-md-10 col-lg-6 info-title">
            {
              loading ? (
                <Skeleton animation='wave' height={96} max-width={484} sx={{borderRadius: '4px', width: '100%'}} variant="rectangular"  />
              ) : ( <h2 className="product-name">{product?.name}</h2> )
            }
            {
              loading ? (
                <Stack spacing={1}>
                  <Skeleton animation='wave' height={22} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%', marginTop: '8px'}} variant="rectangular"  />
                  <Skeleton animation='wave' height={38} sx={{borderRadius: '4px',maxWidth: '184px', width: '100%'}} variant="rectangular"  />
                  <Stack spacing={1}>
                    <Skeleton animation='wave' height={20} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%'}} variant="rectangular"  />
                    <Skeleton animation='wave' height={20} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%'}} variant="rectangular"  />
                    <Skeleton animation='wave' height={20} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%'}} variant="rectangular"  />
                    <Skeleton animation='wave' height={20} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%'}} variant="rectangular"  />
                    <Skeleton animation='wave' height={20} sx={{borderRadius: '4px',maxWidth: '384px', width: '100%'}} variant="rectangular"  />
                  </Stack>
                    <Skeleton animation='wave' height={43} sx={{borderRadius: '4px',maxWidth: '200px', width: '100%'}} variant="rectangular"  />
              </Stack>
                ) : (
                <>
                  <h6>{product?.Active_substance}</h6>
                  <h2 className="price">34 500 {t('drug.sum')}</h2>
                  <div className="disc">
                    <div className="item">
                      <h6>{t('drug.manufacturer')}</h6>
                      <h4>{product?.Manufacturer?.name}</h4>
                    </div>
                    <div className="item">
                      <h6>{t('drug.country')}</h6>
                      <h4>{product?.Country_of_origin?.name}</h4>
                    </div>
                    <div className="item">
                      <h6>{t('drug.release-form')}</h6>
                      <h4>{product?.Release_form?.name}</h4>
                    </div>
                    <div className="item">
                      <h6>{t('drug.active-substance')}</h6>
                      <h4>{product?.Active_substance}</h4>
                    </div>
                    <div className="item">
                      <h6>{t('drug.pieces')}</h6>
                      <h4>{product?.Amount_in_package}</h4>
                    </div>
                    <div className="item">
                      <h6>{t('drug.pharmachologic-effect')}</h6>
                      <h4>{product?.pharmacotherapeutic_group?.name}</h4>
                    </div>
                  </div>
                  <button
                  style={{background: (clickBtn) ? "#f7f8fc" : "#e93235"}}
                  onClick={handleBasketClick}
                  className="btn">
                    <img
                      style={{display: clickBtn ? 'none' : 'inline', marginRight: '8px'}}
                    src="/images/garbage.svg" alt="icon" />
                    <span
                      style={{color: clickBtn ? '#6f818f' : '#fff'}}
                    >{
                      clickBtn ? t('drug.added') : t('drug.add')
                      }</span>
                  </button>
                </>
              )
            }
          </div>
          <div className="col-12 col-md-2 col-lg-2 more">
          {
              loading ? (
                <>
                    <Skeleton height={48} width={48} sx={{marginRight: '10px', marginLeft: 'auto'}}  variant='circular' />
                    <Skeleton height={48} width={48} variant='circular' />
                </>
              ) : (
                <>
                  <div
                  onClick={handleFavoritesClick}
                  className="like">
                  <svg
                  style={{fill: isAddedFavorites ? 'red' : '#6f818f'}}
                  width="32" height="32" viewBox="0 0 16 15" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9146 7.23221C1.19926 4.99888 2.03526 2.44621 4.37993 1.69088C5.61326 1.29288 6.9746 1.52755 7.99993 2.29888C8.96993 1.54888 10.3813 1.29555 11.6133 1.69088C13.9579 2.44621 14.7993 4.99888 14.0846 7.23221C12.9713 10.7722 7.99993 13.4989 7.99993 13.4989C7.99993 13.4989 3.06526 10.8135 1.9146 7.23221Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.6667 3.9668C11.38 4.19746 11.884 4.83413 11.9447 5.58146" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div className="share">
                    <img src="/images/product/share-icon.png" alt="share icon"/>
                  </div>
                </>
              )
            }
            </div>
          <div className="col" />
        </div>
        <div className="row" />
      </Container>
    </DrugWrapper>
    <DiscriptionWrapper className="discription" id="discription">
      <div className="container">
      {
        loading ? (
            <Stack spacing={4}>
              <Stack spacing={1}>
            <Skeleton animation="wave" height={32} width={200}/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '940px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '840px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '500px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '740px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '240px', width: '100%'}} variant='rectangular'/>
          </Stack>
          <Stack spacing={1}>
            <Skeleton animation="wave" height={32} width={200}/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '940px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '840px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '500px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '740px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '240px', width: '100%'}} variant='rectangular'/>
          </Stack>
          <Stack spacing={1}>
            <Skeleton animation="wave" height={32} width={200}/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '940px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '840px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '500px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '740px', width: '100%'}} variant='rectangular'/>
            <Skeleton animation="wave" height={14} sx={{maxWidth: '240px', width: '100%'}} variant='rectangular'/>
          </Stack>
            </Stack>

        ) : (
          <>
          <div className="row">
          <div className="col-12 col-lg-10">
            <h3>Описание препарата</h3>
            <p>1 таблетка содержит: Активное вещество: Левофлоксацина
              гемигидрата, эквивалентного левофлоксацину – 500 мг;
              Вспомогательные вещества: лактоза, кукурузный крахмал,
              микрокристаллическая целлюлоза, метилпарабен натрия, магния
              стеарат, тальк, аэросил, натрия крахмал гликолят Таблетки,
              покрытые оболочкой по 500 мг. В блистере 5 шт.(по 500 мг) в пачке
              картонной 1 блистер.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10">
            <h3>Фармакологическое действие</h3>
            <p>Авифлокс — синтетический антибактериальный препарат широкого
              спектра действия из группы фторхинолонов, содержащий в качестве
              активного вещества левофлоксацин — левовращающий изомер
              офлоксацина. Левофлоксацин блокирует ДНК-гиразу (топоизомеразу II)
              и топоизомеразу IV, нарушает суперспирализацию и сшивку разрывов
              ДНК, ингибирует синтез ДНК, вызывает глубокие морфологические
              изменения в цитоплазме, клеточной стенке и мембранах микробных
              клеток. Левофлоксацин активен в отношении большинства штаммов
              микроорганизмов как в условиях in vitro так и in vivo.
              Чувствительные к препарату микроорганизмы: Аэробные
              грамположительные микроорганизмы; Аэробные грамотрицательные
              микроорганизмы; Анаэробные микроорганизмы; Другие микроорганизмы:
              Bartonella spp, Chlamydia pneumoniae, Chlamydia psittaci,
              Chlamydia trachomatis, Legionella pneumophila, Legionella spp,
              Mycobacterium spp, Mycobacterium leprae, Mycobacterium
              tuberculosis, Mycoplasma hominis, Mycoplasma pneumoniae, Ricketsia
              spp, Ureaplasma urealyticum. В связи с особенностями механизма
              действия левофлоксацина обычно не наблюдается перекрестной
              резистентности между левофлоксацином и другими противомикробными
              средствами.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10">
            <h3>Побочное действие</h3>
            <p>- Гиперчувствительность (в т.ч. к другим хинолонам); - эпилепсия;
              - поражения сухожилий при приеме фторхинолонов в анамнезе; -
              детский и подростковый возраст до 18 лет (в связи с
              незавершенностью роста скелета, т.к. нельзя полностью исключить
              риск поражения хрящевых точек роста); - беременность (нельзя
              полностью исключить риск поражения хрящевых точек роста у плода);
              - период лактации (нельзя полностью исключить риск поражения
              хрящевых точек роста костей у ребенка)</p>
          </div>
        </div>
          </>
        )
      }
      </div>
    </DiscriptionWrapper>
    <Footer/>
    </>
  )
}

export default Drug