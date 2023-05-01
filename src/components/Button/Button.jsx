import { StyledButton } from "./styles"

const Button = ({content, value, color}) => {
    
    return(
        <StyledButton color={color} value={value}>{content}</StyledButton>
    )
}

export default Button