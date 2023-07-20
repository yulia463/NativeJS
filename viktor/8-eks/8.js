function getSum(number) {
    let res = 0;
    let toSrt = number.toString().split('')
    for (let i = 0; i < toSrt.length; i++) {
        res+= Number(toSrt[i])
    }

    return res

}

//console.log((getSum(55)))
function getSquarePositiveIntegers(array) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
  let result=  array.filter(el=>( el % 1 === 0)&&(el > 0)).map(el=>el *el)
    return result
}

//console.log(getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]))

function sumFirstNumbers(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1 + sumFirstNumbers(1);
    }
    return N
}
console.log(sumFirstNumbers(34))