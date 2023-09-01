import { useNavigate, useParams } from "react-router-dom";
import useRequestLike from "../../hooks/useRequestLike";
import { goToPostIdPage } from "../../router/coordinator";
import { ButtonComments } from "../ButtonComment/ButtonComment";
import { ButtonLike } from "../ButtonLike/ButtonLike";
import {
  ContainerPost,
  LinkPostContainer,
  ParagraphContent,
  ParagraphUser,
} from "./PostStyled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Post = (props) => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { eachPost, setEachPostId } = context;
  console.log(props);

  const onClickGoToPostIdPage = (element) => {
    setEachPostId(element);
    goToPostIdPage(navigate, element.postId);
  };

  return (
    <ContainerPost>
      <LinkPostContainer onClick={() => onClickGoToPostIdPage(props.post)}>
        <ParagraphUser>Enviado por: {props.post?.creator?.name}</ParagraphUser>
        <ParagraphContent>{props.post.content}</ParagraphContent>
        <div style={{ display: "flex" }}>
          <ButtonLike
            url="like"
            id={props.post.postId}
            receberDados={props.receberDados}
            valueLike={props.post.likes}
            valueDeslike={props.post.deslikes}
          />
          <ButtonComments valueComments={props.post.comments} />
        </div>
      </LinkPostContainer>
    </ContainerPost>
  );
};
