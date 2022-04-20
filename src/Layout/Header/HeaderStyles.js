import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 12345;
  background-color: #fff;
  border: 1px solid #6f818f38;

  .header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    > nav {
      position: absolute;
      display: none;
      top: 10px;
      left: -5px;
    }

    //  hamburger menu
    .navbar {
      width: 100%;
      padding: 0;

      .menu-items {
        display: flex;
        width: 300px;
      }

      .nav-container {
        z-index: 1234;
        height: 62px;

        input[type='checkbox']:checked ~ .menu-items {
          transform: translateX(0);
        }

        input[type='checkbox']:checked ~ .hamburger-lines .line1 {
          transform: rotate(45deg);
        }

        input[type='checkbox']:checked ~ .hamburger-lines .line2 {
          transform: scaleY(0);
        }

        input[type='checkbox']:checked ~ .hamburger-lines .line3 {
          transform: rotate(-45deg);
        }

        .checkbox {
          position: absolute;
          display: block;
          height: 32px;
          width: 32px;
          top: 20px;
          left: 20px;
          z-index: 5;
          opacity: 0;
          cursor: pointer;
        }

        .hamburger-lines {
          display: block;
          height: 26px;
          width: 32px;
          position: absolute;
          top: 17px;
          left: 20px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .line {
            display: block;
            height: 4px;
            width: 100%;
            border-radius: 10px;
            background: #0e2431;
          }

          .line1 {
            transform-origin: 0% 0%;
            transition: transform 0.4s ease-in-out;
          }

          .line2 {
            transition: transform 0.2s ease-in-out;
          }

          .line3 {
            transform-origin: 0% 100%;
            transition: transform 0.4s ease-in-out;
          }
        }

        li {
          list-style: none;
        }
      }

      .menu-items {
        padding-top: 70px;
        background-color: #fff;
        height: 100vh;
        width: 100%;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -40px;
        padding: 80px 100px;
        transition: transform 0.5s ease-in-out;
        text-align: start;

        li {
          margin-bottom: 1.2rem;
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }

    .logo-self {
      display: none;
    }

    .logo {
      margin: 20px 0;
    }

    .nav__items {
      margin: 0;

      li {
        margin: 40px 24px;
      }

      a {
        color: #23272b;
        font-weight: 500;
        font-size: 1rem;
        line-height: 19px;
        padding: 34px 0;
      }
    }

    // Dropdown
    .dropdown {
      > button {
        height: 49px;
        width: 50px;
        border-radius: 8px;
        background: #061b34;

        &:hover {
          background: #041427 !important;
        }
      }

      .dropdown-menu {
        li {
          a {
            color: #e6e6e7;
          }
        }
      }
    }

    .joinUs {
      margin-left: auto;
      span {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 21px;
        margin-right: 24px;
        color: #23272b;
      }

      > .btn {
        padding: 12px 16px;
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid #143650;
        box-sizing: border-box;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 19px;
        color: $blue;
        text-align: center;

        &:hover {
          color: #6f818f;
          border: 1px solid #6f818f;
        }

        &:focus {
          box-shadow: none;
          color: #23272b;
        }
      }
    }
  }

  .bottom-header {
    background-color: #f7f8fc;
  }
  // header bottom
  .header__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 24px 0;
    background-color: #f7f8fc;

    .dropdown {
      max-width: max-content;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 52px;
      padding: 16px 24px;
      font-weight: 500;
      font-size: 1rem;
      line-height: 19px;
      background: $dark-blue;
      border: none;
      border-radius: 8px;
      color: #fff;

      &:hover {
        color: #e6e6e7;
      }

      span {
        flex-shrink: 0;
        width: 100%;
        padding-left: 12px;
      }
    }

    .likes {
      display: flex;
      justify-content: center;
      align-items: center;
      .favorites {
        margin-right: 24px;
      }

      img {
        background-color: var(--darkBlue);
        border-radius: 50%;
        padding: 10px;
        margin-right: 6px;
      }

      a {
        color: #23272b;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
          margin-left: 12px;
        }
      }

      .number {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 19px;
        left: 24px;
        font-weight: 500;
        font-size: 10px;
        color: #ffffff;
        padding-top: 2px;
        background: #e93235;
        border: 1.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 50%;
      }
    }
  }
`;
