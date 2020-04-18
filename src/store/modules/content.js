import content from "@/content/content.json";

export default {
  actions: {
    getDatas() {
      return content;
    }
  },
  state: {
    content: []
  },
  getters: {
    allContent({ content }) {
      return content;
    }
  }
};