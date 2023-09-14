import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { InputForm } from "../../components/InputForm/InputForm";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import axios from "axios";
import {
  Button,
  FieldsetSignUp,
  FormSignUp,
  LabelSignUp,
  LinkContractSignUp,
  MainSignUp,
  ParagraphSignUp,
  TitleSignUp,
} from "./SignUpPageStyled";
import { goToHomePage } from "../../router/coordinator";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../contants/BaseUrl";

export const SignUpPage = () => {
  const navigate = useNavigate();



  const { form, onChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const sendSignUp = (event) => {
    event.preventDefault();

    const dadosUsuario = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    //cadastrar os dados do User na API
    axios
      .post(`${BASE_URL}/user/signup`, dadosUsuario)
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
      <Header title="Entrar" signup />
      <MainSignUp>
        <TitleSignUp>Olá, boas vindas ao LabEddit ;) </TitleSignUp>
        <FormSignUp onSubmit={sendSignUp}>
          <InputForm
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
            placeholder="Apelido"
          />

          <InputForm
            type="email"
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
          <ParagraphSignUp>
            Ao continuar você concorda com o nosso{" "}
            <LinkContractSignUp href="#">
              Contrato de usuário
            </LinkContractSignUp>{" "}
            e a nossa{" "}
            <LinkContractSignUp href="">
              Política de Privacidade
            </LinkContractSignUp>
          </ParagraphSignUp>
          <FieldsetSignUp>
            <input type="checkbox" required />
            <LabelSignUp>
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </LabelSignUp>
          </FieldsetSignUp>
          <Button type="onsubmit">Cadastrar</Button>
        </FormSignUp>
      </MainSignUp>
    </>
  );
};
