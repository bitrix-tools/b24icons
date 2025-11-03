<script setup lang="ts">
import AttentionIIcon from '@bitrix24/b24icons-vue/main/AttentionIIcon'

defineProps<{
  searchQuery: string
}>()

defineEmits(['clear'])
</script>

<template>
  <B24Empty
    :icon="AttentionIIcon"
    :title="`Иконки не найдены для запроса ${searchQuery}`"
    description="Очистите поиск и попробуйте снова."
    size="xl"
    :actions="[
      {
        label: 'Очистить',
        color: 'air-primary',
        onClick() {
          $emit('clear')
        }
      }
    ]"
  />
</template>
