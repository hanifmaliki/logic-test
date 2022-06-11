function printStar(count) {
    for (let i = 0; i < count; i++) {
        let bintang = '';
        for (let j = 0; j <= i; j++) {
            bintang += '*'
        }
        console.log(bintang)
    }
}

printStar(5);