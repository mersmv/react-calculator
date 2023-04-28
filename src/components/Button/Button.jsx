import { StyledButton } from "./styles"

const Button = ({content, value}) => {
    return(
        <StyledButton value={value}>{content}</StyledButton>
    )
}

export default Button