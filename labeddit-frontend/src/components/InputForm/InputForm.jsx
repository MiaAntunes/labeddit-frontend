import { Input, Label } from "./InputFormStyled";

export const InputForm = (props) => {
  return (
    <div>
      <Label></Label>
        <Input type={props.type} name={props.name} placeholder={props.placeholder} required />
    </div>
  );
};
