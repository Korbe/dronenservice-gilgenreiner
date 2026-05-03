<template>

    <section class="py-24 px-6 container mx-auto">

        <!-- FALL: KEINE PROJEKTE -->
        <div v-if="projects.length === 0" class="text-center py-24">

            <h2 class="text-2xl md:text-3xl font-bold text-neutral-200 mb-4">
                Momentan sind keine Projekte verfügbar
            </h2>

            <p class="text-neutral-400 max-w-md mx-auto">
                Schauen Sie bald wieder vorbei – neue Projekte werden laufend hinzugefügt.
            </p>

        </div>

        <!-- FALL: PROJEKTE VORHANDEN -->
        <div v-else class="flex flex-wrap justify-center gap-8">

            <div v-for="(project, index) in projects" :key="index" class="w-full sm:w-[48%] lg:w-[23%] max-w-sm group">

                <!-- IMAGE GRID -->
                <div class="grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">

                    <div v-for="(img, i) in project.images" :key="i"
                        class="aspect-square overflow-hidden cursor-pointer" @click="openLightbox(project.images, i)">
                        <img :src="img" alt="Projektbild"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>

                </div>

                <!-- CONTENT -->
                <div class="mt-4 text-center">
                    <h3 class="text-lg font-bold text-white mb-1">
                        {{ project.title }}
                    </h3>

                    <p class="text-yellow-400 text-sm mb-2">
                        {{ project.location }}
                    </p>

                    <p class="text-neutral-400 text-sm leading-relaxed">
                        {{ project.description }}
                    </p>
                </div>

            </div>

        </div>

    </section>

    <!-- LIGHTBOX -->
    <transition enter-active-class="transition duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="lightboxOpen" class="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
            @click.self="closeLightbox">

            <!-- IMAGE -->
            <img :src="currentImages[currentIndex]"
                class="max-w-[90%] max-h-[85%] object-contain rounded-lg shadow-2xl" />

            <!-- CLOSE -->
            <button @click="closeLightbox"
                class="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition">
                ✕
            </button>

            <!-- PREV -->
            <button @click="prevImage" class="absolute left-6 text-white text-4xl hover:text-yellow-400 transition">
                ‹
            </button>

            <!-- NEXT -->
            <button @click="nextImage" class="absolute right-6 text-white text-4xl hover:text-yellow-400 transition">
                ›
            </button>

        </div>
    </transition>

</template>

<script setup>

import droneAbout from '@/assets/drone-about.jpg';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';

const projects = [
    // {
    //     title: "Brückeninspektion A9",
    //     location: "Graz, Österreich",
    //     description: "Inspektion einer Autobahnbrücke mittels hochauflösender Drohnenaufnahmen.",
    //     images: [
    //         droneAbout,
    //         service1,
    //         service2,
    //         service3
    //     ]
    // },
]

import { ref, onMounted, onUnmounted } from 'vue'

const lightboxOpen = ref(false)
const currentImages = ref([])
const currentIndex = ref(0)

const openLightbox = (images, index) => {
    currentImages.value = images
    currentIndex.value = index
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
}

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % currentImages.value.length
}

const prevImage = () => {
    currentIndex.value =
        (currentIndex.value - 1 + currentImages.value.length) % currentImages.value.length
}

// ESC schließen
const handleKey = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>