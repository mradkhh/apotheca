import React, { useState } from 'react'
import {useTranslation} from 'react-i18next'
import { LangWrapper } from './LangStyles'

const Lang = () => {
  const {i18n} = useTranslation()
  const [show, setShow] = useState(false)
  const [lang, setLang] = useState('Uzbek')

  const handleClickUz = () => {
    i18n.changeLanguage('uz')
    setLang('Uzbek')
    setShow(false)
  }
  const handleClickRu = () => {
    i18n.changeLanguage('ru')
    setLang('Russian')
    setShow(false)
  }
  return (
    <LangWrapper>
        <button
        onClick={() => setShow(!show)}
        className='lang__btn'>{lang}</button>
        <div
        style={{display: show ? 'block' : 'none'}}
        className="pop-up">
          <button onClick={handleClickRu}>Russian</button>
          <button onClick={handleClickUz}>Uzbek</button>
        </div>
    </LangWrapper>
  )
}

export default Lang