import { StatusBar } from "../../components/StatusBar/StatusBar";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Post } from "../../components/Post/Post";
import { BoxText } from "../../components/Box Text/BoxText";

export const PostIdPage = () => {
  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <main>
        <section>
          {/* Fazer a lógica para aparecer somente o post clicado */}

          <Form onSubmit="{}">
            <BoxText
            for="comentario"
            name="comentario"
            placeholder="Adicionar comentário" />
            <Button
            title="Responder" />
          </Form>

        </section>
        <hr />
        <section>
            {/*  Fazer um map de todas os comentários de Post */}
            <Post
            user="" 
            content=""
            like=""
            deslike=""/>
        </section>
      </main>
    </>
  );
};
