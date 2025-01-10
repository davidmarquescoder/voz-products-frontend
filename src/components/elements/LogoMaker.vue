<template>
  <div class="d-flex align-center justify-center mt-6">
    <div
      :style="{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, height: lineHeight, width: lineWidth }"
    />

    <v-avatar
      :size="avatarSize"
      :style="{ background: `linear-gradient(45deg, ${gradient[0]}, ${gradient[1]})` }"
    >
      <v-icon
        :icon="icon"
        :size="iconSize"
        :color="iconColor"
      />
    </v-avatar>

    <div
      :style="{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, height: lineHeight, width: lineWidth }"
    />
  </div>
</template>

<script>
  export default {
    props: {
      gradient: {
        type: Array,
        required: true,
      },
      color: {
        type: String,
        default: '#FF3D00',
        required: false,
      },
      icon: {
        type: String,
        default: 'mdi-calendar-clock',
        required: false,
      },
      iconColor: {
        type: String,
        default: '#fff',
        required: false,
      },
      iconSize: {
        type: String,
        default: '36',
        required: false,
      },
      avatarSize: {
        type: String,
        default: '88',
        required: false,
      },
      lineHeight: {
        type: String,
        default: '2px',
        required: false,
      },
      lineWidth: {
        type: String,
        default: '80px',
        required: false,
      },
    },
    data() {
      return {

      }
    },
  }
</script>
