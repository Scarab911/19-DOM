function tortoGabalas(tortuKiekis, zmoniuKiekis, tortoSvoris) {
    const svorisGramais = tortoSvoris * 1000;
    const tortoLikutis = (tortuKiekis * svorisGramais) % zmoniuKiekis;
    console.log(tortoLikutis);
    console.log(Math.floor(tortuKiekis * svorisGramais / zmoniuKiekis))
}

console.log(tortoGabalas(3, 17, 1));