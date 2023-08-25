import styled from "styled-components";

export const ContainerStatusBar = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const StatusBarImg = styled.img`
  @media screen and (max-width: 500px) {
    width: 22rem;
  }
`;
