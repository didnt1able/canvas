<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import type { PropType } from 'vue'
import type { Faq } from '~/data/faq'
const { locale } = useI18n()

defineProps({
  questions: {
    type: Array as PropType<Faq['faq']>,
    required: true,
  },
})
</script>

<template>
  <FaqGroup class="select-none space-y-5">
    <FaqItem
      v-for="(item, index) in questions"
      :key="index"
      v-slot="{ isActive, toggle }"
      class="group transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]"
    >
      <div
        class="flex cursor-pointer items-center p-4"
        @click="toggle"
      >
        <div class="text-white/75 transition group-hover:text-white">
          {{ item.title[locale as "en" | "fr"] }}
        </div>

        <div class="relative ml-auto">
          <XMarkIcon
            :class="{ 'rotate-180': isActive, 'rotate-45': !isActive }"
            class="size-6 transform-gpu text-white/50 transition-transform duration-500 will-change-transform"
          />
        </div>
      </div>

      <FaqContent class="transform-gpu overflow-hidden px-4 transition-all duration-500 will-change-[height]">
        <p class="pb-4 font-light leading-relaxed tracking-wide text-white/75">
          {{ item.content[locale as "en" | "fr"] }}
        </p>
      </FaqContent>
    </FaqItem>
  </FaqGroup>
</template>

<style scoped></style>
