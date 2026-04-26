<template>
    <section class="container mx-auto px-6 py-24 bg-neutral-900 rounded-t-3xl -mt-20 relative z-20">

        <!-- HEADLINE -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-neutral-100">
                Drohnenaufnahmen in <span class="text-brand">Action</span>
            </h2>
            <p class="text-neutral-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                In Sekunden das sichtbar machen, was Stunden dauert.
            </p>
        </div>

        <!-- VIDEO WRAPPER -->
        <div class="relative max-w-6xl mx-auto group">

            <!-- Video -->
            <video ref="videoRef"
                class="w-full aspect-video rounded-2xl border border-neutral-700 shadow-2xl object-cover"
                poster="@/assets/DJI-Mavic-3-Classic.jpg" @click="toggleVideo">
                <source src="@/assets/drone-intro.mp4" type="video/mp4" />
                Dein Browser unterstützt kein Video.
            </video>

            <!-- Overlay -->
            <div v-if="!isPlaying" @click="playVideo"
                class="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl hover:bg-black/40 transition cursor-pointer">
                <div
                    class="w-24 h-24 bg-brand text-black rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        class="w-10 h-10 ml-1">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

        </div>

    </section>
</template>
<script setup>
import { ref } from 'vue'
const videoRef = ref(null)
const isPlaying = ref(false)

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play()
    isPlaying.value = true
  }
}

const toggleVideo = () => {
  if (!videoRef.value) return

  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}
</script>