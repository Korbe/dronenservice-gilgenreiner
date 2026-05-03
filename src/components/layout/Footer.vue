<template>
    <footer class="bg-black py-12 text-center text-neutral-500 text-sm border-t border-neutral-800">

        <div class="flex justify-center pb-5">
            <RouterLink to="/" class="flex items-center gap-2">
                <img src="@/assets/logo.png" alt="Drohnenservice Gilgenreiner Logo" class="h-28 w-auto" />
            </RouterLink>
        </div>



        <Credit />

        <div class="container mx-auto px-6">
            <p>&copy; {{ currentYear }} Drohnenservice Gilgenreiner. Alle Rechte vorbehalten.</p>

            <div class="mt-2 flex justify-center gap-4">
                <router-link to="/impressum" class="hover:text-neutral-300">
                    Impressum
                </router-link>

                <router-link to="/datenschutz" class="hover:text-neutral-300">
                    Datenschutz
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Credit from './Credit.vue'
const currentYear = new Date().getFullYear()
</script>