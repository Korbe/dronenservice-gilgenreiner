<template>
    <section class="py-24 px-6 bg-neutral-950 relative overflow-hidden">

        <!-- Glow -->
        <div class="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full"></div>

        <div class="max-w-4xl mx-auto text-center relative z-10">

            <p class="text-sm tracking-widest uppercase text-yellow-400 mb-4">
                Persönlicher Kontakt
            </p>

            <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
                Lass uns dein Projekt gemeinsam umsetzen
            </h2>

            <p class="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Ich bin dein direkter Ansprechpartner – ohne Umwege, ohne Agentur.
                Schreib mir einfach und wir schauen uns dein Projekt gemeinsam an.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4">

                <RouterLink to="/contact"
                    class="px-8 py-4 bg-yellow-400 text-black font-bold rounded-sm hover:bg-yellow-300 transition">
                    Nachricht senden
                </RouterLink>

                <a href="tel:+4369010664594"
                    class="px-8 py-4 border border-neutral-700 text-white rounded-sm hover:bg-neutral-900 transition">
                    Direkt anrufen
                </a>

            </div>

            <p class="text-neutral-500 text-sm mt-6">
                Antwort meist innerhalb weniger Stunden
            </p>

        </div>

    </section>
</template>
<script setup>
</script>