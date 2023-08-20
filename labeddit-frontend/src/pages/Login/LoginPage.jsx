import { Button } from "../../components/Button/Button";
import { InputForm } from "../../components/InputForm/InputForm";
import { StatusBar } from "../../components/StatusBar/StatusBar";

export const LoginPage = () => {
  return (
    <>
      <StatusBar />
      <div>
        <img src="" alt="" />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </div>
      <form action="" onSubmit="{}">
        <InputForm
          type="text"
          name=""
          id=""
          value=""
          onChange=""
          placeholder=""
        />
        <InputForm
          type="text"
          name=""
          id=""
          value=""
          onChange=""
          placeholder=""
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
