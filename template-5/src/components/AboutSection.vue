<template>
  <section id="about" class="section">
    <div class="section-inner">
      <!-- Heading -->
      <div ref="headingRef" class="reveal">
        <SectionHeading first-word="About" second-word="Me" />
      </div>

      <!-- Grid -->
      <div class="about-grid">
        <!-- Text -->
        <div ref="textRef" class="reveal reveal--left" style="transition-delay: 0.15s;">
          <p class="about-description">
            {{ portfolio.personal.description }}
          </p>

          <div class="about-meta">
            <div class="meta-item">
              <v-icon icon="mdi-map-marker" size="16" color="#22c55e" />
              <span>{{ portfolio.personal.location }}</span>
            </div>
            <div class="meta-item">
              <v-icon icon="mdi-school" size="16" color="#22c55e" />
              <span>{{ portfolio.personal.education }}</span>
            </div>
            <div class="meta-item">
              <v-icon icon="mdi-email" size="16" color="#22c55e" />
              <a :href="`mailto:${portfolio.personal.email}`" class="meta-link">
                {{ portfolio.personal.email }}
              </a>
            </div>
          </div>
        </div>

        <!-- Profile photo card -->
        <div ref="imgRef" class="reveal reveal--right" style="transition-delay: 0.3s;">
          <div class="about-image-wrap">
            <div class="about-image-card">
              <!-- saadi.png is the profile photo. Falls back to placeholder if missing.
                   :src (dynamic binding) prevents Vite from resolving this at build time
                   since the file is placed in public/ by the user after deployment. -->
              <img
                v-if="!imgFailed"
                :src="profileSrc"
                alt="Saadi Safdar"
                class="about-photo"
                @error="imgFailed = true"
              />
              <!-- Placeholder shown when saadi.png is not yet placed in /public/ -->
              <div v-else class="about-photo-placeholder">
                <v-icon icon="mdi-account" size="80" color="#3f3f46" />
                <p class="placeholder-hint">Place <code>saadi.png</code> in <code>public/</code></p>
              </div>
              <div class="about-image-overlay" />
            </div>
            <p class="about-caption font-hand">— always curious, always building</p>
            <div class="glow-blob glow-blob--br" />
            <div class="glow-blob glow-blob--tl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolio } from '@/data/portfolio.js'
import SectionHeading from '@/components/SectionHeading.vue'

const headingRef = ref(null)
const textRef    = ref(null)
const imgRef     = ref(null)
const imgFailed  = ref(false)

// Dynamic string — prevents Vite from statically resolving a missing public asset at build time.
// Place your photo at:  template-5/public/saadi.png
const profileSrc = '/saadi.png'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  ;[headingRef.value, textRef.value, imgRef.value].forEach(el => el && observer.observe(el))
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
}

.about-description {
  color: #a1a1aa;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 28px;
}

.about-meta { display: flex; flex-direction: column; gap: 12px; }

.meta-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #a1a1aa;
}

.meta-link {
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.2s;
}
.meta-link:hover { color: #22c55e; }

.about-image-wrap {
  position: relative;
  max-width: 380px;
  margin: 0 auto;
}

.about-image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  background: #141414;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

/* Profile photo (saadi.png) */
.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Shown when saadi.png is missing */
.about-photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.placeholder-hint {
  font-size: 0.75rem;
  color: #3f3f46;
  text-align: center;
  line-height: 1.4;
}
.placeholder-hint code {
  color: #52525b;
  font-family: 'JetBrains Mono', monospace;
}

.about-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%);
}

.about-caption {
  text-align: center;
  margin-top: 16px;
  color: #52525b;
  font-size: 1.1rem;
}

.glow-blob {
  position: absolute;
  border-radius: 9999px;
  background: rgba(34,197,94,0.12);
  filter: blur(32px);
  pointer-events: none;
}
.glow-blob--br { width: 96px; height: 96px; bottom: -12px; right: -12px; }
.glow-blob--tl { width: 64px;  height: 64px;  top: -12px;    left: -12px;  }

.font-script { font-family: 'Sacramento', cursive; }
.font-hand   { font-family: 'Caveat', cursive; }
.accent      { color: #22c55e; }
</style>
