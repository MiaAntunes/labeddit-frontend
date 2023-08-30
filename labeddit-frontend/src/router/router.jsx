import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage"
import { SignUpPage } from "../pages/SignUp/SignUpPage"
import { HomePage } from "../pages/Home/HomePage"
import { PostIdPage } from "../pages/PostId/PostIdPage"

export const Router = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/post/:id" element={<PostIdPage />} />
         </Routes>
        </BrowserRouter>
    )
}