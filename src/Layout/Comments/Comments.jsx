import React from 'react';
import { useTranslation } from 'react-i18next';
import { CommentsWrapper } from './CommentsStyles';
import SwiperSlider from '../../Components/Swiper/SwiperSlider';

const Comments = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})

  return (
  <CommentsWrapper className="client" id="client">
    <div className="container">
      <h2 className="title">{t('our-partners-feedback')}</h2>
      <div className="content">
        <SwiperSlider/>
      </div>
    </div>
  </CommentsWrapper>
  )
}

export default Comments