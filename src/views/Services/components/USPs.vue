<template>
    <section class="py-24 px-6 bg-neutral-950">
        <div class="max-w-6xl mx-auto">

            <!-- Headline -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-extrabold">
                    Warum <span class="text-brand">mit mir arbeiten?</span>
                </h2>
                <p class="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    Qualität, Sicherheit und persönliche Betreuung stehen bei jedem Projekt im Mittelpunkt.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-3 gap-8">

                <div v-for="item in benefits" :key="item.title"
                    class="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition">

                    <!-- Icon Circle -->
                    <div class="w-12 h-12 mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                        <div class="w-5 h-5 bg-brand rounded-full"></div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-lg font-bold mb-2">
                        {{ item.title }}
                    </h3>

                    <!-- Text -->
                    <p class="text-neutral-400 text-sm">
                        {{ item.text }}
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
const benefits = [
    {
        title: "Zertifizierter Drohnenpilot",
        text: "Alle Flüge erfolgen nach aktuellen Vorschriften und mit entsprechender Ausbildung."
    },
    {
        title: "Modernste Technik",
        text: "Einsatz hochwertiger Drohnen für maximale Bildqualität und Präzision."
    },
    {
        title: "Schnelle Umsetzung",
        text: "Flexible Terminvergabe und zügige Durchführung Ihres Projekts."
    },
    {
        title: "Komplette Planung",
        text: "Ich kümmere mich um Genehmigungen, Flugplanung und Sicherheit."
    },
    {
        title: "Individuelle Lösungen",
        text: "Jedes Projekt wird auf Ihre Anforderungen zugeschnitten."
    },
    {
        title: "Österreichweit im Einsatz",
        text: "Flexible Einsätze in ganz Österreich – egal ob Stadt oder Land."
    }
]
</script>