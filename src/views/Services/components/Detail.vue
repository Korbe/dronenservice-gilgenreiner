<template>
    <section class="py-24 px-6">
        <div class="max-w-6xl mx-auto space-y-24">

            <div v-for="(item, index) in serviceDetails" :key="index" class="grid md:grid-cols-2 gap-10 items-center">

                <!-- IMAGE -->
                <div :class="index % 2 ? 'md:order-2' : ''">
                    <img :src="item.image" class="rounded-2xl shadow-xl" />
                </div>

                <!-- TEXT -->
                <div :class="index % 2 ? 'md:order-1' : ''">
                    <h2 class="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                        {{ item.title }}
                    </h2>

                    <p class="text-neutral-300 mb-4">
                        {{ item.text }}
                    </p>

                    <ul class="text-sm text-neutral-400 space-y-2">
                        <li v-for="point in item.points" :key="point">
                            • {{ point }}
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>

import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';

const serviceDetails = [
    {
        title: "Luftaufnahmen & Video",
        image: service1,
        text: "Perfekte Perspektiven für Immobilien, Werbung und Events.",
        points: [
            "4K Video & RAW Fotos",
            "Cinematische Kamerafahrten",
            "Ideal für Marketing"
        ]
    },
    {
        title: "Inspektionen",
        image: service2,
        text: "Sichere Kontrolle ohne Risiko für Mensch und Material.",
        points: [
            "Dach- & Gebäudeinspektion",
            "Industrieanlagen",
            "Schnelle Analyse"
        ]
    },
    {
        title: "Baufortschritt",
        image: service3,
        text: "Dokumentation Ihres Projekts aus der Luft.",
        points: [
            "Regelmäßige Updates",
            "Perfekt für Kundenberichte",
            "Zeitraffer möglich"
        ]
    }
]
</script>
