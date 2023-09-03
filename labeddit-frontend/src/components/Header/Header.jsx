import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import logoHeader from "../../assets/logoHeader.png";
import { goToHomePage, goToLogin } from "../../router/coordinator";
import {
  ButtonEntrar,
  ButtonExit,
  ButtonLogout,
  HeaderContainer,
  LogoHeader,
  Span,
} from "./HeaderStyled";
import exitHeader from "../../assets/exitHeader.png";
import { useProtectPage } from "../../hooks/useProtectPage";


export const Header = (props) => {
  const navigate = useNavigate();

  const onClickExitPostId = () => {
    goToHomePage(navigate);
  };

  const onClickLogout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate)
  };
  
  useProtectPage();
  
  useEffect(() => {
    props.receberDados();
  }, []);


  return (
    <HeaderContainer>
      {location.pathname.includes("/post/") ? (
        <ButtonExit onClick={onClickExitPostId}>
          <img src={exitHeader} alt="Botão para fechar a página do post" />
        </ButtonExit>
      ) : (
        <Span></Span>
      )}

      <LogoHeader src={logoHeader} alt="Logo da LabEddit" />

      {location.pathname.includes("user/signup/") ? (
        <ButtonEntrar onClick={() => goToLogin(navigate)}>Entrar</ButtonEntrar>
      ) : (
        <ButtonLogout onClick={onClickLogout}>Logout</ButtonLogout>
      )}
    </HeaderContainer>
  );
};
