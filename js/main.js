function time(nuo, iki, minIntervalas) {
    // darbas turi vykti su tais paciais matavimo vienetais!!!
    for (let i = nuo * 60; i < iki * 60; i += minIntervalas) {
        const valandos = Math.floor(i / 60);
        const sekundes = i % 60;
        console.log(`${valandos}:${sekundes < 10 ? '0' + sekundes : sekundes}`);
    }
}
time(1, 7, 38);

/*
1: 00
1: 45
2: 30
3: 15
4:00
*/


























/*-----------------------------*/

// function time(nuo, iki) {
//     const laikasIkiVidurnakcio = 24 - nuo;

//     if (nuo > iki) {
//         for (let h = nuo; h <= nuo + laikasIkiVidurnakcio; h++) {
//             if (h === 24) {
//                 for (let h = 0; h < iki; h++) {

//                     console.log(`${h}`);

//                 }
//             }
//         }
//     }
// }