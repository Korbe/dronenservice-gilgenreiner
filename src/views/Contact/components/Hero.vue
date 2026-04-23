<template>
    <!-- HERO -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden z-0">

        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="@/assets/drone-contact.jpg" alt="Drone flying at sunset"
                class="w-full h-full object-cover object-center scale-105" />
            <div class="absolute inset-0 bg-black/80"></div>

            <!-- Farbverlauf Glow -->
            <div class="absolute inset-0 bg-linear-to-tr from-[#a3511d]/40 via-black/60 to-transparent"></div>
        </div>

        <!-- Animated Glow -->
        <div
            class="absolute -top-40 -left-40 w-125 h-125 bg-[#fff94f]/10 rounded-full blur-3xl opacity-40 animate-pulse">
        </div>
        <div class="absolute -bottom-37.5 -right-25 w-100 h-100 bg-[#a3511d]/20 rounded-full blur-3xl opacity-30"></div>

        <!-- Content -->
        <div class="relative z-10 text-center px-6 max-w-4xl">

            <div
                class="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-[#fff94f]/30 rounded-full text-sm text-[#fff94f] bg-[#fff94f]/5 backdrop-blur">
                <span class="w-2 h-2 bg-[#fff94f] rounded-full animate-pulse"></span>
                Jetzt verfügbar für Projekte
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                LASS UNS<br />
                <span class="text-transparent bg-clip-text bg-linear-to-r from-[#fff94f] to-[#a3511d]">
                    ABHEBEN
                </span>
            </h1>

            <p class="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Ob Bauprojekt, Inspektion oder Luftaufnahme - ich unterstütze Sie mit modernster Drohnentechnologie und
                persönlicher Betreuung.
            </p>

        </div>

        <div class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-neutral-950 to-transparent"></div>

    </section>
</template>
<script setup>
</script>