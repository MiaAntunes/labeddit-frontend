import { Input, Label } from "./InputFormStyled";

export const InputForm = (props) => {

  return (
    <div>
      <Label htmlFor={props.name}></Label>
        <Input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </div>
  );
};
