import content from "@/content/content.json";

export default {
    actions: {
        setContentLang({ commit }, lang) {
          // console.log('content.nav :>> ', content[0].nav);
            return commit(
                "updateContentLang",
                content.find((el) => lang === el.lang)
            );
        },
    },
    mutations: {
        updateContentLang(state, content) {
            state.contentLang = content;
        },
    },
    state: {
        contentLang: [],
    },
    getters: {
        getContentLang({ contentLang }) {
            return contentLang;
        },
    },
};
