import { StatusBar } from "../../components/StatusBar/StatusBar";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Post } from "../../components/Post/Post";
import { BoxText } from "../../components/Box Text/BoxText";
import { FormCreatePost, Line, MainPostId, SectionAllPost, SectionCreatePost } from "./PostIdPageStyled";

export const PostIdPage = () => {
  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <MainPostId>
        <SectionCreatePost>
          {/* Fazer a lógica para aparecer somente o post clicado */}

          <FormCreatePost onSubmit="{}">
            <BoxText
            for="comentario"
            name="comentario"
            placeholder="Adicionar comentário" />
            <Button
            title="Responder" />
          </FormCreatePost>

        </SectionCreatePost>
        <Line />
        <SectionAllPost>
            {/*  Fazer um map de todas os comentários de Post */}
            <Post
            user="" 
            content=""
            like=""
            deslike=""/>
        </SectionAllPost>
      </MainPostId>
    </>
  );
};
