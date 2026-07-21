<template>
  <section class="hero-section">
    <!-- Particle canvas -->
    <canvas ref="canvasRef" class="hero-canvas" aria-hidden="true" />

    <!-- Content -->
    <div class="hero-content">
      <!-- Subtitle -->
      <p class="hero-subtitle anim-fade-in-up delay-200">
        Computer Science Student &amp; Full-Stack Developer
      </p>

      <!-- Heading -->
      <h1 class="hero-heading font-display" aria-label="Hi, I'm Saadi">
        <span class="hero-heading-plain">
          <span
            v-for="(ch, i) in hiChars"
            :key="'hi-' + i"
            class="hero-letter"
            :style="{ animationDelay: `${0.3 + i * 0.06}s` }"
          >{{ ch === ' ' ? '\u00a0' : ch }}</span>
        </span><span class="hero-heading-name">
          <span
            v-for="(ch, i) in nameChars"
            :key="'name-' + i"
            class="hero-letter hero-letter--green"
            :style="{ animationDelay: `${0.3 + (hiChars.length + 1 + i) * 0.06}s` }"
          >{{ ch }}</span>
        </span>
      </h1>

      <!-- Tagline -->
      <p class="hero-tagline anim-fade-in-up delay-900">
        Building intelligent software, full-stack web apps, and AI-powered
        solutions through clean, practical code.
      </p>

      <!-- CTA buttons -->
      <div class="hero-ctas anim-fade-in-up delay-1000">
        <a href="#projects" class="btn-primary" @click.prevent="smoothScroll('#projects')">
          View My Work
        </a>
        <a href="#contact" class="btn-outline" @click.prevent="smoothScroll('#contact')">
          Get In Touch
        </a>
      </div>

      <!-- Social links -->
      <div class="hero-socials anim-fade-in delay-1200">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          :title="social.label"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon :icon="social.icon" :size="22" />
        </a>
      </div>
    </div>

    <!-- Scroll arrow -->
    <a href="#about" class="scroll-arrow anim-fade-in delay-2000" @click.prevent="smoothScroll('#about')">
      <v-icon icon="mdi-chevron-down" size="28" class="anim-bounce-y" />
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { socialLinks } from '@/data/portfolio.js'
import SocialIcon from '@/components/SocialIcon.vue'

const hiChars   = "Hi, I'm".split('')
const nameChars = "Saadi".split('')

const canvasRef = ref(null)
let animFrame = null

function smoothScroll(href) {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ── Particle system ── */
function initParticles(canvas) {
  const ctx = canvas.getContext('2d')
  let W = 0, H = 0
  let particles = []

  function resize() {
    W = canvas.width  = canvas.offsetWidth
    H = canvas.height = canvas.offsetHeight
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.5 + 0.15,
    }
  }

  function reset() {
    particles = Array.from({ length: 500 }, createParticle)
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0) p.x = W
      if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H
      if (p.y > H) p.y = 0
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34,197,94,${p.alpha})`
      ctx.fill()
    }
    animFrame = requestAnimationFrame(draw)
  }

  const ro = new ResizeObserver(() => { resize(); reset() })
  ro.observe(canvas)
  resize()
  reset()
  draw()
  return () => { ro.disconnect(); cancelAnimationFrame(animFrame) }
}

let cleanup = null
onMounted(() => { if (canvasRef.value) cleanup = initParticles(canvasRef.value) })
onUnmounted(() => cleanup?.())
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0a0a0a;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 896px;
  margin: 0 auto;
}

.hero-subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8125rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #22c55e;
  margin-bottom: 20px;
}

.hero-heading {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 400;
  line-height: 1.0;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-heading-plain {
  color: #f4f4f5;
}

.hero-heading-name {
  /* word gap — margin-left adds the space between "I'm" and "Saadi" */
  margin-left: 0.28em;
}

/* Each green letter gets an explicit solid color so the animation
   (fadeInBlur with opacity:0 → 1) works correctly.
   background-clip:text on a parent does NOT affect display:inline-block children. */
.hero-letter--green {
  color: #22c55e;
}

.hero-tagline {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #71717a;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 36px;
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}

.hero-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
}

.scroll-arrow {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #52525b;
  text-decoration: none;
  transition: color 0.2s;
  z-index: 2;
}
.scroll-arrow:hover { color: #22c55e; }
</style>
