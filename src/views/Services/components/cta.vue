<template>
<section class="relative py-24 px-6 overflow-hidden">

  <!-- Background -->
  <div class="absolute inset-0">
    <img src="@/assets/drone-hero.jpg" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/85"></div>
  </div>

  <!-- Glow -->
  <div class="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
  <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-[#a3511d]/20 rounded-full blur-3xl"></div>

  <!-- Content -->
  <div class="relative z-10 max-w-4xl mx-auto text-center">

    <!-- Headline -->
    <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
      Bereit für beeindruckende<br />
      <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-600">
        Luftaufnahmen?
      </span>
    </h2>

    <!-- Text -->
    <p class="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
      Lassen Sie uns Ihr Projekt gemeinsam umsetzen – schnell, professionell und auf höchstem Niveau.
    </p>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row justify-center gap-4">

      <RouterLink to="/contact"
        class="px-8 py-4 bg-yellow-400 text-black font-bold rounded-sm hover:bg-yellow-300 transition transform hover:-translate-y-1">
        Jetzt Projekt anfragen
      </RouterLink>

      <RouterLink to="/drones"
        class="px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-black transition">
        Drohnen ansehen
      </RouterLink>

    </div>

    <!-- Trust Line -->
    <p class="text-neutral-500 text-sm mt-6">
      Unverbindliche Anfrage • Schnelle Rückmeldung • Österreichweit verfügbar
    </p>

  </div>

</section>
</template>
<script setup>
</script>