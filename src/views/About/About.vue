<template>
  <Layout>

    <Hero />
    <AboutContent/>
    <Cta/>

  </Layout>
</template>
<script setup>
import Layout from '../../components/layout/Layout.vue';
import AboutContent from './components/AboutContent.vue';
import Hero from './components/Hero.vue';
import Cta from './components/Cta.vue';
</script>