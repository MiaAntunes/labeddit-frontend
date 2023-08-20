import { Button } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import { InputForm } from "../../components/InputForm/InputForm"
import { StatusBar } from "../../components/StatusBar/StatusBar"




export const SignUpPage = () =>{

    return(
        <>
             <StatusBar/>
             <Header title="Entrar"/>
             <main>
                <h1>Olá, boas vindas ao LabEddit ;) </h1>
                <form action="" onSubmit="{}">

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

                    <p>Ao continuar você concorda com o nosso <a href="#">Contrato de usuário</a> e a nossa <a href="">Política de Privacidade</a></p>

                    <InputForm 
                    type="radio?" /> //dúvidas

                    <Button
                    title="Cadastrar" />
                </form>
             </main>
        </>
    )
}