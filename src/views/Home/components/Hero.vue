<template>
    <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

        <div class="absolute inset-0 z-0">
            <img src="@/assets/drone-hero.webp" alt="Professional drone"
                class="w-full h-full object-cover object-center" />
            <div class="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/30"></div>
            <div class="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-80">
            </div>
        </div>

        <div class="container mt-20 md:mt-0 mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

            <div class="w-full md:w-1/2 flex flex-col items-start gap-6 text-left">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                    PROFESSIONELLE<br />
                    <span class="text-brand">DROHNENARBEITEN</span><br />
                    FÜR IHR PROJEKT.
                </h1>

                <p class="text-lg md:text-xl text-neutral-300 max-w-lg">
                    Baufortschrittsdokumentation, Brückenkontrolle, Vermessung & Inspektion. Präzise, Effizient &
                    Sicher. Von
                    Gilgenrainer Dominik.
                </p>

                <div class="flex flex-wrap gap-4 mt-4">

                    <RouterLink to="/contact"
                        class="inline-flex items-center justify-center px-8 py-3.5 bg-brand text-black font-bold rounded-sm shadow-md hover:bg-yellow-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base">
                        JETZT ANFRAGEN
                    </RouterLink>

                    <RouterLink to="/services"
                        class="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-black transition-all text-base">
                        LEISTUNGEN ENTDECKEN
                    </RouterLink>

                </div>
            </div>

            <div class="w-full md:w-1/2 flex justify-center items-center h-64 md:h-auto">
            </div>
        </div>

        <div class="absolute inset-0 z-1 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 H 90 V 90 H 10 Z M 30 30 v 20 h 20 v -20 Z" stroke="#FBBF24" fill="none"
                            stroke-width="0.5" />
                        <circle cx="50" cy="50" r="2" fill="#FBBF24" />
                        <path d="M0 50 H 100 M 50 0 V 100" stroke="#FBBF24" fill="none" stroke-width="0.2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
        </div>

    </section>
</template>
<script setup>
</script>