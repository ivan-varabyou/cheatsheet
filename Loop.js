for in => for (let key in object)
for of => for (item of array)
for await of => async fn * fo(){ yeld 1 } => async function () { for await (const num of foo()) { break; continue } }
for (let i; i < 10; i++) { break; continue }
while (isTrue) { break; continue }



ii
for (var ii = 0; ii < 100; ii++) {
   () => console.log(ii)
}; // from 0 to 99

ii2
for (var ii2 = 0; ii2 < 100; ii2++) {
    setTimeout(() => console.log(ii2));
}; //! all 100

// ii3 // is not defined
for (let ii3 = 0; ii3 < 100; ii3++) {
    setTimeout(() => console.log(ii3));
} // from 0 to 99


ii4
for (var ii4 = 0; ii4 < 100; ii4++) {
    (() => setTimeout(() => console.log(ii4)))(ii4)
} //! all 100

ii5;
for (var ii5 = 0; ii5 < 100; ii5++) {
    (() => { setTimeout(() => console.log(ii5)) })(ii5)
}  //! all 100


ii6
for (var ii6 = 0; ii6 < 100; ii6++) {
    (function () { setTimeout(() => console.log(ii6)) })(ii6)
}  //! all 100


for (let ii7 = 0; ii7 < 100; ii7++) {
    (function () { setTimeout(() => console.log(ii7)) })(ii7)
}  // from 0 to 99