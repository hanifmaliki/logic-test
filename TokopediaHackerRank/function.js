function subsetA(arr) {

    let a = []
    let b = arr

    let a_sum = 0
    let b_sum = 0

    let max = {
        val: 0,
        idx: 0
    }

    while (a_sum <= b_sum) {
        b.forEach((el, idx) => {
            if (idx == 0) {
                max = {
                    val: el,
                    idx: idx
                }
            } else if (el > max.val) {
                max = {
                    val: el,
                    idx: idx
                }
            }
        })

        a.unshift(max.val)
        b.splice(max.idx, 1)

        a_sum = 0
        a.forEach((el) => {
            a_sum += el
        })
        b_sum = 0
        b.forEach((el) => {
            b_sum += el
        })
    }

    return a
}

function firstRepeatedWord(sentence) {
    let splitted = sentence.split(/[,\:;\-.\s]/)
    let arr = []
    let repeat = ''
    splitted.forEach((el) => {
        if (arr.includes(el) && repeat == '') {
            repeat = el
        } else {
            arr.push(el)
        }
    })
    return repeat
}

function collision(speed, pos) {
    let count = 0
    speed.forEach((el, idx) => {
        if (idx < pos && el > speed[pos]) {
            count++
        }
        if (idx > pos && el < speed[pos]) {
            count++
        }
    })
    return count
}