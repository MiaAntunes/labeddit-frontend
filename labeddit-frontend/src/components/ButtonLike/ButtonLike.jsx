import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";
import { ButtonDeslike, ButtonLikes, ContainerButton, ImgDeslike, ImgLike, TextDeslike, TextLike } from "./ButtonLikeStyled";
import { useRequestLike } from "../../hooks/useRequestLike";
import { useEffect } from "react";

export const ButtonLike = (props) => {
  const token = localStorage.getItem('token')
  let body
  const [likes, setLike, mandarDados, erro, isLoading] = useRequestLike({}, `/post/${props.url}/${props.id}` , token )

  useEffect(()=>{
    props.receberDados()
  },[])
  return (
    <ContainerButton>
      <ButtonLikes onClick={()=> mandarDados(true)}>
        <ImgLike src={like} alt="Button do Like" />
        <TextLike>{props.valueLike}</TextLike>
      </ButtonLikes>
      <ButtonDeslike onClick={()=> mandarDados(false)}>
        <ImgDeslike src={deslike} alt="Button do deslike" />
        <TextDeslike>{props.valueDeslike}</TextDeslike>
      </ButtonDeslike>
    </ContainerButton>
  );
};
