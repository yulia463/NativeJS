/*
написать функции и найти самое короткое слово
 */
function shortWord(str) {
   let res = str.split(' ')
    return res.reduce((shortest, currentWord) => {
        return currentWord.length < shortest.length ? currentWord : shortest;
    }, res[0]);

}

console.log(shortWord('Чередование интервалов высокой и низкой интенсивности физических нагрузок.'))