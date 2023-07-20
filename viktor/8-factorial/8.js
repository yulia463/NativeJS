// function pow(x, n) {
// let result = 1;
// // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// 	}

// alert( pow(2, 3) ); // 8-factorial

// function pow(x,n) {
// return (n==1)?x:(x*pow(x,n-1))
// }
// alert(pow(2,3));

// function factorial (a) {
// let res = 1
//     for (let i=1; i<=a; i++) {
//       res = res*i
//     }
// return res
//
// }
// function factorial (a) {
//     return (a==1) ? a : a * factorial(a-1)
// }
//      alert( factorial(5) ); // 120
function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }

    return result;

}

console.log(fib(8));

function fib(n) {
    let localArr = []
    if (n <= 1) {
        n
    } else {
        console.log(localArr.push)
        fib(n - 2) + fib(n - 1)
    }
}

console.log(fib(3)); //2

function fibonacci(n) {
    if (n <= 2)
        return [0, 1].slice(0, n);
    const res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2])
    return res;
}


//
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// function alertList(list){
//     while (list){
//         alert(list.value)
//         list= list.next
//     }
// }
//console.log(alertList(list))

function alertListValue(list) {
    if (list.next == null) {
        console.log(list.value)
       return
    }
    console.log(list.value)
    alertListValue(list.next)

}

alertListValue(list)



// let calculator = {
//
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

