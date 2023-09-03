import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  border-radius: 1.75rem;
  border: 0.797px solid #ececec;
  width: 5rem;
  height: 2rem;
  overflow: hidden;
  padding: 0.5em;
  align-items: center;
  gap: 0.5em;
  background-color: #efefef;
`;

export const ButtonLikes = styled.button`
  display: flex;
  overflow: hidden;
  height: 2rem;
  align-items: center;
  gap: 0.5em;
  z-index: 2;
`;

export const ImgLike = styled.img``;

export const TextLike = styled.p`
  color: #6f6f6f;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const ButtonDeslike = styled.button`
  display: flex;
  overflow: hidden;
  height: 2rem;
  align-items: center;
  gap: 0.5em;
  z-index: 2;
`;

export const ImgDeslike = styled.img``;

export const TextDeslike = styled.p``;
