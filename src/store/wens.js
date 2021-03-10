export default {
    state: {
        diceInscription: "roll dice",
    },

    getters: {
        getDiceInscription: state => state.diceInscription
    },

    mutations: {
        setDiceInscription(state, payload) {
            state.diceInscription = payload;
        },
    },

    actions: {
    },
};
