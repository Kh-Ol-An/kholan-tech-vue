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

            <li class="WENS__field-cell west-start-1">ws1</li>
            <li class="WENS__field-cell west-start-2">ws2</li>
            <li class="WENS__field-cell west-start-3">ws3</li>
            <li class="WENS__field-cell west-start-4">ws4</li>
            <li class="WENS__field-cell west-finish-1">wf1</li>
            <li class="WENS__field-cell west-finish-2">wf2</li>
            <li class="WENS__field-cell west-finish-3">wf3</li>
            <li class="WENS__field-cell west-finish-4">wf4</li>

            <li class="WENS__field-cell east-start-1">es1</li>
            <li class="WENS__field-cell east-start-2">es2</li>
            <li class="WENS__field-cell east-start-3">es3</li>
            <li class="WENS__field-cell east-start-4">es4</li>
            <li class="WENS__field-cell east-finish-1">ef1</li>
            <li class="WENS__field-cell east-finish-2">ef2</li>
            <li class="WENS__field-cell east-finish-3">ef3</li>
            <li class="WENS__field-cell east-finish-4">ef4</li>

            <li class="WENS__field-cell north-start-1">ns1</li>
            <li class="WENS__field-cell north-start-2">ns2</li>
            <li class="WENS__field-cell north-start-3">ns3</li>
            <li class="WENS__field-cell north-start-4">ns4</li>
            <li class="WENS__field-cell north-finish-1">nf1</li>
            <li class="WENS__field-cell north-finish-2">nf2</li>
            <li class="WENS__field-cell north-finish-3">nf3</li>
            <li class="WENS__field-cell north-finish-4">nf4</li>

            <li class="WENS__field-cell south-start-1">ss1</li>
            <li class="WENS__field-cell south-start-2">ss2</li>
            <li class="WENS__field-cell south-start-3">ss3</li>
            <li class="WENS__field-cell south-start-4">ss4</li>
            <li class="WENS__field-cell south-finish-1">sf1</li>
            <li class="WENS__field-cell south-finish-2">sf2</li>
            <li class="WENS__field-cell south-finish-3">sf3</li>
            <li class="WENS__field-cell south-finish-4">sf4</li>

            <li class="WENS__field-cell player-west west-1"></li>
            <li class="WENS__field-cell player-west west-2"></li>
            <li class="WENS__field-cell player-west west-3"></li>
            <li class="WENS__field-cell player-west west-4"></li>

            <li class="WENS__field-cell player-east east-1"></li>
            <li class="WENS__field-cell player-east east-2"></li>
            <li class="WENS__field-cell player-east east-3"></li>
            <li class="WENS__field-cell player-east east-4"></li>

            <li class="WENS__field-cell player-north north-1"></li>
            <li class="WENS__field-cell player-north north-2"></li>
            <li class="WENS__field-cell player-north north-3"></li>
            <li class="WENS__field-cell player-north north-4"></li>

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

            <li class="WENS__field-roll-dice"
                :class="{'west': isWestDice, 'east': isEastDice, 'north': isNorthDice, 'south': isSouthDice}">
                <button type="button" @click="handleRollDice">roll dice</button>
            </li>
        </ul>
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
            turn: 1,
            isWestDice: false,
            isEastDice: false,
            isNorthDice: false,
            isSouthDice: true,
            posWest1: 'west-1',
            posWest2: 'west-2',
            posWest3: 'west-3',
            posWest4: 'west-4',
            posEast1: 'east-1',
            posEast2: 'east-2',
            posEast3: 'east-3',
            posEast4: 'east-4',
            posNorth1: 'north-1',
            posNorth2: 'north-2',
            posNorth3: 'north-3',
            posNorth4: 'north-4',
            posSouth1: 'south-1',
            posSouth2: 'south-2',
            posSouth3: 'south-3',
            posSouth4: 'south-4',
            isMoveWest1: false,
            isMoveWest2: false,
            isMoveWest3: false,
            isMoveWest4: false,
            isMoveEast1: false,
            isMoveEast2: false,
            isMoveEast3: false,
            isMoveEast4: false,
            isMoveNorth1: false,
            isMoveNorth2: false,
            isMoveNorth3: false,
            isMoveNorth4: false,
            isMoveSouth1: false,
            isMoveSouth2: false,
            isMoveSouth3: false,
            isMoveSouth4: false,
        }
    },
    methods: {
        handleRollDice() {
            console.log("handleRollDice", this.isWestDice)
            this.dice1 = Math.floor(1 + Math.random() * 6)
            this.dice2 = Math.floor(1 + Math.random() * 6)
            if (this.dice1 !== 6 || this.dice2 !== 6) {
                this.turn++
            }
            if (this.turn === 1 || this.turn === 5) {
                this.turn = 1;
                this.isWestDice = false;
                this.isEastDice = false;
                this.isNorthDice = false;
                this.isSouthDice = true;
            } else if (this.turn === 2) {
                this.isWestDice = true;
                this.isEastDice = false;
                this.isNorthDice = false;
                this.isSouthDice = false;
            } else if (this.turn === 3) {
                this.isWestDice = false;
                this.isEastDice = false;
                this.isNorthDice = true;
                this.isSouthDice = false;
            } else {
                this.isWestDice = false;
                this.isEastDice = true;
                this.isNorthDice = false;
                this.isSouthDice = false;
            }
        },
        handleFieldClick(e) {
            console.log("handleFieldClick", e)
            e.path.map(el => {
                if (el.className) {
                    if (el.className.includes("player")) return
                }
            })

            if (this.isMoveWest1) {
                if (this.isMoveWest1 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "14") return
                    this.posWest1 = e.target.classList[1].split("-")[1]
                    this.isMoveWest1 = false
                }
            }
            if (this.isMoveWest2) {
                if (this.isMoveWest2 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "14") return
                    this.posWest2 = e.target.classList[1].split("-")[1]
                    this.isMoveWest2 = false
                }
            }
            if (this.isMoveWest3) {
                if (this.isMoveWest3 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "14") return
                    this.posWest3 = e.target.classList[1].split("-")[1]
                    this.isMoveWest3 = false
                }
            }
            if (this.isMoveWest4) {
                if (this.isMoveWest4 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "14") return
                    this.posWest4 = e.target.classList[1].split("-")[1]
                    this.isMoveWest4 = false
                }
            }

            if (this.isMoveEast1) {
                if (this.isMoveEast1 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "42") return
                    this.posEast1 = e.target.classList[1].split("-")[1]
                    this.isMoveEast1 = false
                }
            }
            if (this.isMoveEast2) {
                if (this.isMoveEast2 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "42") return
                    this.posEast2 = e.target.classList[1].split("-")[1]
                    this.isMoveEast2 = false
                }
            }
            if (this.isMoveEast3) {
                if (this.isMoveEast3 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "42") return
                    this.posEast3 = e.target.classList[1].split("-")[1]
                    this.isMoveEast3 = false
                }
            }
            if (this.isMoveEast4) {
                if (this.isMoveEast4 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "42") return
                    this.posEast4 = e.target.classList[1].split("-")[1]
                    this.isMoveEast4 = false
                }
            }

            if (this.isMoveNorth1) {
                if (this.isMoveNorth1 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "28") return
                    this.posNorth1 = e.target.classList[1].split("-")[1]
                    this.isMoveNorth1 = false
                }
            }
            if (this.isMoveNorth2) {
                if (this.isMoveNorth2 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "28") return
                    this.posNorth2 = e.target.classList[1].split("-")[1]
                    this.isMoveNorth2 = false
                }
            }
            if (this.isMoveNorth3) {
                if (this.isMoveNorth3 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "28") return
                    this.posNorth3 = e.target.classList[1].split("-")[1]
                    this.isMoveNorth3 = false
                }
            }
            if (this.isMoveNorth4) {
                if (this.isMoveNorth4 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "28") return
                    this.posNorth4 = e.target.classList[1].split("-")[1]
                    this.isMoveNorth4 = false
                }
            }

            if (this.isMoveSouth1) {
                if (this.isMoveSouth1 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "0") return
                    console.log("handleFieldClick", e.target.classList[1].split("-")[1])
                    this.posSouth1 = e.target.classList[1].split("-")[1]
                    this.isMoveSouth1 = false
                }
            }
            if (this.isMoveSouth2) {
                if (this.isMoveSouth2 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "0") return
                    this.posSouth2 = e.target.classList[1].split("-")[1]
                    this.isMoveSouth2 = false
                }
            }
            if (this.isMoveSouth3) {
                if (this.isMoveSouth3 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "0") return
                    this.posSouth3 = e.target.classList[1].split("-")[1]
                    this.isMoveSouth3 = false
                }
            }
            if (this.isMoveSouth4) {
                if (this.isMoveSouth4 === "home") {
                    if (e.target.classList[1].split("-")[1] !== "0") return
                    this.posSouth4 = e.target.classList[1].split("-")[1]
                    this.isMoveSouth4 = false
                }
            }
        },
        handlePlayerWest1(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest1")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("west-")) {
                    this.isMoveWest1 = "home"
                    this.isMoveWest2 = false
                    this.isMoveWest3 = false
                    this.isMoveWest4 = false
                }
            })
            // this.isMoveWest1 = true
            // this.isMoveWest2 = false
            // this.isMoveWest3 = false
            // this.isMoveWest4 = false
        },
        handlePlayerWest2(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest2", e)
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("west-")) {
                    this.isMoveWest1 = false
                    this.isMoveWest2 = "home"
                    this.isMoveWest3 = false
                    this.isMoveWest4 = false
                }
            })
            // this.isMoveWest1 = false
            // this.isMoveWest2 = true
            // this.isMoveWest3 = false
            // this.isMoveWest4 = false
        },
        handlePlayerWest3(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest3")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("west-")) {
                    this.isMoveWest1 = false
                    this.isMoveWest2 = false
                    this.isMoveWest3 = "home"
                    this.isMoveWest4 = false
                }
            })
            // this.isMoveWest1 = false
            // this.isMoveWest2 = false
            // this.isMoveWest3 = true
            // this.isMoveWest4 = false
        },
        handlePlayerWest4(e) {
            if (!this.isWestDice) return
            console.log("handlePlayerWest4")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("west-")) {
                    this.isMoveWest1 = false
                    this.isMoveWest2 = false
                    this.isMoveWest3 = false
                    this.isMoveWest4 = "home"
                }
            })
            // this.isMoveWest1 = false
            // this.isMoveWest2 = false
            // this.isMoveWest3 = false
            // this.isMoveWest4 = true
        },

        handlePlayerEast1(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast1")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("east-")) {
                    this.isMoveEast1 = "home"
                    this.isMoveEast2 = false
                    this.isMoveEast3 = false
                    this.isMoveEast4 = false
                }
            })
            // this.isMoveEast1 = true
            // this.isMoveEast2 = false
            // this.isMoveEast3 = false
            // this.isMoveEast4 = false
        },
        handlePlayerEast2(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast2", e)
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("east-")) {
                    this.isMoveEast1 = false
                    this.isMoveEast2 = "home"
                    this.isMoveEast3 = false
                    this.isMoveEast4 = false
                }
            })
            // this.isMoveEast1 = false
            // this.isMoveEast2 = true
            // this.isMoveEast3 = false
            // this.isMoveEast4 = false
        },
        handlePlayerEast3(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast3")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("east-")) {
                    this.isMoveEast1 = false
                    this.isMoveEast2 = false
                    this.isMoveEast3 = "home"
                    this.isMoveEast4 = false
                }
            })
            // this.isMoveEast1 = false
            // this.isMoveEast2 = false
            // this.isMoveEast3 = true
            // this.isMoveEast4 = false
        },
        handlePlayerEast4(e) {
            if (!this.isEastDice) return
            console.log("handlePlayerEast4")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("east-")) {
                    this.isMoveEast1 = false
                    this.isMoveEast2 = false
                    this.isMoveEast3 = false
                    this.isMoveEast4 = "home"
                }
            })
            // this.isMoveEast1 = false
            // this.isMoveEast2 = false
            // this.isMoveEast3 = false
            // this.isMoveEast4 = true
        },

        handlePlayerNorth1(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth1")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("north-")) {
                    this.isMoveNorth1 = "home"
                    this.isMoveNorth2 = false
                    this.isMoveNorth3 = false
                    this.isMoveNorth4 = false
                }
            })
            // this.isMoveNorth1 = true
            // this.isMoveNorth2 = false
            // this.isMoveNorth3 = false
            // this.isMoveNorth4 = false
        },
        handlePlayerNorth2(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth2", e)
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("north-")) {
                    this.isMoveNorth1 = false
                    this.isMoveNorth2 = "home"
                    this.isMoveNorth3 = false
                    this.isMoveNorth4 = false
                }
            })
            // this.isMoveNorth1 = false
            // this.isMoveNorth2 = true
            // this.isMoveNorth3 = false
            // this.isMoveNorth4 = false
        },
        handlePlayerNorth3(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth3")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("north-")) {
                    this.isMoveNorth1 = false
                    this.isMoveNorth2 = false
                    this.isMoveNorth3 = "home"
                    this.isMoveNorth4 = false
                }
            })
            // this.isMoveNorth1 = false
            // this.isMoveNorth2 = false
            // this.isMoveNorth3 = true
            // this.isMoveNorth4 = false
        },
        handlePlayerNorth4(e) {
            if (!this.isNorthDice) return
            console.log("handlePlayerNorth4")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("north-")) {
                    this.isMoveNorth1 = false
                    this.isMoveNorth2 = false
                    this.isMoveNorth3 = false
                    this.isMoveNorth4 = "home"
                }
            })
            // this.isMoveNorth1 = false
            // this.isMoveNorth2 = false
            // this.isMoveNorth3 = false
            // this.isMoveNorth4 = true
        },

        handlePlayerSouth1(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth1")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("south-")) {
                    this.isMoveSouth1 = "home"
                    this.isMoveSouth2 = false
                    this.isMoveSouth3 = false
                    this.isMoveSouth4 = false
                }
            })
            // this.isMoveSouth1 = true
            // this.isMoveSouth2 = false
            // this.isMoveSouth3 = false
            // this.isMoveSouth4 = false
        },
        handlePlayerSouth2(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth2", e)
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("south-")) {
                    this.isMoveSouth1 = false
                    this.isMoveSouth2 = "home"
                    this.isMoveSouth3 = false
                    this.isMoveSouth4 = false
                }
            })
            // this.isMoveSouth1 = false
            // this.isMoveSouth2 = true
            // this.isMoveSouth3 = false
            // this.isMoveSouth4 = false
        },
        handlePlayerSouth3(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth3")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("south-")) {
                    this.isMoveSouth1 = false
                    this.isMoveSouth2 = false
                    this.isMoveSouth3 = "home"
                    this.isMoveSouth4 = false
                }
            })
            // this.isMoveSouth1 = false
            // this.isMoveSouth2 = false
            // this.isMoveSouth3 = true
            // this.isMoveSouth4 = false
        },
        handlePlayerSouth4(e) {
            if (!this.isSouthDice) return
            console.log("handlePlayerSouth4")
            e.path.map(el => {
                if (el.nodeName === "LI" && el.className.includes("south-")) {
                    this.isMoveSouth1 = false
                    this.isMoveSouth2 = false
                    this.isMoveSouth3 = false
                    this.isMoveSouth4 = "home"
                }
            })
            // this.isMoveSouth1 = false
            // this.isMoveSouth2 = false
            // this.isMoveSouth3 = false
            // this.isMoveSouth4 = true
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

            .player-west,
            .player-east,
            .player-north,
            .player-south {
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

            .player-west {
                background-color: blue;
            }

            .player-east {
                background-color: green;
            }

            .player-north {
                background-color: black;
            }

            .player-south {
                background-color: red;
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
        }

        &-roll-dice {
            position: absolute;
            font-size: 2em;

            &.west {
                top: 8em;
                left: 0;
            }

            &.east {
                right: 0;
                bottom: 8em;
            }

            &.north {
                top: 0;
                right: 6.5em;
            }

            &.south {
                bottom: 0;
                left: 6.5em;
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