<template>
    <section class="py-24 px-6">

        <div class="max-w-6xl mx-auto space-y-24">

            <div v-for="(drone, index) in drones" :key="index" class="grid md:grid-cols-2 gap-10 items-center">

                <!-- IMAGE -->
                <div :class="index % 2 === 1 ? 'md:order-2' : ''">
                    <img :src="drone.image" class="rounded-2xl w-full object-cover" />
                </div>

                <!-- TEXT -->
                <div :class="index % 2 === 1 ? 'md:order-1' : ''">
                    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
                        {{ drone.name }}
                    </h2>

                    <p class="text-neutral-300 mb-6 leading-relaxed">
                        {{ drone.description }}
                    </p>

                    <ul class="space-y-2 text-neutral-400 text-sm">
                        <li v-for="(spec, i) in drone.specs" :key="i">
                            • {{ spec }}
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </section>
</template>
<script setup>
import mavicImg from '@/assets/mavic-3-pro.webp'

const drones = [
    {
        name: "DJI Mavic 3 Pro",
        image: mavicImg,
        description:
            "High-End Kamera-Drohne für detailreiche Luftaufnahmen und Filmprojekte mit maximaler Bildqualität.",
        specs: [
            "4/3 CMOS Hasselblad Kamera",
            "Bis zu 46 Minuten Flugzeit",
            "Omnidirektionale Hinderniserkennung"
        ]
    },
    {
        name: "DJI Air 3",
        image: mavicImg,
        description:
            "Perfekte Allround-Drohne für dynamische Aufnahmen, Immobilien und mittelgroße Projekte.",
        specs: [
            "Dual-Kamera System",
            "4K HDR Video",
            "Stabile Flugperformance bei Wind"
        ]
    },
    {
        name: "DJI Mini 4 Pro",
        image: mavicImg,
        description:
            "Ultraleichte Drohne für flexible Einsätze ohne komplizierte Genehmigungen in vielen Regionen.",
        specs: [
            "Unter 250g Gewicht",
            "4K HDR Video",
            "Sehr leise im Flug"
        ]
    }
]

</script>