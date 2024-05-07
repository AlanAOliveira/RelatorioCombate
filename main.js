var stdCombatants = [
    { "NAME": "Commoner", "HP": 4, "DANO": 0, "DADODANO": 6, "TOHIT": 2, "CA": 10 },
    { "NAME": "Goblin", "HP": 7, "DANO": 2, "DADODANO": 6, "TOHIT": 2, "CA": 15 }
]

var combatdata = {"actors":1}


function calculo() {
    console.log("calculo")
    let combatants = []
    let count = 0;
    for (i = 1; i <= combatdata.actors; i++) {
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
    let calc = (Math.floor(Math.random() * 20 + 1)) + Number(bonus)
    return (calc > 0) ? calc : 0; 
}

function tryd20(){
    let res = 0
    let count = 0
    while(res != 1 && count < 100){
        res = D20(0)
        console.log(`${res}||${count}`)
        count++
    }
}

function roll(dice, bonus) {
    let calc = Math.floor(Math.random() * (dice) + 1) + Number(bonus)
    return (calc > 0) ? calc : 0;
}

function beb(e, card) {
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

async function addcombatant(){

    combatdata.actors++
    num = combatdata.actors
    cardcontainer = document.getElementById("cardcontainer").innerHTML
    card = `<div class="card col-4" id="card${num}">
    <div class="card-body">
        <p>Presets</p>
        <select onchange="beb(this, ${num})" id="preset${num}" class="form-select" aria-label="presets">
            <option selected>Blank</option>
            <option value="0">Commoner</option>
            <option value="1">Goblin</option>
          </select>
        <p>hp</p>
        <input class="form-control m-2" id="HP${num}" type="number">
        <p>dado de dano</p>
        <select id="DADODANO${num}" class="form-select" aria-label="Dado de dano">
            <option selected>Selecione um dado</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        <p>bonus</p>
        <input class="form-control m-2" id="DANO${num}" type="number">
        <p>bonus de acerto</p>
        <input class="form-control m-2" id="TOHIT${num}" type="number">
        <p>CA</p>
        <input class="form-control m-2" id="CA${num}" type="number">
    </div>
</div>`
document.getElementById("cardcontainer").innerHTML = cardcontainer + card
}



