export const SumAllNumbers = ({number}) => {
    const SumTo = (num) => {
        // let result = 0
        // if (num === 0) {
        //     return result
        // } else {
        //     result = num + SumTo(num - 1)
        // }
        // return result
        return num === 1 ? 1 : num + SumTo(num - 1)
    }
    console.log(SumTo(number))
    return (
        <div>
            <div><b>Sum all numbers: {`${number} + ${number - 1} + ${number - 2} + ...`}</b></div>
            <div>Result: {SumTo(number)}</div>
        </div>
    )
}