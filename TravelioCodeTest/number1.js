function secondLargest(input) {
    let asc = [...input]
    asc.sort((a, b) => a - b);
    return asc[asc.length - 2]
}

function secondLargest2(input) {
    let largest = null;
    input.forEach(el => {
        if (largest != null) {
            if (largest < el) {
                largest = el
            }
        }
        else {
            largest = el
        }
    });

    let largest2 = null;
    input.forEach(el => {
        if (el != largest) {
            if (largest2 != null) {
                if (largest2 < el) {
                    largest2 = el
                }
            }
            else {
                largest2 = el
            }
        }
    });

    return largest2
}

const input = [12, 5, 7, 17, 8, 0, -1, 16, 7]

console.log(secondLargest(input))
console.log(secondLargest2(input))