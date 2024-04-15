var stdCombatants = [{"NAME":"Commonner","HP": 4, "DANO": 0, "DADODANO":6, "TOHIT": 2, "CA": 10}]

function calculo() {
    console.log("calculo")
    let hp1 = document.getElementById("HP").value
    let dadodano1 = document.getElementById("DADODANO").value
    let dano1 = document.getElementById("DANO").value
    let tohit = document.getElementById("TOHIT").value
    let ca = document.getElementById("CA").value
    let hp2 = document.getElementById("HP2").value
    let dadodano2 = document.getElementById("DADODANO2").value
    let dano2 = document.getElementById("DANO2").value
    let tohit2 = document.getElementById("TOHIT2").value
    let ca2 = document.getElementById("CA2").value

    let x1 = { "HP": hp1, "DANO": dano1, "DADODANO":dadodano1, "TOHIT": tohit, "CA": ca }
    let x2 = { "HP": hp2, "DANO": dano2, "DADODANO":dadodano2, "TOHIT": tohit2, "CA": ca2 }
    let count = 0;
    do {
        if (D20(x2.TOHIT) >= x1.CA) {
            let dano1 = roll(x2.DADODANO, x2.DANO)
            x1.HP = x1.HP - dano1 
            msg1 = `X2 Acertou X1 e causou ${dano1} de dano`
        }else{
            msg1 = "X2 Errou X1"
        }

        if (D20(x1.TOHIT) >= x2.CA) {
            let dano2 = roll(x1.DADODANO, x1.DANO)
            x2.HP = x2.HP - dano2
            msg2 = ` X1 Acertou X2 e causou ${dano2} de dano`
        }else{
            msg2 = " X1 Errou X2"
        }
        count ++
        console.log(`${count}º| ${msg1 + msg2}\nx1 hp: ${x1.HP} | x2 hp: ${x2.HP}`)
    }
    while (x1.HP > 0 && x2.HP > 0)
    console.log("acabo")
}

function D20(bonus) {
    return (Math.floor(Math.random() * 19 + 1)) + Number(bonus)
}

function roll(dice, bonus){
    result = Math.floor(Math.random() * (dice - 1) + 1) + Number(bonus)
    return result
}