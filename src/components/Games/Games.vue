<template>
    <div class="WENS">
        <ul class="WENS__field">
            <li
                v-for="count in content.WENSFieldCells"
                :key="count"
                class="WENS__field-cell"
                :class="'pos-' + count"
                @click="handleFieldClick">
                {{ count }}
            </li>

            <!-- старт/дом и финиш каждого игрока -->
            <li class="WENS__field-cell south-start-1">ss1</li>
            <li class="WENS__field-cell south-start-2">ss2</li>
            <li class="WENS__field-cell south-start-3">ss3</li>
            <li class="WENS__field-cell south-start-4">ss4</li>
            <li class="WENS__field-cell south-finish-1">sf1</li>
            <li class="WENS__field-cell south-finish-2">sf2</li>
            <li class="WENS__field-cell south-finish-3">sf3</li>
            <li class="WENS__field-cell south-finish-4">sf4</li>

            <li class="WENS__field-cell west-start-1">ws1</li>
            <li class="WENS__field-cell west-start-2">ws2</li>
            <li class="WENS__field-cell west-start-3">ws3</li>
            <li class="WENS__field-cell west-start-4">ws4</li>
            <li class="WENS__field-cell west-finish-1">wf1</li>
            <li class="WENS__field-cell west-finish-2">wf2</li>
            <li class="WENS__field-cell west-finish-3">wf3</li>
            <li class="WENS__field-cell west-finish-4">wf4</li>

            <li class="WENS__field-cell north-start-1">ns1</li>
            <li class="WENS__field-cell north-start-2">ns2</li>
            <li class="WENS__field-cell north-start-3">ns3</li>
            <li class="WENS__field-cell north-start-4">ns4</li>
            <li class="WENS__field-cell north-finish-1">nf1</li>
            <li class="WENS__field-cell north-finish-2">nf2</li>
            <li class="WENS__field-cell north-finish-3">nf3</li>
            <li class="WENS__field-cell north-finish-4">nf4</li>

            <li class="WENS__field-cell east-start-1">es1</li>
            <li class="WENS__field-cell east-start-2">es2</li>
            <li class="WENS__field-cell east-start-3">es3</li>
            <li class="WENS__field-cell east-start-4">es4</li>
            <li class="WENS__field-cell east-finish-1">ef1</li>
            <li class="WENS__field-cell east-finish-2">ef2</li>
            <li class="WENS__field-cell east-finish-3">ef3</li>
            <li class="WENS__field-cell east-finish-4">ef4</li>

            <!-- фишки игрока -->
            <li class="WENS__field-cell" :class="'pos-' + posSouth1" @click="handlePlayerSouth1">
                <span class="player-south">s1</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posSouth2" @click="handlePlayerSouth2">
                <span class="player-south">s2</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posSouth3" @click="handlePlayerSouth3">
                <span class="player-south">s3</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posSouth4" @click="handlePlayerSouth4">
                <span class="player-south">s4</span>
            </li>

            <li class="WENS__field-cell" :class="'pos-' + posWest1" @click="handlePlayerWest1">
                <span class="player-west">w1</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posWest2" @click="handlePlayerWest2">
                <span class="player-west">w2</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posWest3" @click="handlePlayerWest3">
                <span class="player-west">w3</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posWest4" @click="handlePlayerWest4">
                <span class="player-west">w4</span>
            </li>

            <li class="WENS__field-cell" :class="'pos-' + posNorth1" @click="handlePlayerNorth1">
                <span class="player-north">n1</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posNorth2" @click="handlePlayerNorth2">
                <span class="player-north">n2</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posNorth3" @click="handlePlayerNorth3">
                <span class="player-north">n3</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posNorth4" @click="handlePlayerNorth4">
                <span class="player-north">n4</span>
            </li>

            <li class="WENS__field-cell" :class="'pos-' + posEast1" @click="handlePlayerEast1">
                <span class="player-east">e1</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posEast2" @click="handlePlayerEast2">
                <span class="player-east">e2</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posEast3" @click="handlePlayerEast3">
                <span class="player-east">e3</span>
            </li>
            <li class="WENS__field-cell" :class="'pos-' + posEast4" @click="handlePlayerEast4">
                <span class="player-east">e4</span>
            </li>

            <!-- кнопка бросить кубик -->
            <li class="WENS__field-roll-dice"
                :class="{'west': isWestDice, 'east': isEastDice, 'north': isNorthDice, 'south': isSouthDice}">
                <button type="button" @click="handleRollDice">{{ diceInscription }}</button>
            </li>
        </ul>

        <!-- кубики -->
        <p class="WENS__dice dice-1">{{ dice1 }}</p>
        <p class="WENS__dice dice-2">{{ dice2 }}</p>
    </div>
</template>

<script>
import content from "@/content/content.json";

export default {
    name: "Games",
    data() {
        return {
            content,
            dice1: 6,
            dice2: 6,
            diceInscription: "roll dice",
            turn: 1,
            // расположение кнопки кубика
            isSouthDice: true,
            isWestDice: false,
            isNorthDice: false,
            isEastDice: false,
            // позиция фишек у каждого игрока
            posSouth1: 'south-1',
            posSouth2: 'south-2',
            posSouth3: 'south-3',
            posSouth4: 'south-4',
            posWest1: 'west-1',
            posWest2: 'west-2',
            posWest3: 'west-3',
            posWest4: 'west-4',
            posNorth1: 'north-1',
            posNorth2: 'north-2',
            posNorth3: 'north-3',
            posNorth4: 'north-4',
            posEast1: 'east-1',
            posEast2: 'east-2',
            posEast3: 'east-3',
            posEast4: 'east-4',
            // флаг движения фишек у каждого игрока
            isMoveSouth1: "home",
            isMoveSouth2: "home",
            isMoveSouth3: "home",
            isMoveSouth4: "home",
            isMoveWest1: "home",
            isMoveWest2: "home",
            isMoveWest3: "home",
            isMoveWest4: "home",
            isMoveNorth1: "home",
            isMoveNorth2: "home",
            isMoveNorth3: "home",
            isMoveNorth4: "home",
            isMoveEast1: "home",
            isMoveEast2: "home",
            isMoveEast3: "home",
            isMoveEast4: "home",
        }
    },
    methods: {
        handleRollDice() { // бросок кубика
            console.log("handleRollDice", this.isWestDice)
            // рандомное значение кубиков
            this.dice1 = Math.floor(1 + Math.random() * 6)
            this.dice2 = Math.floor(1 + Math.random() * 6)
            // условие перехода хода
            if (this.dice1 !== this.dice2) { // если кубики не равны
                if (this.isSouthDice && this.isMoveSouth1 === "home" && this.isMoveSouth2 === "home" && this.isMoveSouth3 === "home" && this.isMoveSouth4 === "home") { // если кубики бросает соответствующий игрок и все фишки игрока дома
                    this.turn++
                    this.diceInscription = "roll dice"
                }
                if (this.isWestDice && this.isMoveWest1 === "home" && this.isMoveWest2 === "home" && this.isMoveWest3 === "home" && this.isMoveWest4 === "home") {
                    this.turn++
                    this.diceInscription = "roll dice"
                }
                if (this.isNorthDice && this.isMoveNorth1 === "home" && this.isMoveNorth2 === "home" && this.isMoveNorth3 === "home" && this.isMoveNorth4 === "home") {
                    this.turn++
                    this.diceInscription = "roll dice"
                }
                if (this.isEastDice && this.isMoveEast1 === "home" && this.isMoveEast2 === "home" && this.isMoveEast3 === "home" && this.isMoveEast4 === "home") {
                    this.turn = 1
                    this.diceInscription = "roll dice"
                }
            } else {
                this.diceInscription = "go"
            }
            // if (this.turn === 1 || this.turn === 5) { // ходит юг
            //     this.turn = 1;
            if (this.turn === 1) { // ходит юг
                this.isSouthDice = true;
                this.isWestDice = false;
                this.isNorthDice = false;
                this.isEastDice = false;
            } else if (this.turn === 2) { // ходит запад
                this.isSouthDice = false;
                this.isWestDice = true;
                this.isNorthDice = false;
                this.isEastDice = false;
            } else if (this.turn === 3) { // ходит север
                this.isSouthDice = false;
                this.isWestDice = false;
                this.isNorthDice = true;
                this.isEastDice = false;
            } else { // ходит восток
                this.isSouthDice = false;
                this.isWestDice = false;
                this.isNorthDice = false;
                this.isEastDice = true;
            }
        },
        moveToSouth() {
            this.turn = 1
            this.diceInscription = "roll dice"
            this.isSouthDice = true;
            this.isWestDice = false;
            this.isNorthDice = false;
            this.isEastDice = false;
        },
        moveToWest() {
            this.turn++
            this.diceInscription = "roll dice"
            this.isSouthDice = false;
            this.isWestDice = true;
            this.isNorthDice = false;
            this.isEastDice = false;
        },
        moveToNorth() {
            this.turn++
            this.diceInscription = "roll dice"
            this.isSouthDice = false;
            this.isWestDice = false;
            this.isNorthDice = true;
            this.isEastDice = false;
        },
        moveToEast() {
            this.turn++
            this.diceInscription = "roll dice"
            this.isSouthDice = false;
            this.isWestDice = false;
            this.isNorthDice = false;
            this.isEastDice = true;
        },
        // playerTurn(chipMove, fieldNumber, chipPosition) {
        //     if (chipMove === "home-go") { // если игрок находится дома
        //         if (fieldNumber !== "0") return // после взятия фишки разрешаю становиться только в начало
        //         chipPosition = fieldNumber; // меняю позицию игрока
        //         chipMove = "field"; // даем статус фишке "поле"
        //     } else if (chipMove === "field-go") {
        //         if (fieldNumber !== "5") return
        //         chipPosition = fieldNumber;
        //         chipMove = "field";
        //     }
        //     // передаю ход дальше
        //     this.moveToWest()
        // },
        handleFieldClick(e) { // клик по полю
            console.log("handleFieldClick", e)
            const fieldNumber = e.target.classList[1].split("-")[1]
            if (this.isMoveSouth1) { // ЭТО ЛИШНЕЕ УДАЛИ
                // this.playerTurn(this.isMoveSouth1, fieldNumber, this.posSouth1)
                if (this.isMoveSouth1 === "home-go") {
                    if (fieldNumber !== "0") return
                    this.posSouth1 = fieldNumber
                    this.isMoveSouth1 = "field"
                    this.moveToWest()
                } else if (this.isMoveSouth1.includes("field-go")) {
                    const movePos = this.isMoveSouth1.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posSouth1 = fieldNumber
                    this.isMoveSouth1 = "field"
                    this.moveToWest()
                }
            }
            if (this.isMoveSouth2) {
                if (this.isMoveSouth2 === "home-go") {
                    if (fieldNumber !== "0") return
                    this.posSouth2 = fieldNumber
                    this.isMoveSouth2 = "field"
                    this.moveToWest()
                } else if (this.isMoveSouth2.includes("field-go")) {
                    const movePos = this.isMoveSouth2.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posSouth2 = fieldNumber
                    this.isMoveSouth2 = "field"
                    this.moveToWest()
                }
            }
            if (this.isMoveSouth3) {
                if (this.isMoveSouth3 === "home-go") {
                    if (fieldNumber !== "0") return
                    this.posSouth3 = fieldNumber
                    this.isMoveSouth3 = "field"
                    this.moveToWest()
                } else if (this.isMoveSouth3.includes("field-go")) {
                    const movePos = this.isMoveSouth3.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posSouth3 = fieldNumber
                    this.isMoveSouth3 = "field"
                    this.moveToWest()
                }
            }
            if (this.isMoveSouth4) {
                if (this.isMoveSouth4 === "home-go") {
                    if (fieldNumber !== "0") return
                    this.posSouth4 = fieldNumber
                    this.isMoveSouth4 = "field"
                    this.moveToWest()
                } else if (this.isMoveSouth4.includes("field-go")) {
                    const movePos = this.isMoveSouth4.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posSouth4 = fieldNumber
                    this.isMoveSouth4 = "field"
                    this.moveToWest()
                }
            }

            if (this.isMoveWest1) {
                if (this.isMoveWest1 === "home-go") {
                    if (fieldNumber !== "14") return
                    this.posWest1 = fieldNumber
                    this.isMoveWest1 = "field"
                    this.moveToNorth()
                } else if (this.isMoveWest1.includes("field-go")) {
                    const movePos = this.isMoveWest1.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posWest1 = fieldNumber
                    this.isMoveWest1 = "field"
                    this.moveToNorth()
                }
            }
            if (this.isMoveWest2) {
                if (this.isMoveWest2 === "home-go") {
                    if (fieldNumber !== "14") return
                    this.posWest2 = fieldNumber
                    this.isMoveWest2 = "field"
                    this.moveToNorth()
                } else if (this.isMoveWest2.includes("field-go")) {
                    const movePos = this.isMoveWest2.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posWest2 = fieldNumber
                    this.isMoveWest2 = "field"
                    this.moveToNorth()
                }
            }
            if (this.isMoveWest3) {
                if (this.isMoveWest3 === "home-go") {
                    if (fieldNumber !== "14") return
                    this.posWest3 = fieldNumber
                    this.isMoveWest3 = "field"
                    this.moveToNorth()
                } else if (this.isMoveWest3.includes("field-go")) {
                    const movePos = this.isMoveWest3.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posWest3 = fieldNumber
                    this.isMoveWest3 = "field"
                    this.moveToNorth()
                }
            }
            if (this.isMoveWest4) {
                if (this.isMoveWest4 === "home-go") {
                    if (fieldNumber !== "14") return
                    this.posWest4 = fieldNumber
                    this.isMoveWest4 = "field"
                    this.moveToNorth()
                } else if (this.isMoveWest4.includes("field-go")) {
                    const movePos = this.isMoveWest4.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posWest4 = fieldNumber
                    this.isMoveWest4 = "field"
                    this.moveToNorth()
                }
            }

            if (this.isMoveNorth1) {
                if (this.isMoveNorth1 === "home-go") {
                    if (fieldNumber !== "28") return
                    this.posNorth1 = fieldNumber
                    this.isMoveNorth1 = "field"
                    this.moveToEast()
                } else if (this.isMoveNorth1.includes("field-go")) {
                    const movePos = this.isMoveNorth1.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posNorth1 = fieldNumber
                    this.isMoveNorth1 = "field"
                    this.moveToEast()
                }
            }
            if (this.isMoveNorth2) {
                if (this.isMoveNorth2 === "home-go") {
                    if (fieldNumber !== "28") return
                    this.posNorth2 = fieldNumber
                    this.isMoveNorth2 = "field"
                    this.moveToEast()
                } else if (this.isMoveNorth2.includes("field-go")) {
                    const movePos = this.isMoveNorth2.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posNorth2 = fieldNumber
                    this.isMoveNorth2 = "field"
                    this.moveToEast()
                }
            }
            if (this.isMoveNorth3) {
                if (this.isMoveNorth3 === "home-go") {
                    if (fieldNumber !== "28") return
                    this.posNorth3 = fieldNumber
                    this.isMoveNorth3 = "field"
                    this.moveToEast()
                } else if (this.isMoveNorth3.includes("field-go")) {
                    const movePos = this.isMoveNorth3.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posNorth3 = fieldNumber
                    this.isMoveNorth3 = "field"
                    this.moveToEast()
                }
            }
            if (this.isMoveNorth4) {
                if (this.isMoveNorth4 === "home-go") {
                    if (fieldNumber !== "28") return
                    this.posNorth4 = fieldNumber
                    this.isMoveNorth4 = "field"
                    this.moveToEast()
                } else if (this.isMoveNorth4.includes("field-go")) {
                    const movePos = this.isMoveNorth4.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posNorth4 = fieldNumber
                    this.isMoveNorth4 = "field"
                    this.moveToEast()
                }
            }

            if (this.isMoveEast1) {
                if (this.isMoveEast1 === "home-go") {
                    if (fieldNumber !== "42") return
                    this.posEast1 = fieldNumber
                    this.isMoveEast1 = "field"
                    this.moveToSouth()
                } else if (this.isMoveEast1.includes("field-go")) {
                    const movePos = this.isMoveEast1.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posEast1 = fieldNumber
                    this.isMoveEast1 = "field"
                    this.moveToSouth()
                }
            }
            if (this.isMoveEast2) {
                if (this.isMoveEast2 === "home-go") {
                    if (fieldNumber !== "42") return
                    this.posEast2 = fieldNumber
                    this.isMoveEast2 = "field"
                    this.moveToSouth()
                } else if (this.isMoveEast2.includes("field-go")) {
                    const movePos = this.isMoveEast2.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posEast2 = fieldNumber
                    this.isMoveEast2 = "field"
                    this.moveToSouth()
                }
            }
            if (this.isMoveEast3) {
                if (this.isMoveEast3 === "home-go") {
                    if (fieldNumber !== "42") return
                    this.posEast3 = fieldNumber
                    this.isMoveEast3 = "field"
                    this.moveToSouth()
                } else if (this.isMoveEast3.includes("field-go")) {
                    const movePos = this.isMoveEast3.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posEast3 = fieldNumber
                    this.isMoveEast3 = "field"
                    this.moveToSouth()
                }
            }
            if (this.isMoveEast4) {
                if (this.isMoveEast4 === "home-go") {
                    if (fieldNumber !== "42") return
                    this.posEast4 = fieldNumber
                    this.isMoveEast4 = "field"
                    this.moveToSouth()
                } else if (this.isMoveEast4.includes("field-go")) {
                    const movePos = this.isMoveEast4.split("from-")[1]
                    console.log(movePos)
                    console.log(fieldNumber)
                    console.log(this.dice1)
                    if (Number(fieldNumber) !== Number(movePos) + Number(this.dice1) || Number(fieldNumber) !== Number(movePos) + Number(this.dice2) || Number(fieldNumber) !== Number(movePos) + Number(this.dice1) + Number(this.dice2)) return
                    console.log(this.dice2)
                    this.posEast4 = fieldNumber
                    this.isMoveEast4 = "field"
                    this.moveToSouth()
                }
            }
        },

        handlePlayerSouth1(e) { // клик по игроку
            if (!this.isSouthDice) return // если не твой ход, выйди
            if (this.isMoveSouth1 === "home" && this.dice1 === this.dice2) { // если фишка дома и на кубиках дубль
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) { // если это тег <li></li> в котором есть класс соответсвующий игроку
                        // тогда присвоить флагу "движение игрока" значение "взял из дома" для соответсвующего игрока
                        this.isMoveSouth1 = "home-go"
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = false
                    }
                })
            } else if (this.isMoveSouth1 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                console.log("handlePlayerSouth1", e)
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) { // если это тег <li></li> в котором есть класс соответсвующий игроку
                        // тогда присвоить флагу "движение игрока" значение "взял с поля" для соответсвующего игрока
                        this.isMoveSouth1 = "field-go-from-"
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveSouth1 = this.isMoveSouth1 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerSouth2(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth2", e)
            if (this.isMoveSouth2 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = "home-go"
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = false
                    }
                })
            } else if (this.isMoveSouth2 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = "field-go-from-"
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveSouth2 = this.isMoveSouth2 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerSouth3(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth3")
            if (this.isMoveSouth3 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = "home-go"
                        this.isMoveSouth4 = false
                    }
                })
            } else if (this.isMoveSouth3 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = "field-go-from-"
                        this.isMoveSouth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveSouth3 = this.isMoveSouth3 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerSouth4(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth4")
            if (this.isMoveSouth4 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = "home-go"
                    }
                })
            } else if (this.isMoveSouth4 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("south")) {
                        this.isMoveSouth1 = false
                        this.isMoveSouth2 = false
                        this.isMoveSouth3 = false
                        this.isMoveSouth4 = "field-go-from-"
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveSouth4 = this.isMoveSouth4 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerWest1(e) {
            if (!this.isWestDice) return
            if (this.isMoveWest1 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = "home-go"
                        this.isMoveWest2 = false
                        this.isMoveWest3 = false
                        this.isMoveWest4 = false
                    }
                })
            } else if (this.isMoveWest1 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                console.log("handlePlayerWest1", e)
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = "field-go-from-"
                        this.isMoveWest2 = false
                        this.isMoveWest3 = false
                        this.isMoveWest4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveWest1 = this.isMoveWest1 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerWest2(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest2", e)
            if (this.isMoveWest2 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = "home-go"
                        this.isMoveWest3 = false
                        this.isMoveWest4 = false
                    }
                })
            } else if (this.isMoveWest2 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = "field-go-from-"
                        this.isMoveWest3 = false
                        this.isMoveWest4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveWest2 = this.isMoveWest2 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerWest3(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest3")
            if (this.isMoveWest3 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = false
                        this.isMoveWest3 = "home-go"
                        this.isMoveWest4 = false
                    }
                })
            } else if (this.isMoveWest3 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = false
                        this.isMoveWest3 = "field-go-from-"
                        this.isMoveWest4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveWest3 = this.isMoveWest3 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerWest4(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest4")
            if (this.isMoveWest4 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = false
                        this.isMoveWest3 = false
                        this.isMoveWest4 = "home-go"
                    }
                })
            } else if (this.isMoveWest4 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("west")) {
                        this.isMoveWest1 = false
                        this.isMoveWest2 = false
                        this.isMoveWest3 = false
                        this.isMoveWest4 = "field-go-from-"
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveWest4 = this.isMoveWest4 + el.className.split("pos-")[1]
                    }
                })
            }
        },

        handlePlayerNorth1(e) {
            if (!this.isNorthDice) return
            if (this.isMoveNorth1 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = "home-go"
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = false
                    }
                })
            } else if (this.isMoveNorth1 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                console.log("handlePlayerNorth1", e)
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = "field-go-from-"
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveNorth1 = this.isMoveNorth1 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerNorth2(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth2", e)
            if (this.isMoveNorth2 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = "home-go"
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = false
                    }
                })
            } else if (this.isMoveNorth2 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = "field-go-from-"
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveNorth2 = this.isMoveNorth2 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerNorth3(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth3")
            if (this.isMoveNorth3 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = "home-go"
                        this.isMoveNorth4 = false
                    }
                })
            } else if (this.isMoveNorth3 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = "field-go-from-"
                        this.isMoveNorth4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveNorth3 = this.isMoveNorth3 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerNorth4(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth4")
            if (this.isMoveNorth4 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = "home-go"
                    }
                })
            } else if (this.isMoveNorth4 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("north")) {
                        this.isMoveNorth1 = false
                        this.isMoveNorth2 = false
                        this.isMoveNorth3 = false
                        this.isMoveNorth4 = "field-go-from-"
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveNorth4 = this.isMoveNorth4 + el.className.split("pos-")[1]
                    }
                })
            }
        },

        handlePlayerEast1(e) {
            if (!this.isEastDice) return
            if (this.isMoveEast1 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = "home-go"
                        this.isMoveEast2 = false
                        this.isMoveEast3 = false
                        this.isMoveEast4 = false
                    }
                })
            } else if (this.isMoveEast1 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                console.log("handlePlayerEast1", e)
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = "field-go-from-"
                        this.isMoveEast2 = false
                        this.isMoveEast3 = false
                        this.isMoveEast4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveEast1 = this.isMoveEast1 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerEast2(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast2", e)
            if (this.isMoveEast2 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = "home-go"
                        this.isMoveEast3 = false
                        this.isMoveEast4 = false
                    }
                })
            } else if (this.isMoveEast2 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = "field-go-from-"
                        this.isMoveEast3 = false
                        this.isMoveEast4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveEast2 = this.isMoveEast2 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerEast3(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast3")
            if (this.isMoveEast3 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = false
                        this.isMoveEast3 = "home-go"
                        this.isMoveEast4 = false
                    }
                })
            } else if (this.isMoveEast3 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = false
                        this.isMoveEast3 = "field-go-from-"
                        this.isMoveEast4 = false
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveEast3 = this.isMoveEast3 + el.className.split("pos-")[1]
                    }
                })
            }
        },
        handlePlayerEast4(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast4")
            if (this.isMoveEast4 === "home" && this.dice1 === this.dice2) {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = false
                        this.isMoveEast3 = false
                        this.isMoveEast4 = "home-go"
                    }
                })
            } else if (this.isMoveEast4 === "home" && this.dice1 !== this.dice2) {
                return;
            } else {
                e.path.map(el => {
                    if (el.nodeName === "SPAN" && el.className.includes("east")) {
                        this.isMoveEast1 = false
                        this.isMoveEast2 = false
                        this.isMoveEast3 = false
                        this.isMoveEast4 = "field-go-from-"
                    }
                    if (el.nodeName === "LI") {
                        this.isMoveEast4 = this.isMoveEast4 + el.className.split("pos-")[1]
                    }
                })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.WENS {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    &__field {
        position: relative;
        width: 75em;
        height: 75em;
        border: 0.1em solid red;

        @media (max-width: 1023px) {
            font-size: 8.5px;
        }

        @media (max-width: 767px) {
            font-size: 5px;
        }

        &-cell {
            position: absolute;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4.6em;
            height: 4.6em;
            border: 0.2em solid black;
            cursor: pointer;

            .player-south,
            .player-west,
            .player-north,
            .player-east {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                border: 1em solid white;
                border-radius: 50%;
                color: white;
                cursor: pointer;
            }

            .player-south {
                background-color: red;
            }

            .player-west {
                background-color: blue;
            }

            .player-north {
                background-color: black;
            }

            .player-east {
                background-color: green;
            }

            &.pos-south-1 {
                top: 65em;
                left: 0;
            }

            &.pos-south-2 {
                top: 65em;
                left: 5em;
            }

            &.pos-south-3 {
                top: 70em;
                left: 0;
            }

            &.pos-south-4 {
                top: 70em;
                left: 5em;
            }

            &.pos-west-1 {
                top: 0;
                left: 5em;
            }

            &.pos-west-2 {
                top: 5em;
                left: 5em;
            }

            &.pos-west-3 {
                top: 0;
                left: 0;
            }

            &.pos-west-4 {
                top: 5em;
                left: 0;
            }

            &.pos-north-1 {
                top: 5em;
                left: 70em;
            }

            &.pos-north-2 {
                top: 5em;
                left: 65em;
            }

            &.pos-north-3 {
                top: 0;
                left: 70em;
            }

            &.pos-north-4 {
                top: 0;
                left: 65em;
            }

            &.pos-east-1 {
                top: 70em;
                left: 65em;
            }

            &.pos-east-2 {
                top: 65em;
                left: 65em;
            }

            &.pos-east-3 {
                top: 70em;
                left: 70em;
            }

            &.pos-east-4 {
                top: 65em;
                left: 70em;
            }

            &.pos-0 {
                top: 70em;
                left: 25em;
            }

            &.pos-1 {
                top: 65em;
                left: 25em;
            }

            &.pos-2 {
                top: 60em;
                left: 25em;
            }

            &.pos-3 {
                top: 55em;
                left: 25em;
            }

            &.pos-4 {
                top: 50em;
                left: 25em;
            }

            &.pos-5 {
                top: 45em;
                left: 25em;
            }

            &.pos-6 {
                top: 45em;
                left: 20em;
            }

            &.pos-7 {
                top: 45em;
                left: 15em;
            }

            &.pos-8 {
                top: 45em;
                left: 10em;
            }

            &.pos-9 {
                top: 45em;
                left: 5em;
            }

            &.pos-10 {
                top: 45em;
                left: 0;
            }

            &.pos-11 {
                top: 40em;
                left: 0;
            }

            &.pos-12 {
                top: 35em;
                left: 0;
            }

            &.pos-13 {
                top: 30em;
                left: 0;
            }

            &.pos-14 {
                top: 25em;
                left: 0;
            }

            &.pos-15 {
                top: 25em;
                left: 5em;
            }

            &.pos-16 {
                top: 25em;
                left: 10em;
            }

            &.pos-17 {
                top: 25em;
                left: 15em;
            }

            &.pos-18 {
                top: 25em;
                left: 20em;
            }

            &.pos-19 {
                top: 25em;
                left: 25em;
            }

            &.pos-20 {
                top: 20em;
                left: 25em;
            }

            &.pos-21 {
                top: 15em;
                left: 25em;
            }

            &.pos-22 {
                top: 10em;
                left: 25em;
            }

            &.pos-23 {
                top: 5em;
                left: 25em;
            }

            &.pos-24 {
                top: 0;
                left: 25em;
            }

            &.pos-25 {
                top: 0;
                left: 30em;
            }

            &.pos-26 {
                top: 0;
                left: 35em;
            }

            &.pos-27 {
                top: 0;
                left: 40em;
            }

            &.pos-28 {
                top: 0;
                left: 45em;
            }

            &.pos-29 {
                top: 5em;
                left: 45em;
            }

            &.pos-30 {
                top: 10em;
                left: 45em;
            }

            &.pos-31 {
                top: 15em;
                left: 45em;
            }

            &.pos-32 {
                top: 20em;
                left: 45em;
            }

            &.pos-33 {
                top: 25em;
                left: 45em;
            }

            &.pos-34 {
                top: 25em;
                left: 50em;
            }

            &.pos-35 {
                top: 25em;
                left: 55em;
            }

            &.pos-36 {
                top: 25em;
                left: 60em;
            }

            &.pos-37 {
                top: 25em;
                left: 65em;
            }

            &.pos-38 {
                top: 25em;
                left: 70em;
            }

            &.pos-39 {
                top: 30em;
                left: 70em;
            }

            &.pos-40 {
                top: 35em;
                left: 70em;
            }

            &.pos-41 {
                top: 40em;
                left: 70em;
            }

            &.pos-42 {
                top: 45em;
                left: 70em;
            }

            &.pos-43 {
                top: 45em;
                left: 65em;
            }

            &.pos-44 {
                top: 45em;
                left: 60em;
            }

            &.pos-45 {
                top: 45em;
                left: 55em;
            }

            &.pos-46 {
                top: 45em;
                left: 50em;
            }

            &.pos-47 {
                top: 45em;
                left: 45em;
            }

            &.pos-48 {
                top: 50em;
                left: 45em;
            }

            &.pos-49 {
                top: 55em;
                left: 45em;
            }

            &.pos-50 {
                top: 60em;
                left: 45em;
            }

            &.pos-51 {
                top: 65em;
                left: 45em;
            }

            &.pos-52 {
                top: 70em;
                left: 45em;
            }

            &.pos-53 {
                top: 70em;
                left: 40em;
            }

            &.pos-54 {
                top: 70em;
                left: 35em;
            }

            &.pos-55 {
                top: 70em;
                left: 30em;
            }

            &.south-start-1 {
                top: 65em;
                left: 0;
            }

            &.south-start-2 {
                top: 65em;
                left: 5em;
            }

            &.south-start-3 {
                top: 70em;
                left: 0;
            }

            &.south-start-4 {
                top: 70em;
                left: 5em;
            }

            &.south-finish-1 {
                top: 65em;
                left: 35em;
            }

            &.south-finish-2 {
                top: 60em;
                left: 35em;
            }

            &.south-finish-3 {
                top: 55em;
                left: 35em;
            }

            &.south-finish-4 {
                top: 50em;
                left: 35em;
            }

            &.west-start-1 {
                top: 0;
                left: 5em;
            }

            &.west-start-2 {
                top: 5em;
                left: 5em;
            }

            &.west-start-3 {
                top: 0;
                left: 0;
            }

            &.west-start-4 {
                top: 5em;
                left: 0;
            }

            &.west-finish-1 {
                top: 35em;
                left: 5em;
            }

            &.west-finish-2 {
                top: 35em;
                left: 10em;
            }

            &.west-finish-3 {
                top: 35em;
                left: 15em;
            }

            &.west-finish-4 {
                top: 35em;
                left: 20em;
            }

            &.north-start-1 {
                top: 5em;
                left: 70em;
            }

            &.north-start-2 {
                top: 5em;
                left: 65em;
            }

            &.north-start-3 {
                top: 0;
                left: 70em;
            }

            &.north-start-4 {
                top: 0;
                left: 65em;
            }

            &.north-finish-1 {
                top: 5em;
                left: 35em;
            }

            &.north-finish-2 {
                top: 10em;
                left: 35em;
            }

            &.north-finish-3 {
                top: 15em;
                left: 35em;
            }

            &.north-finish-4 {
                top: 20em;
                left: 35em;
            }

            &.east-start-1 {
                top: 70em;
                left: 65em;
            }

            &.east-start-2 {
                top: 65em;
                left: 65em;
            }

            &.east-start-3 {
                top: 70em;
                left: 70em;
            }

            &.east-start-4 {
                top: 65em;
                left: 70em;
            }

            &.east-finish-1 {
                top: 35em;
                left: 65em;
            }

            &.east-finish-2 {
                top: 35em;
                left: 60em;
            }

            &.east-finish-3 {
                top: 35em;
                left: 55em;
            }

            &.east-finish-4 {
                top: 35em;
                left: 50em;
            }
        }

        &-roll-dice {
            position: absolute;
            font-size: 2em;

            &.south {
                bottom: 0;
                left: 6.5em;
            }

            &.west {
                top: 8em;
                left: 0;
            }

            &.north {
                top: 0;
                right: 6.5em;
            }

            &.east {
                right: 0;
                bottom: 8em;
            }

            button {
                font-weight: bold;
                border: 0.1em solid #000;
                border-radius: 0.3em;
                padding: 0 0.3em;
                background-color: lightgray;
            }
        }
    }

    &__dice {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 2em;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5em;
        height: 2.5em;
        border: 0.1em solid #000;
        border-radius: 0.4em;
        background-color: lightgoldenrodyellow;

        &.dice-1 {
            left: 48%;
        }

        &.dice-2 {
            left: 52%;
        }
    }
}
</style>