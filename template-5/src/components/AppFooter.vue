<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <p class="footer-copy">
        &copy; {{ year }} {{ portfolio.personal.name }}. All rights reserved.
      </p>

      <div class="footer-socials">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          :title="social.label"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon :icon="social.icon" :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { portfolio, socialLinks } from '@/data/portfolio.js'
import SocialIcon from '@/components/SocialIcon.vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 28px 24px;
  background: #0a0a0a;
}

.footer-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copy {
  font-size: 0.8125rem;
  color: #52525b;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}
</style>
