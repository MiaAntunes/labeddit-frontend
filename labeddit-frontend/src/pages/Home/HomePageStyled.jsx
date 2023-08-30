import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin: 0 1em;
  height: 90vh;
`;

export const SectionCreatePost = styled.section`
  overflow: hidden;
  height: 18em;
`;

export const FormCreatePost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const Line = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
  width: 22.68788rem;
  height: 0.0625rem;
`;

export const SectionAllPost = styled.section`
  height: 75vh;
  overflow-x: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonPostar = styled.button`
  border-radius: 0.75rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  width: 100%;
  height: 3.5em;
  color: #fff;
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 0.85rem;
  font-weight: 700;
`;
