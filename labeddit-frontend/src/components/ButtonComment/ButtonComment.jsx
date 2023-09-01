import comment from "../../assets/comment.png"
import { ButtonComment, ImgComment, TextComment } from "./ButtonCommentStyled"


export const ButtonComments = (props)=>{
    

    console.log(props)
    return(
        <>
        <ButtonComment>
            <ImgComment src={comment} alt="" />
            <TextComment>{ typeof props.valueComments === "number"? props.valueComments : props.valueComments.length}</TextComment>
        </ButtonComment>
        </>
    )
}