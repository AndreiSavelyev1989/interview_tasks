import React from "react";

export const Fibonacci = React.memo(({fibonacciNumber}) => {
    const fibonacciCycle = (num) => {
        let a = 1,
            b = 1
        for (let i = 3; i <= num; i++) {
            [a, b] = [b, a + b]
        }
        return b
    }

    const fibonacciRecursion = (num) => {
        if (num < 2) {
            return num
        }
        return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
    }

    console.log(fibonacciRecursion(fibonacciNumber))
    return (
        <div>
            <div><b>Calculate fibonacci - </b>{fibonacciNumber}</div>
            <div>Result = {fibonacciCycle(fibonacciNumber)}</div>
        </div>
    )
})