import { StatusBar } from "../../components/StatusBar/StatusBar";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { BoxText } from "../../components/Box Text/BoxText";
import { ButtonResponse, FormCreatePost, Line, MainPostId, SectionAllPost, SectionCreatePost } from "./PostIdPageStyled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { Comment } from "../../components/Comments/Comment";
import axios from "axios";
import { BASE_URL } from "../../contants/BaseUrl";
import { useParams } from "react-router-dom";

export const PostIdPage = () => {
  const context = useContext(GlobalContext)
  const { eachPost, setEachPostId} = context
  const token = localStorage.getItem('token')
  const params = useParams()


  const { form, onChange, cleanFields } = useForm({
    content: ""
  });

  const [post, receberDados, erro, isLoading] = useRequestData({}, `/posts/${params.id}` , token)
  console.log(form)

  const sendComment = (event) =>{
    event.preventDefault();

    const body = {
      content: form.content
    }

    // ! Olhar se a URL está correta
    axios.post(`${BASE_URL}/post/comment/${eachPost.postId}`, body, {
      headers: {
        Authorization: token
      }
    })
    .then((res) =>{
      console.log("OK", res.data)
      // cleanFields()
      receberDados()
    })
    .catch((error) =>{
      console.log("error", error.data)
    })
  }

  console.log("EachPost", eachPost)
  console.log("post", post)

  return (
    <>
      <StatusBar />
      <Header />
      <MainPostId>
        <SectionCreatePost>
          {/* Fazer a lógica para aparecer somente o post clicado */}
          <Post post={post} receberDados={receberDados} />

          <FormCreatePost onSubmit={sendComment}>
            <BoxText
            for="comentario"
            name="content"
            value={form.content}
            onChange={onChange}
            placeholder="Adicionar comentário" />
            <ButtonResponse>Responder</ButtonResponse>
          </FormCreatePost>

        </SectionCreatePost>
        <Line />
        <SectionAllPost>

          { 
            isLoading? (
              <div>
                <iframe src="https://giphy.com/embed/PUYgk3wpNk0WA" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/giphyqa-PUYgk3wpNk0WA">via GIPHY</a></p>
              </div>
            ) : post.comments.map((comments , index)=>{
                return <Comment key={index} comment={comments} receberDados={receberDados} />
              })
          }
        </SectionAllPost>
      </MainPostId>
    </>
  );
};
