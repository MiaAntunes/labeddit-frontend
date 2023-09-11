import axios from "axios";
import { BoxText } from "../../components/Box Text/BoxText";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { StatusBar } from "../../components/StatusBar/StatusBar";
import useForm from "../../hooks/useForm";
import { useProtectPage } from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import {
  ButtonPostar,
  FormCreatePost,
  Line,
  MainHome,
  SectionAllPost,
  SectionCreatePost,
} from "./HomePageStyled";
import { BASE_URL } from "../../contants/BaseUrl";

export const HomePage = () => {
  useProtectPage()
  const token = localStorage.getItem('token')
  // console.log(token)

  const { form, onChange, cleanFields } = useForm({
    content: ""
  });
  
  const [posts, receberDados, erro] = useRequestData([], '/posts', token)

  console.log(form.content)

  const sendPost = (event) =>{
    event.preventDefault();

    const body = {
      content: form.content
    }

    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token
      }
    })
    .then((res) =>{
      receberDados()
    })
    .catch((error) =>{
    })
  }

  return (
    <>
      <StatusBar />
      <Header receberDados={receberDados} />
      <MainHome>
        <SectionCreatePost>
          <FormCreatePost onSubmit={sendPost}>
            <BoxText for="content" name="content" value={form.content} onChange={onChange} placeholder="Escreva seu post..." />
            <ButtonPostar type="onsubmit">Postar</ButtonPostar>
          </FormCreatePost>
        </SectionCreatePost>
        <Line />
        <SectionAllPost>
          {
            posts.map((post, index)=>{

              return(
                <Post key={index} post={post} receberDados={receberDados} />
              )
            })
          }
        </SectionAllPost>
      </MainHome>
    </>
  );
};
