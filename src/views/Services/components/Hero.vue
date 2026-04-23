<template>
    <section class="relative min-h-[70vh] flex items-center overflow-hidden">

  <!-- Background -->
  <div class="absolute inset-0">
    <img src="@/assets/drone-services.jpg" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/80"></div>
    <div class="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 container mx-auto px-6">
    <div class="max-w-2xl">

      <p class="text-sm tracking-widest uppercase text-yellow-400 mb-4">
        Leistungen
      </p>

      <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
        DROHNENSERVICES<br />
        <span class="text-yellow-400">FÜR JEDEN EINSATZ</span>
      </h1>

      <p class="text-neutral-300 text-lg mb-8">
        Von Luftaufnahmen bis Inspektionen  ich liefere präzise Ergebnisse
        mit modernster Technik und maximaler Sicherheit.
      </p>

      <div class="flex gap-4">
        <RouterLink to="/contact"
          class="px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300">
          Projekt anfragen
        </RouterLink>
      </div>

    </div>
  </div>

</section>
</template>
<script setup>
</script>