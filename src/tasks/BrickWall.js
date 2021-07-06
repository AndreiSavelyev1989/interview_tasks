export const BrickWall = () => {
    const wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]
    // const wall = [[1], [1], [1]]
    const leastBricks = (wall) => {
        let map = {}
        let max = 0
        wall.forEach(row => {
            let sum = 0
            for (let n = 0; n < row.length - 1; n++) {
                sum += row[n]
                map[sum] = map[sum] ? map[sum] + 1 : 1
                // if(max < map[sum]){
                //     max = map[sum]
                // }
                max = Math.max(map[sum], max)
            }
        })
        console.log(map)
        return wall.length - max
    }
    console.log(leastBricks(wall))
    return (
        <>
            <div><b>Bricks wall:</b></div>
            <div style={{border: '1px solid'}}>
                {wall.map((row, index) => {
                    return <div key={index} style={{maxWidth: '600px', height: '50px'}}>
                        {row.map((el, index) => {
                            return <span key={index} style={{
                                width: `${el * 100}px`,
                                height: '50px',
                                border: '1px solid',
                                display: 'inline-block'
                            }}> </span>
                        })}
                    </div>
                })}
            </div>
            <div>The smallest number of intersecting bricks: {leastBricks(wall)}</div>
        </>
    )
}

