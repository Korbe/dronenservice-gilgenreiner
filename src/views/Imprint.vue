<template>
    <Layout>

        <!-- 🔥 HERO -->
        <section class="relative pt-50 pb-24 border-b border-neutral-800 overflow-hidden">

            <div class="relative z-10 container mx-auto px-6 text-center">

                <p class="text-sm text-brand uppercase tracking-wide mb-4">
                    Rechtliches
                </p>

                <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
                    Impressum
                </h1>

                <p class="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Angaben gemäß § 5 ECG und Offenlegung nach § 25 Mediengesetz.
                </p>

            </div>
        </section>


        <!-- 📄 CONTENT -->
        <section class="py-32 bg-neutral-950 text-white">
            <div class="max-w-4xl mx-auto px-6 space-y-10">

                <!-- Card -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">

                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Diensteanbieter
                    </h2>

                    <div class="text-neutral-300 leading-relaxed space-y-1">
                        <p class="font-medium text-white">
                            Drohnenservice Gilgenreiner
                        </p>
                        <p>Dominik Gilgenreiner</p>
                        <p>Kärntnerstraße 55</p>
                        <p>9601 Arnoldstein</p>
                        <p>Österreich</p>
                    </div>

                </div>

                <!-- Card -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">

                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Kontakt
                    </h2>

                    <div class="text-neutral-300 leading-relaxed space-y-2">
                        <p>📞 +43 123 456789</p>
                        <p>📧 info@gilgenreiner.at</p>
                    </div>

                </div>

                <!-- Card -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">

                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Unternehmensdaten
                    </h2>

                    <div class="text-neutral-300 leading-relaxed space-y-2">
                        <p>UID-Nummer: ATU83192769</p>
                    </div>

                </div>

            </div>
        </section>

    </Layout>
</template>

<script setup>
import Layout from '../components/layout/Layout.vue';
</script>