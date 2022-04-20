import styled from 'styled-components';

export const BreadcrumbWrapper = styled.div`
  padding-top: 234px;

  li {
    color: #738da3;
    a {
      color: #143650;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .breadcrumb,
  ol,
  ul,
  dl {
    background-color: #fff;
    margin-bottom: 0;
  }

  ol,
  ul {
    padding: 0;
  }
`;

export const BasketWrapper = styled.section`
  padding: 0 0 60px 0;

  .card-custom {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    flex-direction: row;
    background-color: #f7f8fc;
    padding: 24px;
    margin-bottom: 16px;
    border-radius: 16px;
    border: none;

    > img {
      background-color: #fff;
      max-width: 151px;
      width: 100%;
      height: 151px;
      margin-right: 24px;
      object-fit: contain;
    }

    .card-body {
      padding: 1rem 0;
      > h4 {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        overflow: hidden;
        font-weight: 500;
        font-size: 1.125rem;
        margin-bottom: 16px;
      }

      > h5 {
        color: #738da3;
        font-weight: 400;
        font-size: 1.125rem;
        margin-bottom: 16px;
      }

      .price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .flex > .img {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #eb5757;
          border-radius: 8px;
          padding: 7px 9px;

          img {
            margin: 0;
            // padding: 0;
          }
        }

        h4 {
          font-weight: 500;
          font-size: 1.125rem;
          margin-right: 24px;
          margin-bottom: 0;
        }

        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > img {
            cursor: pointer;
            margin-right: 16px;
            background: rgba(115, 141, 163, 0.2);
            border-radius: 8px;
            padding: 8px;
          }
        }

        .minus {
          padding: 15px 8px;
        }
      }
    }
  }

  .corsina__info-card {
    position: sticky;
    top: 207px;
    display: flex;
    flex-direction: column;
    background-color: #f7f8fc;
    border: none;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;

    ol {
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;

      h6 {
        color: #738da3;
        font-weight: 400;
        font-size: 1rem;
      }

      span {
        color: #143650;
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .btn {
      margin-top: 32px;
      padding: 10px;
      background: #143650;
      border-radius: 8px;
      color: #fff;
    }
  }
`;

export const ProductsWrapper = styled.section`
  margin-bottom: 80px;

  h2 {
    margin-bottom: 46px;
  }
  .products-item {
    padding: 0;
    border-radius: 16px;

    .card-custom,
    .card {
      max-width: 275px;
      width: 100%;
      margin: 12px;
      border-radius: 16px;
      border: none;
      overflow: hidden;

      &:hover {
        box-shadow: 0px 16px 16px 8px rgba(115, 141, 163, 0.1);
      }
      .card-img {
        position: relative;
        text-align: center;

        .main-img {
          margin-bottom: 16px;
          width: 130px;
          height: 130px;
          object-fit: contain;
        }

        .heart-icon {
          cursor: pointer;
          box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.06);
          border-radius: 50%;
          position: absolute;
          top: 10px;
          right: 12px;
          padding: 10px;

          svg {
            width: 100%;
          }
        }
      }

      .card-body {
        padding: 16px;

        h6 {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          display: -webkit-box;
          color: #6f818f;
          font-weight: 400;
          font-size: 12px;
          margin-bottom: 8px;
        }

        h4 {
          height: 40px;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          display: -webkit-box;
          color: #23272b;
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e93235;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          border-radius: 8px;
          padding: 12px 0;

          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const FavoritesWrapper = styled.section``;
export const CategoriesWrapper = styled.section``;
export const CompanyWrapper = styled.section``;
export const BranchWrapper = styled.section``;
export const DrugWrapper = styled.section``;
export const DiscriptionWrapper = styled.section``;
