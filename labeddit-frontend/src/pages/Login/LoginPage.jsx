import { InputForm } from "../../components/InputForm/InputForm";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import logoHeader from "../../assets/group-3.png";
import axios from "axios";
import {
  ButtonContinue,
  ButtonSignup,
  ContainerLogo,
  FieldsetLogin,
  Form,
  Line,
  LogoImg,
  MainLogin,
  Paragraph,
  TitleLogo,
} from "./LoginPageStyled";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToSignUp } from "../../router/coordinator";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../contants/BaseUrl";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const sendLogin = (event) => {
    event.preventDefault();

    const dadosUsuario = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${BASE_URL}/user/login`, dadosUsuario)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToHomePage(navigate)
      })
      .catch((error) => {
      });
  };

  return (
    <>
      <StatusBar />
      <MainLogin>
        <ContainerLogo>
          <LogoImg src={logoHeader} alt="Logo da LabEddit" />
          <TitleLogo>LabEddit</TitleLogo>
          <Paragraph>O projeto de rede social da Labenu</Paragraph>
        </ContainerLogo>
        <Form onSubmit={sendLogin}>
          <FieldsetLogin>
            <InputForm
              type="text"
              name="email"
              id="email"
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
            />
            <InputForm
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
            />
          </FieldsetLogin>
          <ButtonContinue
            background="colorido"
            fontColor="white"
          >
            Continuar
          </ButtonContinue>
          <Line />
          <ButtonSignup
            onClick={() => goToSignUp(navigate)}
            background="branco"
            fontColor="orange"
          >
            Crie uma conta!
          </ButtonSignup>
        </Form>
      </MainLogin>
    </>
  );
};
