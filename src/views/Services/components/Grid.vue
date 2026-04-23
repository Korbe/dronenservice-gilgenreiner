<template>
    <section class="py-24 px-6 bg-neutral-950">
        <div class="max-w-6xl mx-auto">

            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold">
                    Meine <span class="text-yellow-400">Leistungen</span>
                </h2>
                <p class="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    Professionelle Drohneneinsätze für verschiedenste Branchen.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">

                <div v-for="service in services" :key="service.title"
                    class="border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition">

                    <h3 class="text-xl font-bold mb-3 text-yellow-400">
                        {{ service.title }}
                    </h3>

                    <p class="text-neutral-400 text-sm">
                        {{ service.description }}
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
const services = [
    {
        title: "Luftaufnahmen",
        description: "Hochwertige Fotos und Videos für Immobilien, Werbung und Events."
    },
    {
        title: "Inspektionen",
        description: "Sichere Überprüfung von Dächern, Anlagen und schwer zugänglichen Bereichen."
    },
    {
        title: "Baufortschritt",
        description: "Dokumentation von Bauprojekten aus der Luft in regelmäßigen Abständen."
    },
    {
        title: "Vermessung",
        description: "Präzise Datenerfassung für Karten, Modelle und Analysen."
    },
    {
        title: "Imagevideos",
        description: "Cinematische Drohnenaufnahmen für Marketing und Social Media."
    },
    {
        title: "Individuelle Projekte",
        description: "Maßgeschneiderte Drohnenlösungen für spezielle Anforderungen."
    }
]
</script>