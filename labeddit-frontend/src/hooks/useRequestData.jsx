import  { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../contants/BaseUrl'



export const useRequestData = (estadoInicial, path, token) => {

    const [dados, setDados] = useState(estadoInicial)
    const [erro, setErro] = useState('')

    const receberDados = () =>{
        axios.get(`${BASE_URL}${path}`, {
            headers:{
                Authorization: token
            }
        })
        .then((resposta) => {
            setDados(resposta.data)
        })
        .catch((erro) => {
            console.log(erro.response)
            setErro(erro.response)
        })
    }
    
    useEffect(() => {
        receberDados()
    }, [path])

    return [dados, receberDados, erro]
}

export default useRequestData
