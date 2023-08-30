import { useNavigate } from "react-router-dom"
import logoHeader from "../../assets/logoHeader.png"
import { goToLogin } from "../../router/coordinator"
import { ButtonEntrar, ButtonExit, ButtonLogout, LogoHeader, Span } from "./HeaderStyled"


export const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () =>{
    localStorage.removeItem('token')
  }

  // ! usar no buttonExit o goToHomePage

  return (
    <Header>
      {
        location.pathname.includes("/post/") ?
          <ButtonExit onClick="{ }">
            <img src="" alt="" />
          </ButtonExit>:
          <Span></Span>
      }

      <LogoHeader src={logoHeader} alt="Logo da LabEddit" />

      {
        location.pathname.includes("/signup/") ?
          <ButtonEntrar onClick={()=> goToLogin(navigate)}>Entrar</ButtonEntrar>
          :
          <ButtonLogout onClick={onClickLogout}>Logout</ButtonLogout>
      }

    </Header>
  )
}