<template>
    <div class="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

</script>