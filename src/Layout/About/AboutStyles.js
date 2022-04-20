import styled from 'styled-components'

export const AboutWrapper = styled.section`
  margin: 60px auto;

  .about__items {
    .item {
      text-align: center;

      h6 {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 150%;
        text-align: center;
        color: #143650;
        margin: 16px 0px;
      }

      img {
        background: #f7f8fc;
        padding: 32px;
        border-radius: 50%;
        height: 145px;
        width: 145px;
      }
    }
}
`