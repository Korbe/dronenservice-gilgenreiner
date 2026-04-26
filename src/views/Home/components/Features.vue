<template>
        <section class="py-24 px-6 container mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-sm font-bold tracking-widest text-brand uppercase mb-2">
          Einsatzgebiete
        </h2>
        <p class="text-3xl md:text-4xl font-extrabold">
          Vielseitigkeit in der Luft
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Bauwirtschaft -->
        <div class="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">

          <div class="aspect-video overflow-hidden">
            <img src="@/assets/bauwirtschaft.jpg" alt="Bauwirtschaft Drohnenaufnahme"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-brand mb-2">Bauwirtschaft</h3>
            <p class="text-neutral-400 text-sm">
              Präzise Dokumentation des Baufortschritts und Vermessungen aus der Luft.
            </p>
          </div>

        </div>

        <!-- Infrastruktur -->
        <div class="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">

          <div class="aspect-video overflow-hidden">
            <img src="@/assets/infrastructure.jpg" alt="Infrastruktur Drohnenaufnahme"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-brand mb-2">Infrastruktur</h3>
            <p class="text-neutral-400 text-sm">
              Spezialisierte Brückenkontrolle und Inspektion schwer zugänglicher Anlagen.
            </p>
          </div>

        </div>

        <!-- Landwirtschaft -->
        <div class="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">

          <div class="aspect-video overflow-hidden">
            <img src="@/assets/landwirtschaft.jpg" alt="Landwirtschaft Drohnenaufnahme"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-brand mb-2">Landwirtschaft</h3>
            <p class="text-neutral-400 text-sm">
              Rehkitzrettung via Wärmebildkamera und Analyse von Pflanzengesundheit.
            </p>
          </div>

        </div>

        <!-- Immobilien -->
        <div class="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">

          <div class="aspect-video overflow-hidden">
            <img src="@/assets/immobilien.jpg" alt="Immobilien Drohnenaufnahme"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-brand mb-2">Immobilien</h3>
            <p class="text-neutral-400 text-sm">
              High-End Luftaufnahmen für Vermarktung und spektakuläre Perspektiven.
            </p>
          </div>

        </div>

      </div>

    </section>
</template>
<script setup>
</script>