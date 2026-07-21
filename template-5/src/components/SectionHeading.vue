<template>
  <div class="section-heading-wrap" :class="{ 'text-center': center }">
    <h2 class="section-heading">
      {{ firstWord }} <span class="accent font-script heading-accent-script">{{ secondWord }}</span>
    </h2>
    <div class="heading-bar" :class="{ 'heading-bar--center': center }" />
  </div>
</template>

<script setup>
defineProps({
  firstWord: { type: String, required: true },
  secondWord: { type: String, required: true },
  center: { type: Boolean, default: false },
})
</script>

<style scoped>
.section-heading-wrap {
  margin-bottom: 0;
}
.section-heading-wrap.text-center {
  text-align: center;
}

/* Accent script word styling matching About Me */
.heading-accent-script {
  font-size: 3rem;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
}

.font-script {
  font-family: 'Sacramento', cursive;
}

.accent {
  color: #22c55e;
}
</style>
