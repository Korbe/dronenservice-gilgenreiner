<template>
<section class="py-24 bg-neutral-950 px-6">
      <div class="max-w-3xl mx-auto">

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Häufig gestellte <span class="text-[#fff94f]">Fragen</span>
        </h2>

        <!-- FAQ Items -->
        <div class="space-y-4">
          <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }">
            <div class="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/40">

              <!-- Button -->
              <DisclosureButton
                class="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-900 transition">
                <span class="font-semibold text-lg">
                  {{ faq.question }}
                </span>

                <!-- Icon -->
                <span class="text-[#a3511d] text-2xl transform transition-transform duration-300"
                  :class="open ? 'rotate-45' : ''">
                  +
                </span>
              </DisclosureButton>

              <!-- Panel -->
              <transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <DisclosurePanel class="px-6 pb-6 text-neutral-400 text-sm">
                  {{ faq.answer }}
                </DisclosurePanel>
              </transition>

            </div>
          </Disclosure>
        </div>

      </div>
    </section>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer: "In der Regel innerhalb von 24 Stunden. Bei dringenden Anfragen empfehle ich eine telefonische Kontaktaufnahme."
  },
  {
    question: "In welchen Regionen sind Einsätze möglich?",
    answer: "Primär in Österreich, insbesondere in Kärnten. Einsätze in anderen Regionen sind nach Absprache möglich."
  },
  {
    question: "Was kostet ein Drohneneinsatz?",
    answer: "Die Kosten hängen stark vom Projekt ab (Dauer, Aufwand, Genehmigungen). Kontaktieren Sie mich für ein individuelles Angebot."
  },
  {
    question: "Sind kurzfristige Einsätze möglich?",
    answer: "Ja - je nach Verfügbarkeit sind auch kurzfristige Einsätze realisierbar. Am besten direkt anrufen."
  },
  {
    question: "Wer kümmert sich um Genehmigungen?",
    answer: "Ich übernehme die komplette Planung inklusive Prüfung der Lufträume und Einholung aller notwendigen Genehmigungen."
  }
]
</script>