import styled from 'styled-components'

export const CategoriesWrapper = styled.section`
  margin: 60px auto;


  .content {

      > h2 {
          margin-bottom: 40px;
      }
  }


  .category__items {
    overflow-x: scroll;
    flex-wrap: nowrap;
    height: 300px;
    display: flex;
  justify-content: start;
  align-items: center;

  .item {
      width: 180px;
      margin-right: 24px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          padding: 15px;
          background: #F7F8FC;
      }

      span {
          margin-top: 16px;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 140%;
      }
  }
  }

`