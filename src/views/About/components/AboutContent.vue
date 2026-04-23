<template>
    <section class="px-6 py-28 bg-neutral-950 border-t border-neutral-900">

        <div class="container mx-auto grid md:grid-cols-2 gap-16 items-center">

            <!-- IMAGE (mobile first) -->
            <div class="relative flex justify-center md:justify-end order-1 md:order-0">

                <!-- Hintergrund Glow -->
                <div class="absolute -top-16 -right-16 w-80 h-80 bg-[#a3511d]/20 rounded-full blur-3xl opacity-40">
                </div>

                <!-- Rahmen / Card -->
                <div
                    class="relative p-px rounded-2xl bg-linear-to-br from-[#a3511d]/40 via-transparent to-[#fff94f]/20">

                    <div class="bg-neutral-900 rounded-2xl p-3">
                        <img src="@/assets/logo.png" alt="Dominik Gilgenreiner"
                            class="w-full max-w-md rounded-xl object-cover" />
                    </div>

                    <!-- Overlay -->
                    <div
                        class="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl border border-neutral-700">
                        <p class="text-sm text-[#fff94f] font-semibold">Dronenservice</p>
                        <p class="text-xs text-neutral-400">Dominik Gilgenreiner</p>
                    </div>

                </div>

            </div>

            <!-- TEXT -->
            <div class="order-2 md:order-0">

                <h2 class="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                    Leidenschaft für <span class="text-[#fff94f]">Drohnen</span><br />
                    und präzise Ergebnisse
                </h2>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est
                    laborum.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                </p>

                <p class="text-neutral-500 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est
                    laborum.
                </p>

                <p class="text-neutral-400 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
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