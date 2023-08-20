import { BoxText } from "../../components/Box Text/BoxText";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { StatusBar } from "../../components/StatusBar/StatusBar";

export const HomePage = () => {
  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <main>
        <section>
          <form action="" onSubmit="{}">

            <BoxText 
            for="post"
            name="post"
            placeholder="Escreva seu post..." />
            <Button 
            title="Postar" />

          </form>
        </section>
        <hr />
        <section>

          {/* Fazer um map de todos as postagens */}
          <Post 
          user="" 
          content="" 
          like="" 
          deslike="" 
          comentário="" />

        </section>
      </main>
    </>
  );
};
