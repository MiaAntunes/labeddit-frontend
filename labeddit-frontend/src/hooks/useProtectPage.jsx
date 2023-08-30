import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../router/coordinator"



export const useProtectPage = () =>{
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token");

        if(!token){
            goToLogin(navigate)
        }
    },[navigate])
}