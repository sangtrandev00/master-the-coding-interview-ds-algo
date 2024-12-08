

// [0,3,4,12] 
// [4,6,30]
// [0,3,4,4,6,12,30]

function mergeSortedArray(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return

    if(arr1.length === 0) return arr2
    if(arr2.length === 0) return arr1

    return [...arr1, ...arr2].sort() // OlogN
}

function mergeSortedArray2(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return
    if(arr1.length === 0) return arr2
    if(arr2.length === 0) return arr1

    const mergeArray = []
    let arr1FirstItem = arr1[0]
    let arr2FirstItem = arr2[0]

    let i = 1
    let j = 1
    while(true) {

        // arr1 [0, 3, 4, 31]
        // arr2 [4, 6, 30]
        // merge [0, 3, 4, 4, 6, 30]
        if(i > arr1.length - 1 && j > arr2.length - 1) {
            break
        }

        if(arr2FirstItem === undefined || arr1FirstItem < arr2FirstItem) {
            mergeArray.push(arr1FirstItem)
            i++
            arr1FirstItem = arr1[i]
        }else {
            mergeArray.push(arr2FirstItem)
            j++
            arr2FirstItem = arr2[i]
        }
    }

    return mergeArray

}