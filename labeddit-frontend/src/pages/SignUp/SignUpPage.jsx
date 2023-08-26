import { Button } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import { InputForm } from "../../components/InputForm/InputForm"
import { StatusBar } from "../../components/StatusBar/StatusBar"
import { FormSignUp, LinkContractSignUp, MainSignUp, ParagraphSignUp, TitleSignUp } from "./SignUpPageStyled"


export const SignUpPage = () =>{

    return(
        <>
             <StatusBar/>
             <Header title="Entrar"/>
             <MainSignUp>
                <TitleSignUp>Olá, boas vindas ao LabEddit ;) </TitleSignUp>
                <FormSignUp action="" onSubmit="{}">

                    <InputForm 
                    type="text" 
                    name="" 
                    id=""
                    value=""
                    onChange=""
                    placeholder=""/>

                    <InputForm 
                    type="email"
                    name="" 
                    id=""
                    value=""
                    onChange=""
                    placeholder=""/>

                    <InputForm 
                    type="password"
                    name="" 
                    id=""
                    value=""
                    onChange=""
                    placeholder=""/>

                    <ParagraphSignUp>Ao continuar você concorda com o nosso <LinkContractSignUp href="#">Contrato de usuário</LinkContractSignUp> e a nossa <LinkContractSignUp href="">Política de Privacidade</LinkContractSignUp></ParagraphSignUp>

                    <InputForm 
                    type="radio?" /> //dúvidas

                    <Button
                    title="Cadastrar" />
                </FormSignUp>
             </MainSignUp>
        </>
    )
}