export const Factorial = (props) => {

    const factorial = (n) => {
        return n <= 1 ? 1 : n * factorial(n - 1)
    }

    console.log(factorial(props.factorialNumber))
    return (
        <div>
            <div><b>Calculate factorial - {props.factorialNumber}</b></div>
            <div>Factorial equal - {factorial(props.factorialNumber)}</div>
        </div>
    )
}