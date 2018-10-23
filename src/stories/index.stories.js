/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../components/MyButton.vue'
import PreviewCard from '../components/PreviewCard.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))

storiesOf('PreviewCard', module)
  .add('with primary and secondary text', () => ({
    components: { PreviewCard },
    template: '<PreviewCard primary-text="New Document" secondary-text="Modified 10/22/18"/>',
    methods: { action: action('clicked') }
  }))
  .add('with menu', () => ({
    components: { PreviewCard },
    template: `
      <PreviewCard primary-text="New Document" secondary-text="Modified 10/22/18">
        <template slot="menu">
          <v-list>
            <v-list-tile>
              <v-list-tile-action><v-icon>file_copy</v-icon></v-list-tile-action>
              <v-list-tile-title>Create a copy</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action><v-icon>edit</v-icon></v-list-tile-action>
              <v-list-tile-title>Rename</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action><v-icon>delete</v-icon></v-list-tile-action>
              <v-list-tile-title>Remove</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action><v-icon>open_in_new</v-icon></v-list-tile-action>
              <v-list-tile-title>Edit in New Tab</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action><v-icon>person</v-icon></v-list-tile-action>
              <v-list-tile-title>Used By</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </template>
      <PreviewCard>
    `,
    methods: { action: action('clicked') }
  }))
