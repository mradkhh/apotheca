import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import Request from '../../Services/Request'
import { DropdownWrapper } from './DropdownStyles'

const DropdownMenu = () => {
  const [t] = useTranslation('translation', {keyPrefix: "header"})
  const [show, setShow] = useState(false)
  const [categories, setCategories] = useState([])
  const handleClick = () => {
    setShow(true)
  }
  useEffect(() => {
    Request()
      .get(`/category/?lan=uz`)
      .then((res) => {
        setCategories(res?.data)
      })
      .catch(err => console.log(err))
  }, [show])
  return (
    <DropdownWrapper>
        <button
        onClick={handleClick}
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <img src="/images/hamburger.svg" alt="hamburger" />
        <span className="d-xs-none">{t('categories')}</span>
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {
            categories?.map((item, index) => (
              <Link key={index} className="dropdown-item" to={'preparat'}>{item.name}</Link>
            ))
          }
      </div>
    </DropdownWrapper>
  )
}

export default DropdownMenu