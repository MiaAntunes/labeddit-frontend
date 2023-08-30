import styled from "styled-components";

export const MainLogin = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.5em;
`;

export const ContainerLogo = styled.div`
  text-align: center;
`;

export const LogoImg = styled.img``;

export const TitleLogo = styled.h1`
  color: #373737;
  font-family: IBM Plex Sans;
  font-size: 2.25rem;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  color: #000;
  font-family: IBM Plex Sans;
  font-size: 1rem;
  font-weight: 300;
`;

export const FieldsetLogin = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1.5em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1em;
`;

export const Line = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #acacac;
  width: 22.68788rem;
  height: 0.0625rem;
`;

export const ButtonContinue = styled.button`
  border-radius: 1.6875rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  width: 16rem;
  height: 3em;
  color: #fff;
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1rem;
  font-weight: 700;
`;

export const ButtonSignup = styled.button`
  background: #fff;
  border-radius: 1.6875rem;
  border: 1px solid #fe7e02;
  width: 16rem;
  height: 3em;
  color: #fe7e02;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1rem;
  font-weight: 700;
`;
