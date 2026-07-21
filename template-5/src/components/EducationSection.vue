<template>
  <section id="education" class="section section-alt">
    <div class="section-inner--narrow" style="max-width: 860px; margin: 0 auto;">
      <!-- Heading -->
      <div ref="headingRef" class="reveal" style="margin-bottom: 0;">
        <SectionHeading first-word="Education" second-word="Journey" />
      </div>

      <!-- Timeline -->
      <div class="timeline-wrap">
        <div class="timeline-line" ref="lineRef">
          <div class="timeline-line-fill" :style="{ transform: `scaleY(${lineProgress})` }" />
        </div>

        <div
          v-for="(entry, i) in portfolio.education"
          :key="entry.institution"
          class="timeline-entry"
        >
          <!-- Left content (even index, desktop only) -->
          <div class="timeline-side timeline-side--left">
            <div
              v-if="i % 2 === 0"
              class="reveal reveal--left timeline-content"
              :ref="el => leftRefs[i] = el"
              :style="{ transitionDelay: `${i * 0.15}s` }"
            >
              <h3 class="tl-degree">{{ entry.degree }}</h3>
              <p class="tl-institution">{{ entry.institution }}</p>
              <p class="tl-period font-mono">{{ entry.period }}</p>
            </div>
          </div>

          <!-- Center dot -->
          <div class="timeline-center">
            <div
              class="timeline-dot"
              :ref="el => dotRefs[i] = el"
              :class="['dot-reveal', dotVisible[i] ? 'dot-reveal--visible' : '']"
            >
              <v-icon icon="mdi-school" size="18" color="#22c55e" />
            </div>
          </div>

          <!-- Right content (odd=desktop, all=mobile) -->
          <div class="timeline-side timeline-side--right">
            <div
              class="reveal reveal--right timeline-content"
              :class="{ 'desktop-only': i % 2 === 0 }"
              :ref="el => rightRefs[i] = el"
              :style="{ transitionDelay: `${i * 0.15}s` }"
            >
              <h3 class="tl-degree">{{ entry.degree }}</h3>
              <p class="tl-institution">{{ entry.institution }}</p>
              <p class="tl-period font-mono">{{ entry.period }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolio } from '@/data/portfolio.js'
import SectionHeading from '@/components/SectionHeading.vue'

const headingRef = ref(null)
const lineRef    = ref(null)
const leftRefs   = ref([])
const rightRefs  = ref([])
const dotRefs    = ref([])
const dotVisible = ref(portfolio.education.map(() => false))
const lineProgress = ref(0)

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)) }

function updateLine() {
  if (!lineRef.value) return
  const rect = lineRef.value.getBoundingClientRect()
  const viewH = window.innerHeight
  const progress = clamp((viewH * 0.8 - rect.top) / rect.height, 0, 1)
  lineProgress.value = progress
}

onMounted(() => {
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target) } }),
    { threshold: 0.1 }
  )

  const dotObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      const idx = dotRefs.value.indexOf(e.target)
      if (e.isIntersecting && idx !== -1) { dotVisible.value[idx] = true; dotObserver.unobserve(e.target) }
    }),
    { threshold: 0.5 }
  )

  ;[headingRef.value, ...leftRefs.value, ...rightRefs.value].filter(Boolean).forEach(el => revealObserver.observe(el))
  dotRefs.value.filter(Boolean).forEach(el => dotObserver.observe(el))

  window.addEventListener('scroll', updateLine, { passive: true })
  updateLine()
})

onUnmounted(() => window.removeEventListener('scroll', updateLine))
</script>

<style scoped>
.timeline-wrap {
  position: relative;
  margin-top: 8px;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.07);
  overflow: hidden;
}

.timeline-line-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.3));
  transform-origin: top;
  transition: transform 0.1s;
}

.timeline-entry {
  display: grid;
  grid-template-columns: 1fr 56px 1fr;
  align-items: center;
  padding-bottom: 56px;
}
.timeline-entry:last-child { padding-bottom: 0; }

.timeline-side {
  display: flex;
}
.timeline-side--left  { justify-content: flex-end; padding-right: 24px; }
.timeline-side--right { justify-content: flex-start; padding-left: 24px; }

.timeline-center {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.timeline-dot {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  border: 2px solid rgba(34,197,94,0.4);
  background: rgba(34,197,94,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dot-reveal {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.dot-reveal--visible {
  opacity: 1;
  transform: scale(1);
}

.timeline-content {
  max-width: 300px;
  text-align: left;
}
.timeline-side--left .timeline-content { text-align: right; }

.tl-degree      { font-size: 1.0625rem; font-weight: 700; color: #f4f4f5; margin-bottom: 4px; }
.tl-institution { font-size: 0.875rem;  font-weight: 500; color: #22c55e; margin-bottom: 4px; }
.tl-period      { font-size: 0.75rem;   color: #52525b; font-family: 'JetBrains Mono', monospace; }

.accent   { color: #22c55e; }
.font-mono{ font-family: 'JetBrains Mono', monospace; }

/* Hide even-index right-slot content on desktop (left slot shows instead) */
@media (min-width: 641px) {
  .desktop-only { display: none; }
}

@media (max-width: 640px) {
  .timeline-entry {
    grid-template-columns: 40px 1fr;
  }
  .timeline-line  { left: 20px; }
  .timeline-side--left  { display: none; }
  .timeline-center      { padding-left: 0; }
  .timeline-side--right { padding-left: 16px; }
  .timeline-side--right .timeline-content { max-width: none; text-align: left; }
}
</style>
