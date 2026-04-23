<template>
  <Layout>
    <Hero/>
    <DronesGrid/>
    <Cta/>
  </Layout>
</template>
<script setup>
import Layout from '../../components/layout/Layout.vue';
import Cta from './components/Cta.vue';
import Hero from './components/Hero.vue';
import DronesGrid from './components/Drones-Grid.vue';
</script>