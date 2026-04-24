<template>
    <section class="relative min-h-screen text-white flex items-center justify-center overflow-hidden text-center px-6">

        <!-- Background -->
        <div class="absolute inset-0">
            <img src="@/assets/drone-hero.webp" class="w-full h-full object-cover scale-105" />
            <div class="absolute inset-0 bg-black/85"></div>

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-linear-to-tr from-[#a3511d]/30 via-black/70 to-black"></div>
        </div>

        <!-- Glow -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a3511d]/20 blur-3xl rounded-full"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-3xl mx-auto">

            <!-- Badge -->
            <div
                class="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-400/30 rounded-full text-sm text-yellow-400 bg-yellow-400/5 backdrop-blur">
                <span class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Neue Website in Arbeit
            </div>

            <!-- Headline -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Hier entsteht etwas<br />
                <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-[#a3511d]">
                    Großartiges
                </span>
            </h1>

            <!-- Text -->
            <p class="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Ich arbeite gerade an einer neuen Webpräsenz, um Ihnen meine Drohnenleistungen noch besser präsentieren
                zu können.
                Schon bald gibt es hier mehr zu entdecken.
            </p>

        </div>

    </section>
</template>
<script setup>
</script>