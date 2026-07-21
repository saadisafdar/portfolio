<template>
  <nav
    class="app-navbar"
    :class="{ 'app-navbar--scrolled': scrolled, 'anim-fade-in-up': true }"
  >
    <div class="navbar-inner">
      <!-- Logo -->
      <a href="#" class="navbar-logo" @click.prevent="scrollToTop">
        <img src="/images/saadi.svg" alt="Saadi Safdar" class="logo-img" />
      </a>

      <!-- Desktop links -->
      <div class="navbar-links">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click.prevent="smoothScroll(link.href)"
        >{{ link.label }}</a>
      </div>

      <!-- Mobile toggle -->
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-label="mobileOpen ? 'Close menu' : 'Open menu'">
        <v-icon :icon="mobileOpen ? 'mdi-close' : 'mdi-menu'" size="22" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="mobile-nav-link"
          @click.prevent="() => { smoothScroll(link.href); mobileOpen = false }"
        >{{ link.label }}</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Courses',   href: '#courses'   },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function smoothScroll(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
  animation: fadeInUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both;
}

.app-navbar--scrolled {
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-color: rgba(255,255,255,0.06);
}

.navbar-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo { text-decoration: none; display: flex; align-items: center; }
.logo-img    { height: 32px; width: auto; }

.navbar-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.mobile-toggle:hover { color: #f4f4f5; background: rgba(255,255,255,0.06); }

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 12px 24px 20px;
  overflow: hidden;
}

.mobile-nav-link {
  display: block;
  padding: 12px 0;
  font-size: 1rem;
  color: #a1a1aa;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.2s;
}
.mobile-nav-link:last-child { border-bottom: none; }
.mobile-nav-link:hover { color: #22c55e; }

/* transitions */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.25s, max-height 0.3s ease;
  max-height: 400px;
  overflow: hidden;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 767px) {
  .navbar-links { display: none; }
  .mobile-toggle { display: flex; }
}
</style>
