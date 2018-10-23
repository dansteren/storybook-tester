import "vuetify/dist/vuetify.css";
import { configure } from "@storybook/vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
