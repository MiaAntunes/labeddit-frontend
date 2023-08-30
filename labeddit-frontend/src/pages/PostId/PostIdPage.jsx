import { StatusBar } from "../../components/StatusBar/StatusBar";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { BoxText } from "../../components/Box Text/BoxText";
import { ButtonResponse, FormCreatePost, Line, MainPostId, SectionAllPost, SectionCreatePost } from "./PostIdPageStyled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const PostIdPage = () => {
  const context = useContext(GlobalContext)
  const { eachPost, setEachPostId} = context
  console.log(eachPost)
  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <MainPostId>
        <SectionCreatePost>
          {/* Fazer a lógica para aparecer somente o post clicado */}
          <Post post={eachPost} />

          <FormCreatePost onSubmit="{}">
            <BoxText
            for="comentario"
            name="comentario"
            placeholder="Adicionar comentário" />
            <ButtonResponse>Responder</ButtonResponse>
          </FormCreatePost>

        </SectionCreatePost>
        <Line />
        <SectionAllPost>
            {/*  Fazer um map de todas os comentários de Post */}
            {/* <Post
            user="" 
            content=""
            like=""
            deslike=""/> */}
        </SectionAllPost>
      </MainPostId>
    </>
  );
};
