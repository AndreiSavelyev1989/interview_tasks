import React, {useEffect, useState} from "react";

export const PromiseExampleTasks = React.memo(() => {
    //What will we see?
    const PromiseEx1 = () => {
        const pr1 = Promise.reject(12)
        const pr2 = Promise.resolve(13)

        pr1.then(r => console.log(r))
        pr2.then(r => console.log(r))
    }
    //We will see 12 in console, what we must change in this code:
    // const PromiseEx2 = () => {
    //     const pr1 = new Promise(() => {
    //
    //     })
    //     pr1.then(res => console.log(res))
    // }
    const PromiseEx2 = () => {
        const pr1 = new Promise((resolve) => {
            resolve(12)
        })
        pr1.then(res => console.log(res))
    }
//We will see timer in browser, we must change this code:
    // const [count, setCount] = useState(1)
    // useEffect(() => {
    //    setInterval(() => setCount(count + 1), 1000)
    // }, [])

    const [count, setCount] = useState(1)
    useEffect(() => {
        const intervalId = setInterval(() => setCount(count + 1), 1000)
        return () => clearInterval(intervalId)
    }, [count])

    //
    return (
        <div>
            <div>{PromiseEx1()}</div>
            <div>{PromiseEx2()}</div>
            <div><b>Timer:</b> {count}</div>
        </div>
    )
})