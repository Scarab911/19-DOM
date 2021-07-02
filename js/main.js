function tortoGabalas(tortuKiekis, zmoniuKiekis, tortoSvoris) {
    //torto gabaliukai turi buti identiski! O ne tik  svoris porcijos!
    const zmonesVienamTortui = Math.ceil(zmoniuKiekis / tortuKiekis)
    const porcija = Math.floor((tortoSvoris * 1000) / zmonesVienamTortui);
    return porcija
}

console.log(tortoGabalas(3, 17, 1));