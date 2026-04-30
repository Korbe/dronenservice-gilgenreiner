<template>
    <Layout>

        <!-- 🔥 HERO -->
        <section class="relative pt-50 pb-24 border-b border-neutral-800 overflow-hidden">

            <div class="relative z-10 container mx-auto px-6 text-center">

                <p class="text-sm text-brand uppercase tracking-wide mb-4">
                    Rechtliches
                </p>

                <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
                    Datenschutz
                </h1>

                <p class="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.
                </p>

            </div>
        </section>


        <!-- 📄 CONTENT -->
        <section class="py-32 bg-neutral-950 text-white">
            <div class="max-w-4xl mx-auto px-6 space-y-10">

                <!-- Verantwortlicher -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Verantwortlicher
                    </h2>

                    <div class="text-neutral-300 leading-relaxed space-y-2">
                        <p class="font-medium text-white">Dronenservice Gilgenreiner</p>
                        <p>📧 info@gilgenreiner.at</p>
                        <p>📞 +43 690 10664594</p>
                    </div>
                </div>

                <!-- Allgemeines -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Allgemeines
                    </h2>

                    <p class="text-neutral-300 leading-relaxed">
                        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                        Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen
                        (DSGVO, TKG 2003).
                    </p>
                </div>

                <!-- Kontaktaufnahme -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Kontaktaufnahme
                    </h2>

                    <p class="text-neutral-300 leading-relaxed">
                        Wenn Sie per E-Mail oder Telefon Kontakt mit uns aufnehmen,
                        werden Ihre angegebenen Daten zur Bearbeitung der Anfrage gespeichert.
                        Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                </div>

                <!-- Speicherung -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Speicherung von Daten
                    </h2>

                    <p class="text-neutral-300 leading-relaxed">
                        Beim Besuch dieser Website werden keine personenbezogenen Daten gespeichert,
                        außer jene, die technisch notwendig sind (z. B. Server-Logfiles).
                    </p>
                </div>

                <!-- Rechte -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Ihre Rechte
                    </h2>

                    <p class="text-neutral-300 leading-relaxed">
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
                        Einschränkung der Verarbeitung sowie Datenübertragbarkeit.
                    </p>
                </div>

                <!-- Server Logs -->
                <div
                    class="border border-neutral-800 rounded-3xl p-8 bg-neutral-900/60 backdrop-blur hover:border-brand/40 transition">
                    <h2 class="text-xl font-semibold text-brand mb-6">
                        Server-Logfiles
                    </h2>

                    <p class="text-neutral-300 leading-relaxed">
                        Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles,
                        die Ihr Browser automatisch übermittelt. Diese Daten sind nicht bestimmten Personen zuordenbar.
                    </p>
                </div>

                <!-- Footer Note -->
                <div class="pt-10 border-t border-neutral-800 text-sm text-neutral-500 text-center">
                    Stand: {{ currentYear }}
                </div>

            </div>
        </section>

    </Layout>
</template>

<script setup>
import Layout from '../components/layout/Layout.vue'
const currentYear = new Date().getFullYear()
</script>