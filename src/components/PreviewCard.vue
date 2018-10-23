<template>
  <v-card
    class="card">
    <div @click="$emit('click')">
      <div class="preview-area">
        <slot name="image"/>
      </div>
      <div class="footer">
        <div class="text-area">
          <div
            class="primary-text">
            {{ primaryText }}
          </div>
          <div class="secondary-text">{{ secondaryText }}</div>
        </div>
        <v-menu
          v-if="$slots.menu"
          bottom
          left
          @click.native.stop
        >
          <v-btn
            slot="activator"
            icon>
            <v-icon
              class="menu-button">
              more_vert
            </v-icon>
          </v-btn>
          <slot name="menu"/>
        </v-menu>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PreviewCard',
  props: {
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  width: 208px;
}
.preview-area {
  background-color: #143a5a;
  height: 156px;
  width: 208px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 8px;
  padding-left: 14px;
}
.text-area {
  overflow: hidden;
}
.primary-text {
  font-weight: 500;
  font-size: 14px;
  color: #444;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.secondary-text {
  font-size: 12px;
  color: #7d7d7d;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
