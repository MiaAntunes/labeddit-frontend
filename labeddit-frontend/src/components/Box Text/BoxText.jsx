import { TextArea } from "./BoxTextStyled"




export const BoxText = (props)=>{

    return(
        <>
          <label htmlFor={props.name}></label>
          <TextArea name={props.name} rows="8" value={props.value} onChange={props.onChange} placeholder={props.placeholder} ></TextArea>
        </>
    )
}