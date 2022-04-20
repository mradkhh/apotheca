import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import Request from '../../Services/Request'
import DropdownMenu from './DropdownMenu'
import { HeaderWrapper } from './HeaderStyles'
import Lang from './Lang'
import { Option } from './SearchInput'
import { customStyles } from './SearchInputStyles'
import $ from 'jquery'



const Header = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'header'})
  const {basket, favorites} = useSelector(state => state);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate()
  const [searchName, setSearchName] = useState('');
  const [value] = useState({
    isDisabled: true,
    value: '',
    label: ''
  })

  const onInputChange = (searchName, {action}) => {
    if(action !== 'menu-close' && action !== 'on-blur') {
      setSearchName(searchName);
      Request()
      .get(`/drug/search/?search=${searchName}&lan=uz`)
      .then(res => {
        const data=res?.data?.data;
        console.log("Data: ", data)
        const options = Array.isArray(data)?data.map(({name, slug, Image, Country_of_origin, Manufacturer}) => {
          const image = Array.isArray(Image)?Image[0]?Image[0]?.image: '':''
          return {
            isDisabled: false,
            value: slug,
            label: name,
            image: image,
            country: Country_of_origin?.name,
            manufacturer: Manufacturer?.name
          }
        }):[];
        setOptions(options)
      })
      .catch(() => setOptions([]))
    }
  }

  const onChange = ({value}) => {
    setOptions([]);
    navigate(`/products/${value}`);
    setSearchName('')
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <HeaderWrapper>
        <Container>
        <div className="header__top">
               <div className="dropdown d-md-none">
                <button
                  className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/images/hamburger.svg" alt="hamburger" />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to={"/"}>Главная</Link>
                  <Link className="dropdown-item" to={"/company"}>О компании</Link>
                  <Link className="dropdown-item" to={"/partner"}>Филиалы</Link>
                  <Link className="dropdown-item" to={"/contact"}>Контакты</Link>
                </div>
              </div>
            <div className="logo">
              <Link to={"/"}>
                <img className="logo-self" src='/images/logo-self.svg' alt='img' />
              </Link>
              <Link to={"/"}>
                <img className="logo-img" src='/images/logo.png' alt="site logo" width={177} height={52} />
              </Link>
            </div>
            <div className="nav">
              <ul className="nav__items flex">
                <li className="item">
                  <Link to={'/products'} className="contact">Products</Link>
                </li>
              </ul>
            </div>
            <a href="tel:+998939339937" className="d-md-none">
              <img src="/images/call.png" alt="calling" />
            </a>
            <a href="tel:+998716914837" className="joinUs d-none d-md-inline-block">
              <span className="call">+998 71 691-48-37</span>
              <button type="button" className="joinUs-btn btn">{t('call-me')}</button>
            </a>
          <Lang/>
          </div>
          </Container>
          <div className="bottom-header">
          <Container>
          <div className="header__bottom">
            <DropdownMenu/>
            <Select
            filterOption={() => options}
            options={options}
            components={{
              NoOptionsMessage: () => null,
              Option: Option
            }}
            onInputChange={onInputChange}
            onChange={onChange}
            inputValue={searchName}
            isSearchable={true}
            onBlur={() => setOptions([])}
            value={value}
            styles={customStyles}
          />
            <div className="likes flex">
              <div className="favorites">
                <Link to={"/favorites"}>
                  <span
                  style={{display: favorites.length ? 'flex' : 'none'}}
                  className="number">{favorites.length}</span>
                  <img src="/images/heart.svg" alt="heart icon" />
                  <span className="title">{t('favorites')}</span>
                </Link>
              </div>
              <div className="corsina">
                <Link to={"/basket"}>
                  <span
                    style={{display: basket.length ? 'flex' : 'none'}}
                  className="number">{basket.length}</span>
                  <img src="/images/bag.svg" alt="bag icon" />
                  <span className="title"> {t('basket')} </span>
                </Link>
              </div>
            </div>
          </div>
          </Container>
          </div>

    </HeaderWrapper>
  )
}

export default Header