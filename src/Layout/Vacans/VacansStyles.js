import styled from 'styled-components';

export const VacansWrapper = styled.section`
  margin: 100px auto;
  display: flex;
  justify-content: start;
  align-items: center;

  .content {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .info {
    z-index: 123;
    padding: 20px 0;
    > span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 5px;
      color: #6f818f;
      margin-bottom: 8px;
    }

    > h4 {
      font-weight: 400;
      font-size: 2.25rem;
      line-height: 160%;
      color: #23272b;
      margin-bottom: 32px;
    }

    .count {
      justify-content: start;

      > div {
        margin-right: 52px;
      }

      span {
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 160%;
        color: #e93235;
      }

      p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 160%;
        color: #23272b;
      }
    }
  }

  .img {
    position: relative;

    .img-1 {
      position: absolute;
      top: 30%;
      left: -30%;
    }
  }
`;
