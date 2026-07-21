<template>
  <section id="contact" class="section">
    <div class="section-inner--narrow" style="max-width: 860px; margin: 0 auto;">
      <!-- Heading -->
      <div ref="headingRef" class="reveal" style="text-align: center; margin-bottom: 12px;">
        <SectionHeading first-word="Contact" second-word="Me" :center="true" />
        <p class="contact-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities and ideas.
        </p>
      </div>

      <!-- Two columns -->
      <div class="contact-grid">
        <!-- Info card -->
        <div ref="infoRef" class="reveal reveal--left glass-card contact-info" style="transition-delay:0.15s;">
          <div class="info-row">
            <div class="info-icon">
              <v-icon icon="mdi-email-outline" size="20" color="#22c55e" />
            </div>
            <div>
              <p class="info-label">Email</p>
              <a :href="`mailto:${portfolio.personal.email}`" class="info-value info-link">
                {{ portfolio.personal.email }}
              </a>
            </div>
          </div>

          <div class="info-row">
            <div class="info-icon">
              <v-icon icon="mdi-map-marker-outline" size="20" color="#22c55e" />
            </div>
            <div>
              <p class="info-label">Location</p>
              <p class="info-value">{{ portfolio.personal.location }}</p>
            </div>
          </div>

          <div class="info-row">
            <div class="info-icon">
              <v-icon icon="mdi-phone-outline" size="20" color="#22c55e" />
            </div>
            <div>
              <p class="info-label">Phone</p>
              <a :href="`tel:${portfolio.personal.phone}`" class="info-value info-link">
                {{ portfolio.personal.phone }}
              </a>
            </div>
          </div>

          <div class="info-divider" />
          <p class="info-label" style="margin-bottom: 14px;">Connect with me</p>
          <div class="contact-socials">
            <a
              v-for="s in socialLinks"
              :key="s.label"
              :href="s.href"
              :title="s.label"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon :icon="s.icon" :size="20" />
            </a>
          </div>
        </div>

        <!-- Form card -->
        <div ref="formRef" class="reveal reveal--right glass-card contact-form" style="transition-delay:0.3s;">
          <form :action="`mailto:${portfolio.personal.email}`" method="post" enctype="text/plain" @submit.prevent="submitForm">
            <div class="form-group">
              <label class="form-label" for="contact-name">Name</label>
              <input id="contact-name" v-model="form.name" name="name" type="text" class="form-input" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-email">Email</label>
              <input id="contact-email" v-model="form.email" name="email" type="email" class="form-input" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-message">Message</label>
              <textarea id="contact-message" v-model="form.message" name="message" class="form-input" placeholder="Your message..." rows="5" required />
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; justify-content: center;">
              <v-icon icon="mdi-send" size="16" />
              Send Message
            </button>

            <p v-if="sent" class="form-success">
              <v-icon icon="mdi-check-circle-outline" size="16" color="#22c55e" />
              Message sent! Thank you for reaching out.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolio, socialLinks } from '@/data/portfolio.js'
import SocialIcon from '@/components/SocialIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

function submitForm() {
  const subject = encodeURIComponent(`Portfolio Contact from ${form.value.name}`)
  const body = encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`)
  window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`
  sent.value = true
  setTimeout(() => { sent.value = false }, 5000)
}

const headingRef = ref(null)
const infoRef    = ref(null)
const formRef    = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  ;[headingRef.value, infoRef.value, formRef.value].filter(Boolean).forEach(el => observer.observe(el))
})
</script>

<style scoped>
.contact-subtitle {
  color: #71717a;
  max-width: 500px;
  margin: 0 auto 48px;
  line-height: 1.65;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

@media (max-width: 700px) { .contact-grid { grid-template-columns: 1fr; } }

.contact-info, .contact-form {
  padding: 28px;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  transition: transform 0.2s;
}
.info-row:hover { transform: translateX(4px); }

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(34,197,94,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-label { font-size: 0.75rem; color: #52525b; margin-bottom: 2px; }
.info-value { font-size: 0.875rem; color: #f4f4f5; }
.info-link  { text-decoration: none; transition: color 0.2s; }
.info-link:hover { color: #22c55e; }

.info-divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin: 20px 0;
}

.contact-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.form-group { margin-bottom: 16px; }

.form-success {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 0.8125rem;
  color: #22c55e;
}

.accent { color: #22c55e; }
</style>
