import styled from "styled-components"

export const Container = styled.div`
    display: flex;
`
export const Label = styled.label`
  @media screen and (max-width: 600px) {
    
  }

`
export const Input = styled.input`
   &::placeholder{
    font-family: Noto Sans;
    font-size: .9rem;
    font-weight: 400;
   }
 
  @media screen and (max-width: 600px) {
    border: 1px solid #5154589c;
    width: 20rem;
    height: 3rem;
    border-radius: 0.25rem;
    font-family: Noto Sans;
    font-size: .9rem;
    padding:1em
  }

  
`