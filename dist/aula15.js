"use strict";
//Parâmtros read e spread
function algumaSoma(n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    // n.forEach((en) => {
    //     s+= en;
    // })
    return s;
}
;
