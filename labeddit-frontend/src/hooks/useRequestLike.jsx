import  { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../contants/BaseUrl'

export const useRequestLike = (estadoInicial, path, token) => {

    const [likes, setLike] = useState(estadoInicial)
    const [erro, setErro] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const mandarDados = (like) =>{
        axios.put(`${BASE_URL}${path}`, {like},  {
            headers:{
                Authorization: token
            }
        })
        .then((resposta) => {
            setIsLoading(false);
            setLike(resposta.data)
        })
        .catch((erro) => {
            setErro(erro.response)
            setIsLoading(false);
        })
    }
    

    return [likes, setLike, mandarDados, erro, isLoading]
}

export default useRequestLike