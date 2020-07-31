import content from "@/content/content.json";

export default {
    actions: {
        setContentLang({ commit }, lang) {
            return commit(
                "updateContentLang",
                content.find((el) => el.lang === lang)
            );
        },
    },
    mutations: {
        updateContentLang(state, content) {
            state.contentLang = content;
        },
    },
    state: {
        contentLang: {},
    },
    getters: {
        getContentLang({ contentLang }) {
            return contentLang;
        },
    },
};
