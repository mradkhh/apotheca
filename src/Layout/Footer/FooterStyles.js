import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #061b34;
  color: #fff;

  ol,
  ul {
    padding-left: 0;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-items: start;
  }

  .footer__socialy-link {
    align-self: start;

    .socialy {
      margin-top: 30px;
    }

    > img {
      margin-bottom: 40px;
    }

    .facebook-icon {
      padding: 10px 6px 8px 0px;
    }

    .footer-logo {
      padding: 0;
      background: none;
      margin-bottom: 20px;
    }

    a {
      padding: 10px 9px 13px 14px;
      font-size: 1.5rem;
      margin-right: 20px;
      background-color: #d9dbe11a;
      color: #fff;
      border-radius: 50%;
    }
  }

  hr {
    width: 100%;
    opacity: 0.2;
    border: 1px solid #6f818f;
    margin-bottom: 40px;
  }

  .content {
    padding-top: 60px;
  }

  > div {
    h4 {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 26px;
      margin-bottom: 24px;
    }

    li {
      max-width: 300px;
      width: 100%;
      margin-bottom: 24px;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 26px;
      color: #d9dbe1;
    }

    a {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 26px;
      color: #d9dbe1;
    }
  }

  .copyright {
    margin: 40px 0;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 24px;
    color: #d9dbe1;
  }

  .footer-bottom {
    padding: 40px;
    text-align: center;
  }
`;
