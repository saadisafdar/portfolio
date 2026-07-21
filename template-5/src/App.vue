<template>
  <v-app theme="dark">
    <AppNavbar />
    <v-main style="background: #0a0a0a; padding: 0;">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CoursesSection />
      <EducationSection />
      <ContactSection />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CoursesSection from '@/components/CoursesSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
