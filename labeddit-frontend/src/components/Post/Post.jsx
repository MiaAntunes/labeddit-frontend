import { useNavigate } from "react-router-dom";
import { goToPostIdPage } from "../../router/coordinator";
import { ButtonComments } from "../ButtonComment/ButtonComment";
import { ButtonLike } from "../ButtonLike/ButtonLike";
import { ContainerPost, LinkPostContainer, ParagraphContent, ParagraphUser } from "./PostStyled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Post = (props) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext)
  const { eachPost, setEachPostId} = context
  
  const onClickGoToPostIdPage = (element) =>{
    setEachPostId(element)
    goToPostIdPage(navigate, element.idPost)
  }

  return (
    <ContainerPost >
      <LinkPostContainer onClick={()=>onClickGoToPostIdPage(props.post)}>
        <ParagraphUser>Enviado por: {props.post?.creator?.name}</ParagraphUser>
        <ParagraphContent>{props.post.content}</ParagraphContent>
        <ButtonLike 
        valueLike={props.post.likes} 
        valueDeslike={props.post.deslikes} />
        {/* !! DÚVIDAAAAAA */}
        {/* {
          props.post.comments?  
            <ButtonComments 
          valueComments={props.post.comments} />
        } */}
      </LinkPostContainer>
    </ContainerPost>
  );
};
