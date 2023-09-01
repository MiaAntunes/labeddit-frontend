import { useNavigate } from "react-router-dom";
import { ButtonLike } from "../ButtonLike/ButtonLike";
import {
  ContainerPost,
  LinkPostContainer,
  ParagraphContent,
  ParagraphUser,
} from "./CommentStyled";

export const Comment = (props) => {
  const navigate = useNavigate();
  console.log(props)

  return (
    <ContainerPost>
      <LinkPostContainer>
        <ParagraphUser>Enviado por: {props.comment.userName}</ParagraphUser>
        <ParagraphContent>{props.comment.comments}</ParagraphContent>
        <div style={{ display: "flex" }}>
          <ButtonLike
            url="comment"
            receberDados={props.receberDados}
            id={props.comment.id}
            valueLike={props.comment.likes}
            valueDeslike={props.comment.deslikes}
          />
        </div>
      </LinkPostContainer>
    </ContainerPost>
  );
};
