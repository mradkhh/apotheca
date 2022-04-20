import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  padding: 60px 0;
  background: #f7f8fc;

  .container {
    > h2 {
      margin-bottom: 37px;
    }
  }

  .swiper {
    .swiper-slide {
      min-width: 355px;
      //   margin-right: 20px;
    }
    .card {
      border: none;
      border-radius: 16px;
      padding: 24px;

      .card-head {
        display: flex;
        justify-content: start;
        align-items: center;

        img {
          margin-right: 12px;
        }

        h5 {
          color: #23272b;
          font-weight: 500;
          font-size: 1.125rem;
          margin-bottom: 4px;
        }

        h6 {
          color: #6f818f;
          font-weight: 500;
          font-size: 12px;
        }
      }

      .card-body {
        padding: 7px;
      }
    }
  }
`