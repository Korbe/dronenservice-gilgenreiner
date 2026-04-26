<template>
    <section class="py-24 px-6 bg-neutral-900">
        <div class="max-w-5xl mx-auto text-center">

            <h2 class="text-3xl md:text-4xl font-bold mb-16">
                So läuft ein <span class="text-brand">Projekt</span> ab
            </h2>

            <div class="grid md:grid-cols-4 gap-8">

                <div v-for="step in steps" :key="step.title">
                    <div class="text-brand text-2xl font-bold mb-3">
                        {{ step.number }}
                    </div>
                    <h3 class="font-bold mb-2">{{ step.title }}</h3>
                    <p class="text-neutral-400 text-sm">{{ step.text }}</p>
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
const steps = [
    {
        number: "01",
        title: "Anfrage",
        text: "Sie schildern Ihr Projekt und Ihre Anforderungen."
    },
    {
        number: "02",
        title: "Planung",
        text: "Ich prüfe Wetter, Location und Genehmigungen."
    },
    {
        number: "03",
        title: "Durchführung",
        text: "Professioneller Drohneneinsatz vor Ort."
    },
    {
        number: "04",
        title: "Lieferung",
        text: "Sie erhalten bearbeitetes Bild- und Videomaterial."
    }
]
</script>
