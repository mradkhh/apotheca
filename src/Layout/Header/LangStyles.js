import styled from 'styled-components'

export const LangWrapper = styled.div`
  position: relative;
  margin-left: 20px;

  .lang__btn {
    width: 60px;
    background: #fff;
    border: none;
    outline: none;
  }

  .pop-up {
    display: none;
    overflow: hidden;
    z-index: 12;
    width: 150px;
    background-color: #fff;
    position: absolute;
    bottom: -85px;
    left: -100px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 16px 16px 8px rgb(115 141 163 / 10%);

    button {
      background-color: #fff;
      padding-block: 10px;
      width: 100%;
      border: none;
      outline: none;

      &:hover {
        background-color: #f7f8fc;
      }
    }
  }
`