import styled from 'styled-components';

export const ContactUsWrapper = styled.section`
  background: #f5f6f6;
  overflow: hidden;

  .content {
    display: flex;
    justify-content: start;
    align-items: center;

    .maps {
      width: 100%;
      iframe {
        z-index: 12;
      }
    }
  }
  .info {
    padding: 40px;

    > h4 {
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      color: #23272b;
      margin-bottom: 32px;
    }

    li {
      margin-bottom: 24px;
    }

    li > {
      a,
      span {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #23272b;
      }

      img {
        font-size: 24px;
        color: #143650;
        margin-right: 16px;
        padding: 15px;
        background-color: #fff;
        border-radius: 16px;
      }
    }
  }
`;
