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
  
  const [posts, receberDados, erro] = useRequestData([], '/posts', token)

  const { form, onChange, cleanFields } = useForm({
    content: ""
  });

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
      <Header title="Logout" />
      <MainHome>
        <SectionCreatePost>
          <FormCreatePost onSubmit={sendPost}>
            <BoxText for="content" name="content" value={form.content} onChange={onChange} placeholder="Escreva seu post..." />
            <ButtonPostar type="submit">Postar</ButtonPostar>
          </FormCreatePost>
        </SectionCreatePost>
        <Line />
        <SectionAllPost>
          {
            posts.map((post, index)=>{

              return(
                <Post key={index} post={post} />
              )
            })
          }
        </SectionAllPost>
      </MainHome>
    </>
  );
};
