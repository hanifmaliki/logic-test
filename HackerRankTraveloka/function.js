function slowestKey(keyTimes) {
    let key = [];
    let longest = 0;
    for (let i = 0; i < keyTimes.length; i++) {
        if (i === 0) {
            key = keyTimes[i]
            longest = keyTimes[i][1]
        }
        if (i > 0) {
            if (keyTimes[i][1] - keyTimes[i - 1][1] >= longest) {
                key = keyTimes[i]
                longest = keyTimes[i][1] - keyTimes[i - 1][1]
            }
        }
    }
    return String.fromCharCode(key[0] + 97)
}

function ways(total, k) {
    let arr = Array.from({ length: total + 1 }, () => 0)
    arr[0] = 1;

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= total; j++) {
            if (j >= i) {
                arr[j] = arr[j] + arr[j - i];
            }
        }
    }
    return arr[total] % 1000000007
}