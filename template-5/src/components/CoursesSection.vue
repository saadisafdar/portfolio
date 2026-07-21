<template>
  <section id="courses" class="section section-alt" style="overflow: hidden; position: relative;">
    <!-- Dot grid background -->
    <div class="dot-bg" />

    <div class="section-inner" style="position: relative; z-index: 1;">
      <!-- Heading -->
      <div ref="headingRef" class="reveal">
        <SectionHeading first-word="Professional" second-word="Courses" />
      </div>

      <!-- Grid -->
      <div class="courses-grid">
        <a
          v-for="(course, i) in portfolio.courses"
          :key="course.platform"
          :href="course.link"
          target="_blank"
          rel="noopener noreferrer"
          class="reveal portfolio-card course-card"
          :style="{ transitionDelay: `${i * 0.06}s` }"
          :ref="el => cardRefs[i] = el"
        >
          <div class="course-header">
            <div class="course-icon" :style="iconStyle(course.platform)">
              <v-icon icon="mdi-certificate" size="20" />
            </div>
            <v-icon icon="mdi-open-in-new" size="16" class="course-ext-icon" />
          </div>
          <h3 class="course-platform">{{ course.platform }}</h3>
          <p class="course-description">{{ course.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolio } from '@/data/portfolio.js'
import SectionHeading from '@/components/SectionHeading.vue'

const platformColors = {
  'Coursera':          { color: '#60a5fa', background: 'rgba(96,165,250,0.12)'  },
  'Google Developers': { color: '#4ade80', background: 'rgba(74,222,128,0.12)'  },
  'Credly':            { color: '#fb923c', background: 'rgba(251,146,60,0.12)'  },
  'Microsoft Learn':   { color: '#38bdf8', background: 'rgba(56,189,248,0.12)'  },
  'Kaggle':            { color: '#22d3ee', background: 'rgba(34,211,238,0.12)'  },
  'HubSpot Academy':   { color: '#fbbf24', background: 'rgba(251,191,36,0.12)'  },
  'Anthropic':         { color: '#f87171', background: 'rgba(248,113,113,0.12)' },
  'LinkedIn Learning': { color: '#60a5fa', background: 'rgba(96,165,250,0.12)'  },
  'Forage':            { color: '#c084fc', background: 'rgba(192,132,252,0.12)' },
}

function iconStyle(platform) {
  return platformColors[platform] ?? { color: '#22c55e', background: 'rgba(34,197,94,0.1)' }
}

const headingRef = ref(null)
const cardRefs   = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  ;[headingRef.value, ...cardRefs.value].filter(Boolean).forEach(el => observer.observe(el))
})
</script>

<style scoped>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 900px) { .courses-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 550px) { .courses-grid { grid-template-columns: 1fr; } }

.course-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-decoration: none;
  cursor: pointer;
}

.course-card:hover {
  border-color: rgba(34,197,94,0.35);
  box-shadow: 0 8px 32px rgba(34,197,94,0.08);
  transform: translateY(-4px) scale(1.005);
}

.course-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.course-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34,197,94,0.1);
  color: #22c55e;
  transition: transform 0.2s;
}
.course-icon .v-icon { color: inherit; }
.course-card:hover .course-icon { transform: scale(1.1); }

.course-ext-icon {
  color: #52525b;
  transition: color 0.2s, transform 0.2s;
}
.course-card:hover .course-ext-icon { color: #22c55e; transform: rotate(15deg); }

.course-platform {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #f4f4f5;
  margin-bottom: 6px;
  transition: color 0.2s;
}
.course-card:hover .course-platform { color: #22c55e; }

.course-description {
  font-size: 0.8125rem;
  color: #71717a;
  line-height: 1.5;
}

.accent { color: #22c55e; }
</style>
