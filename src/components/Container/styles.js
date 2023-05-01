import styled from "styled-components";

const StyledCalculator = styled.div`
    width: 400px;
    height: 450px;
    background-color: #dad7cd;
    border-radius: 10px;
    padding: 5px;
    gap: 30px;
    padding: 30px;
    display:flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`

const StyledNumbers = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-left: auto;
    margin-right: auto;
`

export {StyledCalculator, StyledNumbers}