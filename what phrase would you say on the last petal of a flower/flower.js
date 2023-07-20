/*
Кто помнит свое время на школьном дворе, когда девочки брали цветок и рвали его лепестки, произнося каждую из следующих
 фраз каждый раз, когда отрывался лепесток:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
Если лепестков больше 6, вы начинаете сначала "I love you"для 7 лепестков, "a little"для 8 лепестков и так далее.

Когда был сорван последний лепесток, раздались крики волнения, мечты, нахлынувшие мысли и эмоции.

Ваша цель в этой ката - определить, какую фразу девушки сказали бы на последнем лепестке цветка с заданным количеством
лепестков. Количество лепестков всегда больше 0.
  assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
 */
// function howMuchILoveYou(nbPetals) {
//     let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
//     if (nbPetals < 7){
//         return  arr[nbPetals-1]
//     }
//
//     return arr[(nbPetals-1)%6]
// }

// console.log(howMuchILoveYou(7))