<template>
    <Layout>
        <!-- HERO -->
        <section class="pt-50 pb-20 border-b border-neutral-800">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
                    Datenschutz
                </h1>
                <p class="text-neutral-400 max-w-2xl mx-auto">
                    Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.
                </p>
            </div>
        </section>

        <!-- CONTENT -->
        <section class="py-16">
            <div class="container mx-auto px-6 max-w-4xl space-y-12 text-neutral-300 leading-relaxed">

                <!-- 1 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">1. Verantwortlicher</h2>
                    <p>
                        Dronenservice Gilgenreiner<br />
                        E-Mail: info@gilgenreiner.at<br />
                        Telefon: +43 690 10664594
                    </p>
                </div>

                <!-- 2 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">2. Allgemeines</h2>
                    <p>
                        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                        Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
                        TKG 2003).
                    </p>
                </div>

                <!-- 3 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">3. Kontaktaufnahme</h2>
                    <p>
                        Wenn Sie per E-Mail oder Telefon Kontakt mit mir aufnehmen,
                        werden Ihre angegebenen Daten zur Bearbeitung der Anfrage gespeichert.
                        Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                    </p>
                </div>

                <!-- 4 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">4. Speicherung von Daten</h2>
                    <p>
                        Beim Besuch dieser Website werden keine personenbezogenen Daten gespeichert,
                        außer jene, die technisch notwendig sind (z. B. Server-Logfiles).
                    </p>
                </div>

                <!-- 5 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">5. Ihre Rechte</h2>
                    <p>
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
                        Einschränkung der Verarbeitung sowie Datenübertragbarkeit.
                    </p>
                </div>

                <!-- 6 -->
                <div>
                    <h2 class="text-xl font-semibold text-white mb-3">6. Server-Logfiles</h2>
                    <p>
                        Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles,
                        die Ihr Browser automatisch übermittelt. Diese Daten sind nicht bestimmten Personen zuordenbar.
                    </p>
                </div>

                <!-- FOOTER NOTE -->
                <div class="pt-10 border-t border-neutral-800 text-sm text-neutral-500">
                    Stand: {{ currentYear }}
                </div>

            </div>
        </section>
    </Layout>
</template>
<script setup>
import Layout from '../components/layout/Layout.vue';
const currentYear = new Date().getFullYear()
</script>
