import { number } from "../../constants/numbers"
import Button from "../Button/Button"
import { StyledCalculator } from "./styles"

const Container = () => {
    return(
        <StyledCalculator>
            <Screen/>
            <div>
            {number.map(num => 
            (<Button key={num.id} {...num}></Button>))}
            </div>
        </StyledCalculator>
    )
}

export default Container