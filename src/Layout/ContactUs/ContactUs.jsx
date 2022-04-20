import React from 'react'
import {useTranslation} from 'react-i18next'
import { ContactUsWrapper } from './ContactUsStyles'
import { Container } from 'react-bootstrap'

const ContactUs = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'home'})

  return (
  <ContactUsWrapper>
    <Container>
      <div className="content flex">
        <div className="maps">
          <iframe style={{width:'100%', height:'100%', border: 0}} title='apotheca' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4112053252425!2d69.2069155149487!3d41.34341510668363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf129af47fd%3A0x33d997f4887c3ac3!2sSet'%20Aptek%20-%20Apotheca!5e0!3m2!1suz!2s!4v1644497518488!5m2!1suz!2s" width={550} height={590} allowFullScreen loading="lazy" />
        </div>
        <div className="info">
          <h4 className="title">{t('our-contacts')}</h4>
          <ul className="contact__link">
            <li className="phone">
              <img src="images/call.png" alt="call icon" />
              <a href="/" className="link">+998 71 691-48-37</a>
            </li>
            <li className="email">
              <img src="images/Message.png" alt="message icon" />
              <a href="/" className="link">info@apotheka.com</a>
            </li>
            <li className="telegram">
              <img src="images/Send.png" alt="telegram icon" />
              <a href="/" className="link">@apotheka_apteka</a>
            </li>
            <li className="time">
              <img src="images/Time Circle.png" alt="time icon" />
              <span>{t('work-time')}</span>
            </li>
            <li className="location">
              <img src="images/Location.png" alt="location icon" />
              <span>{t('address')}</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </ContactUsWrapper>
  )
}

export default ContactUs