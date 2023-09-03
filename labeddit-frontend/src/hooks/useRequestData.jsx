import  { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../contants/BaseUrl'



export const useRequestData = (estadoInicial, path, token) => {

    const [dados, setDados] = useState(estadoInicial)
    const [erro, setErro] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const receberDados = () =>{
        axios.get(`${BASE_URL}${path}`, {
            headers:{
                Authorization: token
            }
        })
        .then((resposta) => {
            setIsLoading(false);
            setDados(resposta.data)
        })
        .catch((erro) => {
            setErro(erro.response)
            setIsLoading(false);
        })
    }
    
    useEffect(() => {
        receberDados()
    }, [path])

    return [dados, receberDados, erro, isLoading]
}

export default useRequestData
