var stdCombatants = [
    { "NAME": "Commoner", "HP": 4, "DANO": 0, "DADODANO": 6, "TOHIT": 2, "CA": 10 },
    { "NAME": "Goblin", "HP": 7, "DANO": 2, "DADODANO": 6, "TOHIT": 2, "CA": 15 }
]

function calculo() {
    console.log("calculo")
    let combatants = []
    let count = 0;
    for (i = 1; i < 3; i++) {
        combatants[(i - 1)] = {
            "HP": document.getElementById("HP" + i).value,
            "DANO": document.getElementById("DANO" + i).value,
            "DADODANO": document.getElementById("DADODANO" + i).value,
            "TOHIT": document.getElementById("TOHIT" + i).value,
            "CA": document.getElementById("CA" + i).value
        }
    }
    let x1 = combatants[0]
    let x2 = combatants[1]
    do {
        if (D20(x2.TOHIT) >= x1.CA) {
            let dano1 = roll(x2.DADODANO, x2.DANO)
            x1.HP = x1.HP - dano1
            msg1 = `X2 Acertou X1 e causou ${dano1} de dano`
        } else {
            msg1 = "X2 Errou X1"
        }

        if (D20(x1.TOHIT) >= x2.CA) {
            let dano2 = roll(x1.DADODANO, x1.DANO)
            x2.HP = x2.HP - dano2
            msg2 = ` X1 Acertou X2 e causou ${dano2} de dano`
        } else {
            msg2 = " X1 Errou X2"
        }
        count++
        console.log(`${count}º| ${msg1 + msg2}\nx1 hp: ${x1.HP} | x2 hp: ${x2.HP}`)
    }
    while (x1.HP > 0 && x2.HP > 0)
    console.log("acabo")
}

function D20(bonus) {
    return (Math.floor(Math.random() * 19 + 1)) + Number(bonus)
}

function roll(dice, bonus) {
    return Math.floor(Math.random() * (dice - 1) + 1) + Number(bonus)
}

function vrau(e, card) {
    let combatantID = e.value
    if (e.value == "Blank") {
        console.log(`Limpar o card ${card}`)
        document.getElementById("HP" + card).value = ""
        document.getElementById("DANO" + card).value = ""
        document.getElementById("DADODANO" + card).value = ""
        document.getElementById("TOHIT" + card).value = ""
        document.getElementById("CA" + card).value = ""
    } else {
        console.log(`O combatente padrão: ${combatantID} sera adicionado ao card ${card}`)
        document.getElementById("HP" + card).value = stdCombatants[e.value].HP
        document.getElementById("DANO" + card).value = stdCombatants[e.value].DANO
        document.getElementById("DADODANO" + card).value = stdCombatants[e.value].DADODANO
        document.getElementById("TOHIT" + card).value = stdCombatants[e.value].TOHIT
        document.getElementById("CA" + card).value = stdCombatants[e.value].CA        
    }
}

