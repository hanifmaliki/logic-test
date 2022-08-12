function getPlanetToDestroy(planets) {
    for (let i = 0; i < planets.length; i++) {
        let arr = [...planets]
        arr.splice(i, 1)
        let countOdd = 0;
        let countEven = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j % 2 === 0) { countOdd += arr[j] }
            if (j % 2 === 1) { countEven += arr[j] }
        }
        if (countOdd === countEven) {
            return i + 1
        }
    }
    return -1
}