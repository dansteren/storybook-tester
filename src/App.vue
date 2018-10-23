<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div class="centered">
        <PreviewCard primary-text="My new document item" secondary-text="Modified 10/22/18"/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { PreviewCard } from './components'

export default {
  name: 'App',
  components: {
    PreviewCard
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.centered {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
