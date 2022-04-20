import styled from "styled-components";

export const DropdownWrapper = styled.div`
    max-width: max-content;
    width: 100%;

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
      max-width: max-content;
      max-height: 200px;
      overflow-y: scroll;
    }
`