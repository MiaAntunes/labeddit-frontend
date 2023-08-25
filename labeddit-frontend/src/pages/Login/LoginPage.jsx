import { Button } from "../../components/Button/Button";
import { InputForm } from "../../components/InputForm/InputForm";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import logoHeader from "../../assets/logoLogin.png"

export const LoginPage = () => {
  return (
    <>
      <StatusBar />
      <div>
        <img src={logoHeader} alt="Logo da LabEddit" />
        <p>O projeto de rede social da Labenu</p>
      </div>
      <form action="" onSubmit="{}">
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
      </form>
    </>
  );
};
