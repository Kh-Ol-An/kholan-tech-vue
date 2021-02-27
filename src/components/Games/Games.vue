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
            <li class="WENS__field-cell"
                :class="['pos-' + south.pos.n1, {active : south.move.n1 === 'home-go' || south.move.n1.includes('field-go')}]"
                @click="handlePlayerSouth1">
                <span class="player-south">s1</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + south.pos.n2, {active : south.move.n2 === 'home-go' || south.move.n2.includes('field-go')}]"
                @click="handlePlayerSouth2">
                <span class="player-south">s2</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + south.pos.n3, {active : south.move.n3 === 'home-go' || south.move.n3.includes('field-go')}]"
                @click="handlePlayerSouth3">
                <span class="player-south">s3</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + south.pos.n4, {active : south.move.n4 === 'home-go' || south.move.n4.includes('field-go')}]"
                @click="handlePlayerSouth4">
                <span class="player-south">s4</span>
            </li>

            <li class="WENS__field-cell"
                :class="['pos-' + west.pos.n1, {active : west.move.n1 === 'home-go' || west.move.n1.includes('field-go')}]"
                @click="handlePlayerWest1">
                <span class="player-west">w1</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + west.pos.n2, {active : west.move.n2 === 'home-go' || west.move.n2.includes('field-go')}]"
                @click="handlePlayerWest2">
                <span class="player-west">w2</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + west.pos.n3, {active : west.move.n3 === 'home-go' || west.move.n3.includes('field-go')}]"
                @click="handlePlayerWest3">
                <span class="player-west">w3</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + west.pos.n4, {active : west.move.n4 === 'home-go' || west.move.n4.includes('field-go')}]"
                @click="handlePlayerWest4">
                <span class="player-west">w4</span>
            </li>

            <li class="WENS__field-cell"
                :class="['pos-' + north.pos.n1, {active : north.move.n1 === 'home-go' || north.move.n1.includes('field-go')}]"
                @click="handlePlayerNorth1">
                <span class="player-north">n1</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + north.pos.n2, {active : north.move.n2 === 'home-go' || north.move.n2.includes('field-go')}]"
                @click="handlePlayerNorth2">
                <span class="player-north">n2</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + north.pos.n3, {active : north.move.n3 === 'home-go' || north.move.n3.includes('field-go')}]"
                @click="handlePlayerNorth3">
                <span class="player-north">n3</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + north.pos.n4, {active : north.move.n4 === 'home-go' || north.move.n4.includes('field-go')}]"
                @click="handlePlayerNorth4">
                <span class="player-north">n4</span>
            </li>

            <li class="WENS__field-cell"
                :class="['pos-' + east.pos.n1, {active : east.move.n1 === 'home-go' || east.move.n1.includes('field-go')}]"
                @click="handlePlayerEast1">
                <span class="player-east">e1</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + east.pos.n2, {active : east.move.n2 === 'home-go' || east.move.n2.includes('field-go')}]"
                @click="handlePlayerEast2">
                <span class="player-east">e2</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + east.pos.n3, {active : east.move.n3 === 'home-go' || east.move.n3.includes('field-go')}]"
                @click="handlePlayerEast3">
                <span class="player-east">e3</span>
            </li>
            <li class="WENS__field-cell"
                :class="['pos-' + east.pos.n4, {active : east.move.n4 === 'home-go' || east.move.n4.includes('field-go')}]"
                @click="handlePlayerEast4">
                <span class="player-east">e4</span>
            </li>

            <!-- кнопка бросить кубик -->
            <li class="WENS__field-roll-dice"
                :class="{'south': isSouthDice, 'west': isWestDice, 'north': isNorthDice, 'east': isEastDice}">
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
            step1: 0,
            step2: 0,
            step: 0,
            // расположение кнопки кубика
            isSouthDice: true,
            isWestDice: false,
            isNorthDice: false,
            isEastDice: false,
            south: {
                // позиция фишек у игрока
                pos: {
                    n1: 'south-1',
                    n2: 'south-2',
                    n3: 'south-3',
                    n4: 'south-4',
                },
                // флаг движения фишек у игрока
                move: {
                    n1: "home",
                    n2: "home",
                    n3: "home",
                    n4: "home",
                }
            },
            west: {
                pos: {
                    n1: 'west-1',
                    n2: 'west-2',
                    n3: 'west-3',
                    n4: 'west-4',
                },
                move: {
                    n1: "home",
                    n2: "home",
                    n3: "home",
                    n4: "home",
                }
            },
            north: {
                pos: {
                    n1: 'north-1',
                    n2: 'north-2',
                    n3: 'north-3',
                    n4: 'north-4',
                },
                move: {
                    n1: "home",
                    n2: "home",
                    n3: "home",
                    n4: "home",
                }
            },
            east: {
                pos: {
                    n1: 'east-1',
                    n2: 'east-2',
                    n3: 'east-3',
                    n4: 'east-4',
                },
                move: {
                    n1: "home",
                    n2: "home",
                    n3: "home",
                    n4: "home",
                }
            },
        }
    },
    methods: {
        handleRollDice() { // бросок кубика
            // рандомное значение кубиков
            if (this.step) return;
            this.dice1 = Math.floor(1 + Math.random() * 6);
            this.dice2 = Math.floor(1 + Math.random() * 6);
            this.step1 = Number(this.dice1);
            this.step2 = Number(this.dice2);
            this.step = Number(this.dice1) + Number(this.dice2);
            // условие перехода хода
            if (this.dice1 !== this.dice2) { // если кубики не равны
                this.diceInscription = "go";
                if (this.isSouthDice && this.south.move.n1 === "home" && this.south.move.n2 === "home" && this.south.move.n3 === "home" && this.south.move.n4 === "home") { // если кубики бросает соответствующий игрок и все фишки игрока дома
                    this.turn++;
                    this.diceInscription = "roll dice";
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                }
                if (this.isWestDice && this.west.move.n1 === "home" && this.west.move.n2 === "home" && this.west.move.n3 === "home" && this.west.move.n4 === "home") {
                    this.turn++;
                    this.diceInscription = "roll dice";
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                }
                if (this.isNorthDice && this.north.move.n1 === "home" && this.north.move.n2 === "home" && this.north.move.n3 === "home" && this.north.move.n4 === "home") {
                    this.turn++;
                    this.diceInscription = "roll dice";
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                }
                if (this.isEastDice && this.east.move.n1 === "home" && this.east.move.n2 === "home" && this.east.move.n3 === "home" && this.east.move.n4 === "home") {
                    this.turn = 1;
                    this.diceInscription = "roll dice";
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                }
            } else {
                this.diceInscription = "go";
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
            this.turn = 1;
            this.diceInscription = "roll dice";
            this.step1 = 0;
            this.step2 = 0;
            this.step = 0;
            this.isSouthDice = true;
            this.isWestDice = false;
            this.isNorthDice = false;
            this.isEastDice = false;
        },
        moveToWest() {
            this.turn++;
            this.diceInscription = "roll dice";
            this.step1 = 0;
            this.step2 = 0;
            this.step = 0;
            this.isSouthDice = false;
            this.isWestDice = true;
            this.isNorthDice = false;
            this.isEastDice = false;
        },
        moveToNorth() {
            this.turn++;
            this.diceInscription = "roll dice";
            this.step1 = 0;
            this.step2 = 0;
            this.step = 0;
            this.isSouthDice = false;
            this.isWestDice = false;
            this.isNorthDice = true;
            this.isEastDice = false;
        },
        moveToEast() {
            this.turn++;
            this.diceInscription = "roll dice";
            this.step1 = 0;
            this.step2 = 0;
            this.step = 0;
            this.isSouthDice = false;
            this.isWestDice = false;
            this.isNorthDice = false;
            this.isEastDice = true;
        },
        moveTransition(player) {
            player === "south" && this.moveToWest();
            player === "west" && this.moveToNorth();
            player === "north" && this.moveToEast();
            player === "east" && this.moveToSouth();
        },

        playerTurn(chipMove, clickOnFieldNumber, fieldNumber, player, chip) {
            if (chipMove === "home-go") { // если игрок находится дома
                if (clickOnFieldNumber !== fieldNumber) return; // после взятия фишки разрешаю становиться только в начало
                this[player].pos[chip] = clickOnFieldNumber; // меняю позицию игрока
                this[player].move[chip] = "field"; // даем статус фишке "поле"
                // передаем ход дальше
                this.moveTransition(player)
            } else if (chipMove.includes("field-go")) {
                const chipPos = chipMove.split("from-")[1]; // снимаем позицию с фишки
                const difference = Number(clickOnFieldNumber) - Number(chipPos); // разница между позицией фишки и нажатым полем
                if (difference === this.step1 || difference - this.step1 === -56) {
                    this[player].pos[chip] = clickOnFieldNumber; // меняю позицию игрока
                    this.step = this.step - this.step1;
                    this.step1 = 0;
                } else if (difference === this.step2 || difference - this.step2 === -56) {
                    this[player].pos[chip] = clickOnFieldNumber; // меняю позицию игрока
                    this.step = this.step - this.step2;
                    this.step2 = 0;
                } else if (difference === this.step || difference - this.step === -56) {
                    this[player].pos[chip] = clickOnFieldNumber; // меняю позицию игрока
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                } else {
                    return;
                }
                this[player].move[chip] = "field"; // даем статус фишке "поле"
                if (this.step) return;
                this.moveTransition(player)
            }
        },
        handleFieldClick(e) { // клик по полю
            const clickOnFieldNumber = e.target.classList[1].split("-")[1];
            this.playerTurn(this.south.move.n1, clickOnFieldNumber, "0", "south", "n1");
            this.playerTurn(this.south.move.n2, clickOnFieldNumber, "0", "south", "n2");
            this.playerTurn(this.south.move.n3, clickOnFieldNumber, "0", "south", "n3");
            this.playerTurn(this.south.move.n4, clickOnFieldNumber, "0", "south", "n4");

            this.playerTurn(this.west.move.n1, clickOnFieldNumber, "14", "west", "n1");
            this.playerTurn(this.west.move.n2, clickOnFieldNumber, "14", "west", "n2");
            this.playerTurn(this.west.move.n3, clickOnFieldNumber, "14", "west", "n3");
            this.playerTurn(this.west.move.n4, clickOnFieldNumber, "14", "west", "n4");

            this.playerTurn(this.north.move.n1, clickOnFieldNumber, "28", "north", "n1");
            this.playerTurn(this.north.move.n2, clickOnFieldNumber, "28", "north", "n2");
            this.playerTurn(this.north.move.n3, clickOnFieldNumber, "28", "north", "n3");
            this.playerTurn(this.north.move.n4, clickOnFieldNumber, "28", "north", "n4");

            this.playerTurn(this.east.move.n1, clickOnFieldNumber, "42", "east", "n1");
            this.playerTurn(this.east.move.n2, clickOnFieldNumber, "42", "east", "n2");
            this.playerTurn(this.east.move.n3, clickOnFieldNumber, "42", "east", "n3");
            this.playerTurn(this.east.move.n4, clickOnFieldNumber, "42", "east", "n4");
        },

        // сброс всех фишек
        resetMoveChip(player) {
            this[player].move.n1 === "home-go" && (this[player].move.n1 = "home");
            this[player].move.n2 === "home-go" && (this[player].move.n2 = "home");
            this[player].move.n3 === "home-go" && (this[player].move.n3 = "home");
            this[player].move.n4 === "home-go" && (this[player].move.n4 = "home");
            this[player].move.n1.includes("field-go-from") && (this[player].move.n1 = "field");
            this[player].move.n2.includes("field-go-from") && (this[player].move.n2 = "field");
            this[player].move.n3.includes("field-go-from") && (this[player].move.n3 = "field");
            this[player].move.n4.includes("field-go-from") && (this[player].move.n4 = "field");
        },
        // возврат фишки домой
        chipReturnHome(returnPlayer, returnChip) {
            if (returnChip === "n1" && this[returnPlayer].pos.n1 !== `${returnPlayer}-1`) {
                this[returnPlayer].pos[returnChip] = returnPlayer + "-1";
                this[returnPlayer].move[returnChip] = "home";
            } else if (returnChip === "n2" && this[returnPlayer].pos.n2 !== `${returnPlayer}-2`) {
                this[returnPlayer].pos[returnChip] = returnPlayer + "-2";
                this[returnPlayer].move[returnChip] = "home";
            } else if (returnChip === "n3" && this[returnPlayer].pos.n3 !== `${returnPlayer}-3`) {
                this[returnPlayer].pos[returnChip] = returnPlayer + "-3";
                this[returnPlayer].move[returnChip] = "home";
            } else if (returnChip === "n4" && this[returnPlayer].pos.n4 !== `${returnPlayer}-4`) {
                this[returnPlayer].pos[returnChip] = returnPlayer + "-4";
                this[returnPlayer].move[returnChip] = "home";
            }
        },
        // замена фишки
        chipReplacement(player, clickOnOpponentPos, fieldNumber, returnPlayer, returnChip) {
            if (this[player].move.n1.includes("home-go")) {
                if (clickOnOpponentPos !== fieldNumber) return; // после взятия фишки разрешаю становиться только в начало
                this[player].pos.n1 = fieldNumber // меняю позицию игрока
                this[player].move.n1 = "field";
                this.chipReturnHome(returnPlayer, returnChip)
                this.moveTransition(player)
            } else if (this[player].move.n2.includes("home-go")) {
                if (clickOnOpponentPos !== fieldNumber) return; // после взятия фишки разрешаю становиться только в начало
                this[player].pos.n2 = fieldNumber // меняю позицию игрока
                this[player].move.n2 = "field";
                this.chipReturnHome(returnPlayer, returnChip)
                this.moveTransition(player)
            } else if (this[player].move.n3.includes("home-go")) {
                if (clickOnOpponentPos !== fieldNumber) return; // после взятия фишки разрешаю становиться только в начало
                this[player].pos.n3 = fieldNumber // меняю позицию игрока
                this[player].move.n3 = "field";
                this.chipReturnHome(returnPlayer, returnChip)
                this.moveTransition(player)
            } else if (this[player].move.n4.includes("home-go")) {
                if (clickOnOpponentPos !== fieldNumber) return; // после взятия фишки разрешаю становиться только в начало
                this[player].pos.n4 = fieldNumber // меняю позицию игрока
                this[player].move.n4 = "field";
                this.chipReturnHome(returnPlayer, returnChip)
                this.moveTransition(player)
            } else if (this[player].move.n1.includes("field-go")) {
                const chipPos = this[player].pos.n1; // снимаем позицию с фишки
                const difference = Number(clickOnOpponentPos) - Number(chipPos); // разница между позицией фишки и позицией оппонента
                if (difference === this.step1) {
                    this[player].pos.n1 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step1;
                    this.step1 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step2) {
                    this[player].pos.n1 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step2;
                    this.step2 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step) {
                    this[player].pos.n1 = clickOnOpponentPos; // меняю позицию игрока
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else {
                    return;
                }
                this[player].move.n1 = "field"; // даем статус фишке "поле"
                if (this.step) return;
                this.moveTransition(player)
            } else if (this[player].move.n2.includes("field-go")) {
                const chipPos = this[player].pos.n2; // снимаем позицию с фишки
                const difference = Number(clickOnOpponentPos) - Number(chipPos); // разница между позицией фишки и позицией оппонента
                if (difference === this.step1) {
                    this[player].pos.n2 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step1;
                    this.step1 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step2) {
                    this[player].pos.n2 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step2;
                    this.step2 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step) {
                    this[player].pos.n2 = clickOnOpponentPos; // меняю позицию игрока
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else {
                    return;
                }
                this[player].move.n2 = "field"; // даем статус фишке "поле"
                if (this.step) return;
                this.moveTransition(player)
            } else if (this[player].move.n3.includes("field-go")) {
                const chipPos = this[player].pos.n3; // снимаем позицию с фишки
                const difference = Number(clickOnOpponentPos) - Number(chipPos); // разница между позицией фишки и позицией оппонента
                if (difference === this.step1) {
                    this[player].pos.n3 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step1;
                    this.step1 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step2) {
                    this[player].pos.n3 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step2;
                    this.step2 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step) {
                    this[player].pos.n3 = clickOnOpponentPos; // меняю позицию игрока
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else {
                    return;
                }
                this[player].move.n3 = "field"; // даем статус фишке "поле"
                if (this.step) return;
                this.moveTransition(player)
            } else if (this[player].move.n4.includes("field-go")) {
                const chipPos = this[player].pos.n4; // снимаем позицию с фишки
                const difference = Number(clickOnOpponentPos) - Number(chipPos); // разница между позицией фишки и позицией оппонента
                if (difference === this.step1) {
                    this[player].pos.n4 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step1;
                    this.step1 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step2) {
                    this[player].pos.n4 = clickOnOpponentPos; // меняю позицию игрока
                    this.step = this.step - this.step2;
                    this.step2 = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else if (difference === this.step) {
                    this[player].pos.n4 = clickOnOpponentPos; // меняю позицию игрока
                    this.step1 = 0;
                    this.step2 = 0;
                    this.step = 0;
                    this.chipReturnHome(returnPlayer, returnChip)
                } else {
                    return;
                }
                this[player].move.n4 = "field"; // даем статус фишке "поле"
                if (this.step) return;
                this.moveTransition(player)
            }
        },
        handlePlayer(e, dice, chipMove, player, chip) { // клик по игроку
            // первый клик
            if (dice) { // если кликнуть по фишке чей сейчас ход
                if (chipMove.includes("home") && this.dice1 === this.dice2 && (this.step === this.dice1 + this.dice2)) { // если фишка дома и на кубиках дубль и не был произведен ход для одного кубика
                    e.path.map(el => {
                        if (el.nodeName === "SPAN" && el.className.includes(player)) { // если это тег <li></li> в котором есть класс соответсвующий игроку
                            this.resetMoveChip(player); // сбросываем все фишки
                            this[player].move[chip] = "home-go"; // даем фишке статус "ход из дома"
                        }
                    })
                } else if (chipMove.includes("home") && this.dice1 !== this.dice2) { // если фишка дома и на кубиках нет дубль
                    return;
                } else { // если фишка не дома
                    e.path.map(el => {
                        if (el.nodeName === "SPAN" && el.className.includes(player)) { // если это тег <li></li> в котором есть класс соответсвующий игроку
                            // тогда присвоить флагу "движение игрока" значение "взял с поля" для соответсвующего игрока
                            this.resetMoveChip(player); // сбросываем все фишки
                            this[player].move[chip] = "field-go-from-"; // даем фишке статус "ход с поля"
                        }
                        if (el.nodeName === "LI") {
                            this[player].move[chip] = this[player].move[chip] + el.className.split("pos-")[1]; // даем фишке статус "ход с поля номер такой-то"
                        }
                    })
                }
            } else {
                if (chipMove.includes("home")) return;
                // второй клик или клик по врагу
                let clickOnOpponentPos = '';
                e.path.map(el => {
                    if (el.nodeName === "LI") {
                        clickOnOpponentPos = el.className.split("pos-")[1]; // снимаем позицию с врага
                    }
                })
                if (this.isSouthDice) { // в зависимости от того чей ход
                    this.chipReplacement("south", clickOnOpponentPos, "0", player, chip);
                } else if (this.isWestDice) {
                    this.chipReplacement("west", clickOnOpponentPos, "14", player, chip);
                } else if (this.isNorthDice) {
                    this.chipReplacement("north", clickOnOpponentPos, "28", player, chip);
                } else if (this.isEastDice) {
                    this.chipReplacement("east", clickOnOpponentPos, "42", player, chip);
                }
            }
        },

        handlePlayerSouth1(e) { // клик по игроку
            this.handlePlayer(e, this.isSouthDice, this.south.move.n1, "south", "n1");
        },
        handlePlayerSouth2(e) {
            this.handlePlayer(e, this.isSouthDice, this.south.move.n2, "south", "n2");
        },
        handlePlayerSouth3(e) {
            this.handlePlayer(e, this.isSouthDice, this.south.move.n3, "south", "n3");
        },
        handlePlayerSouth4(e) {
            this.handlePlayer(e, this.isSouthDice, this.south.move.n4, "south", "n4");
        },

        handlePlayerWest1(e) {
            this.handlePlayer(e, this.isWestDice, this.west.move.n1, "west", "n1");
        },
        handlePlayerWest2(e) {
            this.handlePlayer(e, this.isWestDice, this.west.move.n2, "west", "n2");
        },
        handlePlayerWest3(e) {
            this.handlePlayer(e, this.isWestDice, this.west.move.n3, "west", "n3");
        },
        handlePlayerWest4(e) {
            this.handlePlayer(e, this.isWestDice, this.west.move.n4, "west", "n4");
        },

        handlePlayerNorth1(e) {
            this.handlePlayer(e, this.isNorthDice, this.north.move.n1, "north", "n1");
        },
        handlePlayerNorth2(e) {
            this.handlePlayer(e, this.isNorthDice, this.north.move.n2, "north", "n2");
        },
        handlePlayerNorth3(e) {
            this.handlePlayer(e, this.isNorthDice, this.north.move.n3, "north", "n3");
        },
        handlePlayerNorth4(e) {
            this.handlePlayer(e, this.isNorthDice, this.north.move.n4, "north", "n4");
        },

        handlePlayerEast1(e) {
            this.handlePlayer(e, this.isEastDice, this.east.move.n1, "east", "n1");
        },
        handlePlayerEast2(e) {
            this.handlePlayer(e, this.isEastDice, this.east.move.n2, "east", "n2");
        },
        handlePlayerEast3(e) {
            this.handlePlayer(e, this.isEastDice, this.east.move.n3, "east", "n3");
        },
        handlePlayerEast4(e) {
            this.handlePlayer(e, this.isEastDice, this.east.move.n4, "east", "n4");
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

            &.active {
                .player-south,
                .player-west,
                .player-north,
                .player-east {
                    border-width: 0.8em;
                }
            }

            .player-south,
            .player-west,
            .player-north,
            .player-east {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                border-width: 1em;
                border-style: solid;
                border-color: white;
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