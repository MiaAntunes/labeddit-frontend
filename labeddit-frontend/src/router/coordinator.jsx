export const goToLogin= (navigate) => {
    return navigate(`/`)
}

export const goToSignUp = (navigate) => {
    return navigate('/signup')
}

export const goToHomePage = (navigate) => {
    return navigate('/home')
}

export const goToPostIdPage = (navigate, id) => {
    return navigate(`/post/${id}`)
}