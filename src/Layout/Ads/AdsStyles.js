import styled from 'styled-components'

export const AdsWrapper = styled.section`
  margin: 40px auto;
  position: relative;

.content {
  width: 100%;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 32px;

  .info {
    position: absolute;
    /* top: 74px; */
    left: 200px;

    > a {
      cursor: pointer;
    }

    > h4 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-style: 500;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #143650;
    }

    > p {
      max-width: 500px;
      width: 100%;
      margin-bottom: 32px;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 150%;
      color: #738da3;
    }

    .link a {
      margin-right: 10px;
    }
  }

  .talk {
    position: absolute;
    top: 55%;
    left: 45%;
  }
}
`