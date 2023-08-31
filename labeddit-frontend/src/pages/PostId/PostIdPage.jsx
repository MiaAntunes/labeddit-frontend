import { StatusBar } from "../../components/StatusBar/StatusBar";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { BoxText } from "../../components/Box Text/BoxText";
import { ButtonResponse, FormCreatePost, Line, MainPostId, SectionAllPost, SectionCreatePost } from "./PostIdPageStyled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useForm from "../../hooks/useForm";

export const PostIdPage = () => {
  const context = useContext(GlobalContext)
  const { eachPost, setEachPostId} = context
  console.log(eachPost)

  const { form, onChange, cleanFields } = useForm({
    content: ""
  });

  const sendComment = (event) =>{
    event.preventDefault();

    const body = {
      content: form.content
    }

    // ! Olhar se a URL está correta
    axios.post(`${BASE_URL}/posts/comments/${eachPost.postId}`, body, {
      headers: {
        Authorization: token
      }
    })
    .then((res) =>{
      console.log("OK", res.data)
      cleanFields()
      receberDados()
    })
    .catch((error) =>{
      console.log("error", error.data)
    })
  }

  return (
    <>
      <StatusBar />
      <Header title="Logout"/>
      <MainPostId>
        <SectionCreatePost>
          {/* Fazer a lógica para aparecer somente o post clicado */}
          <Post post={eachPost} />

          <FormCreatePost onSubmit={sendComment}>
            <BoxText
            for="comentario"
            name="comentario"
            value={form.content}
            onChange={onChange}
            placeholder="Adicionar comentário" />
            <ButtonResponse>Responder</ButtonResponse>
          </FormCreatePost>

        </SectionCreatePost>
        <Line />
        <SectionAllPost>
            {/* !  Fazer um map de todas os comentários de Post */}
            {/* eachPost.comments.map((comments,index)=>{
              return <Post key={index} post={comments}/>
            }) */}
        </SectionAllPost>
      </MainPostId>
    </>
  );
};
