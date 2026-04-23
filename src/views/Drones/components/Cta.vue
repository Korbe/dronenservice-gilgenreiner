<template>
  <section class="py-24 px-6 bg-neutral-950 relative overflow-hidden">

  <!-- subtle glow -->
  <div class="absolute -top-20 -right-20 w-80 h-80 bg-[#a3511d]/20 blur-3xl rounded-full"></div>

  <div class="max-w-4xl mx-auto text-center relative z-10">

    <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
      Noch unsicher, was du brauchst?
    </h2>

    <p class="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
      Ich helfe dir gerne dabei, die richtige Lösung für dein Projekt zu finden – 
      völlig unverbindlich und ohne Verpflichtung.
    </p>

    <div class="flex flex-col sm:flex-row justify-center gap-4">

      <RouterLink to="/contact"
        class="px-8 py-4 bg-[#a3511d] text-white font-bold rounded-sm hover:opacity-90 transition">
        Kostenlos beraten lassen
      </RouterLink>

      <a href="tel:+4369010664594"
        class="px-8 py-4 border border-neutral-700 text-white rounded-sm hover:bg-neutral-900 transition">
        Jetzt anrufen
      </a>

    </div>

    <p class="text-neutral-500 text-sm mt-6">
      Antwort meist innerhalb von 24 Stunden
    </p>

  </div>

</section>  
</template>
<script setup>
</script>