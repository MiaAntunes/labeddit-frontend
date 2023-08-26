import { BoxText } from "../../components/Box Text/BoxText";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import { FormCreatePost, Line, MainHome, SectionAllPost, SectionCreatePost } from "./HomePageStyled";

export const HomePage = () => {

  // ! Confirmar e revisar a semântica do HTML
  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <MainHome>
        <SectionCreatePost>
          <FormCreatePost action="" onSubmit="{}">

            <BoxText 
            for="post"
            name="post"
            placeholder="Escreva seu post..." />
            <Button 
            title="Postar" />

          </FormCreatePost>
        </SectionCreatePost>
        <Line />
        <SectionAllPost>

          {/* Fazer um map de todos as postagens */}
          <Post 
          user="" 
          content="" 
          like="" 
          deslike="" 
          comentário="" />

        </SectionAllPost>
      </MainHome>
    </>
  );
};
