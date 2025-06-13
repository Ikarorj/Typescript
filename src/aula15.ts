//Parâmtros read e spread


function algumaSoma(n: number[]) {
    let s: number = 0;
    for(let en of n) {
        s+=en;
    }
    // n.forEach((en) => {
    //     s+= en;
    // })
    return s;

};

