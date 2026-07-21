<template>
  <section id="skills" class="section section-alt" style="overflow: hidden;">
    <div class="section-inner">
      <!-- Heading -->
      <div ref="headingRef" class="reveal">
        <SectionHeading first-word="My" second-word="Skills" />
      </div>

      <!-- Marquee rows -->
      <div ref="marqueeRef" class="reveal" style="transition-delay:0.1s; margin-bottom: 48px;">
        <div class="marquee-wrapper">
          <div class="marquee-track">
            <span v-for="(s, i) in doubleRow1" :key="'r1-' + i" class="skill-chip">{{ s }}</span>
          </div>
        </div>
        <div class="marquee-wrapper" style="margin-top: 8px;">
          <div class="marquee-track marquee-track--reverse">
            <span v-for="(s, i) in doubleRow2" :key="'r2-' + i" class="skill-chip">{{ s }}</span>
          </div>
        </div>
      </div>

      <!-- Category cards -->
      <div class="skills-grid">
        <div
          v-for="(cat, i) in skillCategories"
          :key="cat.label"
          class="reveal portfolio-card skill-card"
          :style="{ transitionDelay: `${i * 0.06}s` }"
          :ref="el => cardRefs[i] = el"
        >
          <div class="skill-card-header">
            <div class="skill-icon" :style="{ color: cat.color }">
              <v-icon :icon="cat.icon" size="20" />
            </div>
            <span class="skill-label">{{ cat.label }}</span>
          </div>
          <div class="skill-chips">
            <span v-for="skill in cat.skills" :key="skill" class="skill-chip skill-chip--sm">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { portfolio } from '@/data/portfolio.js'
import SectionHeading from '@/components/SectionHeading.vue'

const skillCategories = [
  { label: 'Languages', icon: 'mdi-code-tags',         color: '#60a5fa', skills: portfolio.skills.languages },
  { label: 'Frontend',  icon: 'mdi-monitor-screenshot', color: '#22d3ee', skills: portfolio.skills.frontend  },
  { label: 'Backend',   icon: 'mdi-database',            color: '#fb923c', skills: portfolio.skills.backend   },
  { label: 'AI / ML',   icon: 'mdi-brain',               color: '#f87171', skills: portfolio.skills.ai        },
  { label: 'Tools',     icon: 'mdi-tools',               color: '#fbbf24', skills: portfolio.skills.tools     },
  { label: 'Cloud',     icon: 'mdi-cloud-outline',        color: '#4ade80', skills: portfolio.skills.cloud     },
]

const allSkills  = skillCategories.flatMap(c => c.skills)
const mid        = Math.ceil(allSkills.length / 2)
const row1       = allSkills.slice(0, mid)
const row2       = allSkills.slice(mid)
const doubleRow1 = computed(() => [...row1, ...row1])
const doubleRow2 = computed(() => [...row2, ...row2])

const headingRef = ref(null)
const marqueeRef = ref(null)
const cardRefs   = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  const els = [headingRef.value, marqueeRef.value, ...cardRefs.value].filter(Boolean)
  els.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 550px) { .skills-grid { grid-template-columns: 1fr; } }

.skill-card { padding: 20px; cursor: default; }

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.skill-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s;
}

.skill-card:hover .skill-icon { transform: scale(1.1); }

.skill-label {
  font-weight: 600;
  font-size: 0.9375rem;
  color: #f4f4f5;
  transition: color 0.2s;
}

.skill-card:hover .skill-label { color: #22c55e; }

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-chip--sm {
  font-size: 0.6875rem;
  padding: 3px 9px;
}

.accent { color: #22c55e; }
</style>
