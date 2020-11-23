import content from "@/content/content.json";

export default {
    state: {
        contentLang: {},
    },

    getters: {
        getContentLang: state => state.contentLang
    },

    mutations: {
        setContentLang(state, payload) {
            state.contentLang = payload;
        },
    },

    actions: {
        updateContentLang({ commit }, lang) {
            const completeContent = content.find((el) => el.lang === lang)
            return commit("setContentLang", completeContent);
        },
    },
};
