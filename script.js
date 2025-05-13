function divide(arr, n) {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        // Check if adding the current number exceeds the maximum sum 'n'
        if (currentSum + num <= n) {
            // If no, add the number to the current subarray
            currentSubarray.push(num);
            currentSum += num;
        } else {
            // If yes, push the current subarray to the result and start a new subarray
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    // Add the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}
