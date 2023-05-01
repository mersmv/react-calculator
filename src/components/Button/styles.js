import styled from "styled-components";

const StyledButton = styled.button`
    width: 70px;
    height: 50px;
    background-color: ${({color})=> color};
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    border: solid 1px ${({color})=> color};

    &:hover{
        background-color: #344e41;
    }
`

export {StyledButton}