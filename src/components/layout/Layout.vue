<template>
    <div class="min-h-screen bg-neutral-950 text-white font-sans selection:bg-brand selection:text-black">
        <Navbar />
        <slot />
        <Footer />
        <Cookiebanner />
    </div>
</template>
<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import Cookiebanner from '../Cookiebanner.vue';

</script>