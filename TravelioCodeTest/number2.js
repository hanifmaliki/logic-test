function compare(a, b) {
    const spa = a.split('|')
    const spb = b.split('|')
    if (spa[2] < spb[2]) return -1
    if (spa[2] > spb[2]) return 1
    if (spa[2] == spb[2]) {
        if (spa[1] > spb[1]) return -1
        if (spa[1] < spb[1]) return 1
    }
    return 0
}

function sortData(data) {
    data.sort((a, b) => compare(a, b))
    data.forEach((el, idx) => {
        data[idx] = el.split('|')[0]
    });
    return data
}

const data = [
    'evan|50000|D',
    'jefry|70000|C',
    'rizky|30000|D',
    'hanson|10000|B',
    'candra|30000|A',
    'goklas|20000|A',
    'hendra|20000|B',
    'surya|30000|A',
]

console.log(sortData(data))