<template>
    <section class="px-6 py-28 bg-neutral-950 border-t border-neutral-900">

        <div class="container mx-auto grid md:grid-cols-2 gap-16 items-center">

            <!-- IMAGE (mobile first) -->
            <div class="relative flex justify-center md:justify-end order-1 md:order-0">

                <!-- Hintergrund Glow -->
                <div class="absolute -top-16 -right-16 w-80 h-80 bg-brand-dark/20 rounded-full blur-3xl opacity-40">
                </div>

                <!-- Rahmen / Card -->
                <div
                    class="relative p-px rounded-2xl bg-linear-to-br from-brand-dark/40 via-transparent to-brand/20">

                    <div class="bg-neutral-900 rounded-2xl p-3">
                        <img src="@/assets/me.jpg" alt="Dominik Gilgenreiner"
                            class="w-full max-w-md rounded-xl object-cover" />
                    </div>

                    <!-- Overlay -->
                    <div
                        class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl border border-neutral-700">
                        <p class="text-sm text-brand font-semibold">Dronenservice</p>
                        <p class="text-xs text-neutral-400">Dominik Gilgenreiner</p>
                    </div>

                </div>

            </div>

            <!-- TEXT -->
            <div class="order-2 md:order-0">

                <h2 class="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                    Leidenschaft für <span class="text-brand">Drohnen</span><br />
                    und präzise Ergebnisse
                </h2>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Mein Leben an der Fernsteuerung: Ob Kran, Schwerlast oder Drohne – ich steuere jede Bewegung mit
                    Präzision, Erfahrung und dem richtigen Gespür für den Moment.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Ich bin Dominik Gilgenreiner, geboren am 28.07.1997, und Technik hat mich schon von klein auf
                    begeistert. Erste Erfahrungen mit Steuerung und Präzision habe ich bereits mit Modellhubschraubern
                    gesammelt - ein Interesse, das mich bis heute begleitet.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Mein Weg führte mich ins Handwerk, wo ich eine Ausbildung im Bereich Elektro- und Gebäudetechnik
                    abgeschlossen habe. Diese bildet die Grundlage für mein technisches Verständnis und meine
                    strukturierte Arbeitsweise.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Heute bin ich bei Mössler Transporte tätig und arbeite im Bereich Schwerlast, Abschleppdienst und
                    Kranarbeiten. Komplexe Einsätze, enge Platzverhältnisse und präzise Hebearbeiten gehören zu meinem
                    Alltag.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Parallel dazu dokumentiere ich anspruchsvolle Arbeiten sowie außergewöhnliche Bergungen – im LKW-
                    und PKW-Bereich - mit Foto und Film. So entstehen nicht nur funktionierende Lösungen, sondern auch
                    starke visuelle Eindrücke.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Ich stelle mich gerne neuen Herausforderungen und arbeite zuverlässig, konzentriert und mit dem
                    nötigen technischen Verständnis.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Mein Motto: „Geht nicht, gibt`s nicht.
                </p>

                <!-- Highlights -->
                <div class="mt-10 flex flex-wrap gap-4">
                    <span
                        class="px-4 py-2 text-sm border border-neutral-800 rounded-full text-neutral-300 bg-neutral-900/50">
                        Zertifizierter Drohnenpilot
                    </span>
                    <span
                        class="px-4 py-2 text-sm border border-neutral-800 rounded-full text-neutral-300 bg-neutral-900/50">
                        Modernste Technik
                    </span>
                    <span
                        class="px-4 py-2 text-sm border border-neutral-800 rounded-full text-neutral-300 bg-neutral-900/50">
                        Österreichweit im Einsatz
                    </span>
                </div>

            </div>

        </div>

    </section>
</template>
<script setup>
</script>