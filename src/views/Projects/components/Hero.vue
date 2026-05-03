<template>
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">

        <!-- Background -->
        <div class="absolute inset-0 z-0">
            <img src="@/assets/drone-project.jpg" alt="Drohnenprojekte Übersicht"
                class="w-full h-full object-cover object-center scale-105" />

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-black/80"></div>

            <!-- Farbverlauf -->
            <div class="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <!-- Glow -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-40"></div>
        <div class="absolute bottom-[-100px] right-[-80px] w-80 h-80 bg-[#a3511d]/20 rounded-full blur-3xl opacity-30">
        </div>

        <!-- Content -->
        <div class="relative z-10 text-center px-6 max-w-3xl">

            <!-- Label -->
            <p class="text-sm uppercase tracking-widest text-yellow-400 mb-4">
                Referenzen
            </p>

            <!-- Headline -->
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                MEINE <span class="text-yellow-400">PROJEKTE</span>
            </h1>

            <!-- Text -->
            <p class="text-neutral-300 text-lg md:text-xl">
                Einblicke in reale Einsätze – von Bauprojekten bis hin zu komplexen Inspektionen aus der Luft.
            </p>

        </div>

        <!-- Bottom Fade -->
        <div class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-neutral-950 to-transparent"></div>

    </section>
</template>
<script setup>
</script>