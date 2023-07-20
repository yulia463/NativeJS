/*
Полная функция saleHotdogs/ SaleHotDogs/ sale_hotdogs, функция принимает 1 параметр: n, n — количество хот-догов,
которые купит клиент, разные числа имеют разные цены (см. следующую таблицу), возвращает, сколько денег покупатель
 потратит, чтобы купить это количество хот-догов.

количество хот-догов	цена за единицу (центы)
п < 5	100
n >= 5 и n < 10	95
п >= 10	90
Вы можете использовать if..else или тернарный оператор для его завершения.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code and pass this kata.
    assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);
 */
// function saleHotdogs(n){
//     return  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90 ;
// }
//
// console.log(saleHotdogs(400))