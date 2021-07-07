//intersection of arrays
export const IntersectionOfArrays = () => {
    const input1 = [1, 2, 2, 1]
    const input2 = [2, 2]
//output: [2,2]
    const input3 = [4, 9, 5]
    const input4 = [9, 4, 9, 8, 4]
//output: [4,9] or [9,4]

    // const intersect = (nums1, nums2) => {
    //     let resultArr = []
    //     for(let i = 0; i < nums1.length; i++){
    //         for(let j = 0; j < nums2.length; j++){
    //             if(nums1[i] !== 'undefined' && nums1[i] === nums2[j]){
    //                 resultArr.push(nums1[i])
    //                 delete nums1[i]
    //                 delete nums2[j]
    //                 break;
    //             }
    //         }
    //     }
    //     return resultArr
    // }
    // console.log(intersect(input1, input2))
    // console.log(intersect(input3, input4))

// сложность алгоритма O(n + m)
// сложность по памяти O(n)
    const intersect2 = (nums1, nums2) => {
        let result = []

        let map = nums1.reduce((acc, i) => {
            acc[i] = acc[i] ? acc[i] + 1 : 1
            return acc
        }, {})

        for (let i = 0; i < nums2.length; i++) {
            const current = nums2[i]
            let count = map[current]
            if (count && count > 0) {
                result.push(current)
                map[current] -= 1
            }
        }
        console.log(map)
        return result
    }

    console.log(intersect2(input1, input2))
    console.log(intersect2(input3, input4))
    return (
        <div></div>
    )
}
