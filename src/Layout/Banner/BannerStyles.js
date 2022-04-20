import styled from 'styled-components'

export const BannerWrapper = styled.section`
  margin: 60px auto;

.content {
  width: 100%;
  border-radius: 32px;
  background: #f7f8fc;
}

.card-custom {
  background: linear-gradient(
        87deg,
        rgb(247, 248, 252) 43%,
        rgba(255, 255, 255, 0) 65%
      )
      right center no-repeat;
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 32px;
  padding: calc(3vw + 20px);
  border: none;

  > h1 {
    max-width: 400px;
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
    line-height: 150%;
    color: #23272b;

    span {
      color: #e93235;
    }
  }

  > .btn {
    max-width: max-content;
    width: 100%;
    padding: 12px 40px;
    margin-top: 30px;
    background: #e93235;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
}
`