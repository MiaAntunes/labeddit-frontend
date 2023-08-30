import styled from "styled-components";

export const MainSignUp = styled.main`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14em;
  padding: 0 0.5em;
`;

export const TitleSignUp = styled.h1`
  color: #373737;
  font-family: IBM Plex Sans;
  font-size: 2.25rem;
  font-weight: 700;
  padding:0 1em;
`;

export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const ParagraphSignUp = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 2em 0.7em 0 0.7em;
`;

export const LinkContractSignUp = styled.a`
  color: #03a2cf;
  font-family: Noto Sans;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const FieldsetSignUp = styled.fieldset`
  display: flex;
  margin: 0.3em;
`;

export const LabelSignUp = styled.label`
  color: #000;
  font-family: Noto Sans;
  font-size: 0.75rem;
  padding: 0.2em;
`;

export const InputSignUp = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Button = styled.button`
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
