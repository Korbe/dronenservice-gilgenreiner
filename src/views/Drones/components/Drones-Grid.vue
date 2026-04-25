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
import mavicClassic from '@/assets/DJI-Mavic-3-Classic.jpg'

const drones = [
    {
        name: "DJI Mavic 3 Classic",
        image: mavicClassic,
        description:
            "Die DJI Mavic 3 Classic überzeugt mit einer hochwertigen Hasselblad-Kamera, die beeindruckende 5.1K-Videos und gestochen scharfe Fotos liefert. Dank langer Flugzeit und präziser Hinderniserkennung ist sie ideal für professionelle Luftaufnahmen und anspruchsvolle Projekte.",
        specs: [
            "4/3 CMOS Hasselblad Kamera",
            "20 MP Fotoauflösung",
            "5.1K Video mit 50 fps / 4K mit 120 fps",
            "10-Bit D-Log und 12-Bit RAW Farbtiefe",
            "Bis zu 46 Minuten Flugzeit",
            "Ca. 40 Minuten Schwebezeit",
            "Bis zu 15 km Signalreichweite",
            "Omnidirektionale Hinderniserkennung",
            "ActiveTrack 5.0, MasterShots und Hyperlapse",
            "4/3 CMOS Sensor mit ca. 12,8 Blendenstufen Dynamik",
            "Variable Blende von f/2.8 bis f/11"
        ]
    },
    {
        name: "DJI Air 3",
        image: mavicClassic,
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
        image: mavicClassic,
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