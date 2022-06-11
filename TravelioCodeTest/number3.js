function reverseWord(kata) {
    let rw = ''
    for (i = 1; i <= kata.length; i++) {
        rw += kata[kata.length - i]
    }
    if (kata == rw) return 'palindrom'
    return 'not palindrom'
}

console.log(reverseWord('hallah'))