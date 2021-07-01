export const ReceiveMinMaxValue = () => {
    const numbers = [1, 2, 88, 100, -2, 13]

    let minValue = numbers[0]
    let maxValue = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i]
        }
        if (numbers[i] > maxValue) {
            maxValue = numbers[i]
        }
    }
    console.log(`minValue: ${minValue}, maxValue: ${maxValue}`)
    return (
        <div>
            <b>Receive min and max value from array:</b>
            <div><span>Array: </span>[{numbers.map(num => <span key={num}>{`${num}, `}</span>)}]</div>
            <div><span>Min value: </span>{minValue}</div>
            <div><span>Max value: </span>{maxValue}</div>
        </div>
    )
}