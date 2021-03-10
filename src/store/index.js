import Vue from "vue";
import Vuex from "vuex";
import content from "./content";
import wens from "./wens";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content,
    wens
  }
});
