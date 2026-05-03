<template>
    <section class="relative min-h-[75vh] flex items-center overflow-hidden">

        <!-- Background -->
        <div class="absolute inset-0 z-0">
            <img src="@/assets/drone-about.jpg" alt="Dominik Gilgenreiner"
                class="w-full h-full object-cover object-[center_top] scale-105" />

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-black/60"></div>

            <div class="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-6">

            <div class="max-w-2xl">

                <!-- Label -->
                <p class="text-sm tracking-widest uppercase text-brand mb-4">
                    Über mich
                </p>

                <!-- Name -->
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Dominik<br />
                    <span class="text-brand">Gilgenreiner</span>
                </h1>

                <!-- Beschreibung -->
                <p class="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                    Ihr Ansprechpartner für professionelle Drohnenlösungen.
                    Präzision, Sicherheit und modernste Technik stehen bei mir im Mittelpunkt.
                </p>

                <!-- Mini Facts -->
                <div class="flex flex-wrap gap-4 mt-6">
                    <span class="text-sm text-neutral-400 border border-neutral-700 px-4 py-2 rounded-full">
                        Zertifizierter Drohnenpilot
                    </span>
                    <span class="text-sm text-neutral-400 border border-neutral-700 px-4 py-2 rounded-full">
                        Österreichweit im Einsatz
                    </span>
                </div>

            </div>

        </div>

        <!-- Soft Glow -->
        <div
            class="absolute -right-25 top-1/2 -translate-y-1/2 w-100 h-100 bg-brand-dark/20 blur-3xl rounded-full opacity-30">
        </div>

        <!-- Bottom Fade -->
        <div class="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-neutral-950 to-transparent"></div>

    </section>
</template>
<script setup></script>