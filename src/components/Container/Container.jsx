import { useState } from "react"
import { number } from "../../constants/numbers"
import Button from "../Button/Button"
import Screen from "../Screen/Screen"
import { StyledCalculator, StyledNumbers } from "./styles"

const Container = () => {
    const [numbers, setNumbers] = useState("")
    const [result, setResult] = useState(0)
    const calculate = (button) => {
        if (button === "=") {
          setResult(eval(numbers))
        } else if (button === "C") {
          setNumbers("")
          setResult(0)
        } else if (button>=0 && button<=9){
          setNumbers(button + numbers.toString())
        }
          else if (button === '+' || button === '-' || button === '/' || button === '*'){
            setNumbers(numbers.toString() + button)
        }
      }
    return(
        <StyledCalculator>
            <Screen result={result}/>
            <StyledNumbers>
            {number.map(num => 
            (<Button key={num.id} {...num} onClick={() => calculate(num.value)}></Button>))}
            </StyledNumbers>
        </StyledCalculator>
    )
}



export default Container