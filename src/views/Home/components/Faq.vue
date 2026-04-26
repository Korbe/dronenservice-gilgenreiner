<template>
    <section class="py-24 bg-neutral-950 px-6">
        <div class="max-w-3xl mx-auto">

            <h2 class="text-3xl font-bold text-center mb-12">
                Häufig gestellte <span class="text-brand">Fragen</span>
            </h2>

            <div class="space-y-4">

                <Disclosure v-for="(item, index) in faqs" :key="index" v-slot="{ open }" as="div"
                    class="border border-neutral-800 rounded-lg overflow-hidden">
                    <!-- BUTTON -->
                    <DisclosureButton
                        class="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-900 transition">
                        <span class="font-bold text-white">
                            {{ item.question }}
                        </span>

                        <span class="text-brand-dark text-xl">
                            {{ open ? "−" : "+" }}
                        </span>
                    </DisclosureButton>

                    <!-- CONTENT -->
                    <DisclosurePanel class="px-6 pb-6 text-neutral-400 text-sm">
                        {{ item.answer }}
                    </DisclosurePanel>

                </Disclosure>

            </div>
        </div>
    </section>
</template>
<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from '@headlessui/vue'

const faqs = [
    {
        question: "Fliegen Sie auch bei schlechtem Wetter?",
        answer:
            "Die Sicherheit geht vor. Bei starkem Wind (über ca. 35 km/h), Regen oder schlechten Sichtverhältnissen verschieben wir den Einsatz. Wir prüfen die Wetterlage immer im Vorfeld."
    },
    {
        question: "Benötige ich eine Genehmigung für Drohnenaufnahmen?",
        answer:
            "In den meisten Fällen übernehme ich die notwendigen Genehmigungen und prüfe den Luftraum vor jedem Einsatz. Sie müssen sich um nichts kümmern."
    },
    {
        question: "Wie kurzfristig kann ein Einsatz gebucht werden?",
        answer:
            "Je nach Auslastung sind auch kurzfristige Einsätze möglich. Idealerweise melden Sie sich ein paar Tage vorher, damit ich alles optimal vorbereiten können."
    },
    {
        question: "Welche Bereiche decken Ihre Drohnenaufnahmen ab?",
        answer:
            "Ich biete Luftaufnahmen für Bauprojekte, Immobilien, Inspektionen, Events und individuelle Projekte an - sowohl Foto als auch Video."
    },
    {
        question: "Wie lange dauert ein typischer Drohneneinsatz?",
        answer:
            "Das hängt vom Projekt ab. Kleine Aufnahmen dauern oft 30-60 Minuten, größere Inspektionen oder Projekte können mehrere Stunden in Anspruch nehmen."
    }
]
</script>