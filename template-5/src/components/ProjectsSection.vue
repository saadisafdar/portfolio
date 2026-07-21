<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <!-- Heading -->
      <div ref="headingRef" class="reveal">
        <SectionHeading first-word="Featured" second-word="Projects" />
      </div>

      <!-- Grid -->
      <div class="projects-grid">
        <div
          v-for="(project, i) in portfolio.projects"
          :key="project.id"
          class="reveal portfolio-card project-card"
          :style="{ transitionDelay: `${i * 0.08}s` }"
          :ref="el => cardRefs[i] = el"
        >
          <!-- Hover gradient overlay -->
          <div class="project-overlay" />

          <div class="project-body">
            <!-- Top row: number + featured star + category -->
            <div class="project-top">
              <div class="project-meta-left">
                <span class="project-num font-mono">{{ String(project.id).padStart(2, '0') }}</span>
                <span v-if="project.featured" class="star-wiggle" title="Featured">⭐</span>
              </div>
              <span class="project-category">{{ project.category }}</span>
            </div>

            <!-- Title -->
            <h3 class="project-title">{{ project.title }}</h3>

            <!-- Description -->
            <p class="project-desc">{{ project.description }}</p>

            <!-- Tags -->
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="skill-chip skill-chip--xs">{{ tag }}</span>
            </div>

            <!-- GitHub link -->
            <a
              :href="project.github"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon icon="mdi-github" size="15" />
              Code
            </a>
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; } }

.project-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34,197,94,0.05), transparent);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  border-radius: 12px;
}
.project-card:hover .project-overlay { opacity: 1; }

.project-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.project-meta-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: #22c55e;
}

.project-category {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.1);
  color: #a1a1aa;
  transition: border-color 0.2s;
}
.project-card:hover .project-category { border-color: rgba(34,197,94,0.4); }

.project-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f4f4f5;
  margin-bottom: 10px;
  transition: color 0.2s;
}
.project-card:hover .project-title { color: #22c55e; }

.project-desc {
  font-size: 0.875rem;
  color: #71717a;
  line-height: 1.65;
  margin-bottom: 16px;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.skill-chip--xs {
  font-size: 0.65rem;
  padding: 2px 8px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #a1a1aa;
  border: 1px solid rgba(255,255,255,0.1);
  text-decoration: none;
  width: fit-content;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.project-link:hover {
  background: #22c55e;
  color: #0a0a0a;
  border-color: #22c55e;
}

.accent { color: #22c55e; }
.font-mono { font-family: 'JetBrains Mono', monospace; }
</style>
