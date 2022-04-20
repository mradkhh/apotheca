import styled from 'styled-components'

const SearchItem = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 10px;
cursor: pointer;
height: 80px;
padding: 10px;
outline: none;

&:hover {
    background-color: #f7f8fc;
  }


.item-img {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

}
.item-info {

  > h6 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }


}
`

export const Option = ({ innerProps, innerRef, isFocused, data }) => {
  return <SearchItem ref={innerRef} {...innerProps}>
    <div className="item-img">
      <img src={data.image} alt="grug" />
    </div>
    <div className="item-info">
      <h6 className="title">{data.label}</h6>
      <div style={{display: 'flex', gap: '10px'}}>
        <span>{data.manufacturer}</span>
        <span>-{data.country}</span>
      </div>
    </div>
  </SearchItem>
}
