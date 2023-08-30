import { useState } from "react"
import { GlobalContext } from "./GlobalContext";


export const GlobalState = (props) =>{
    const [eachPost, setEachPostId] = useState({})

    const context = {
        eachPost,
        setEachPostId
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}