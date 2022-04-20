import styled from 'styled-components'

export const RecomendationWrapper = styled.section`
  .content {
    overflow-x: scroll;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .card-custom, .card {
    max-width: 275px;
    min-width: calc(25% + 110px);
    width: 100%;
    position: relative;
    margin-inline: 15px;
    margin-block-start: 24px;
    margin-block-end: 35px;
    border-radius: 16px;
    padding: 1rem;
    border: none;
    transition: box-shadow 150ms ease-in;

    .heart-icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 5px;
      right: 5px;
      box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.06);
      width: 40px;
      border-radius: 50%;
      color: #6f818f;
      height: 40px;
      padding: 10px;
      cursor: pointer;
    }

    .icon-active {
      height: 16px;
      width: 16px;
      box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.06);
      border-radius: 50%;
    }

    &:hover {
      box-shadow: 0px 16px 16px 8px rgba(115, 141, 163, 0.1);
    }

    .card-img {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

       img {
        max-width: 130px;
        width: 100%;
        height: 130px;
        object-fit: contain;
        background-color: #fff;
      }
    }

    .card-body {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      h6 {
        margin-top: 16px !important;
        font-weight: 400;
        font-size: 0.8rem;
        color: #6f818f;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        overflow: hidden;
      }

      h4 {
        overflow: hidden;
        width: 100%;
        font-style: 500;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
        color: #23272b;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
      }

      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #23272b;
        // margin-bottom: 100px;
      }

      .btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 12px;
        padding-inline: auto;
        margin-top: 10px;
        background: #e93235;

        > img {
          width: 16px;
          height: 16px;
        }

        span {
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          line-height: 19px;
        }
      }

      .btn-active {
        background-color: #f7f8fc;
        color: #6f818f;
      }
    }
  }
`