import { Button } from "../../components/Button/Button";
import { InputForm } from "../../components/InputForm/InputForm";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import logoHeader from "../../assets/logoLogin.png"
import { ContainerLogo, Form, LogoImg, Paragraph } from "./LoginPageStyled";

export const LoginPage = () => {
  return (
    <>
      <StatusBar />
      <ContainerLogo>
        <LogoImg src={logoHeader} alt="Logo da LabEddit" />
        <Paragraph>O projeto de rede social da Labenu</Paragraph>
      </ContainerLogo>
      <Form action="" onSubmit="{}">
        <InputForm
          type="text"
          name="email"
          id="email"
          value=""
          onChange=""
          placeholder="E-mail"
        />
        <InputForm
          type="text"
          name="password"
          id="password"
          value=""
          onChange=""
          placeholder="Senha"
        />
        <Button
        title="Continuar" />
        <hr />
        <Button
        title="Crie uma conta!" />
      </Form>
    </>
  );
};
