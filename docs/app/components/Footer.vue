<script setup lang="ts">
import RocketIcon from '@bitrix24/b24icons-vue/outline/RocketIcon'
</script>

<template>
  <div class="mx-[22px] my-[12px] flex flex-col sm:flex-row items-center justify-start gap-[12px]">
    <B24Button
      label="Релизы"
      :icon="RocketIcon"
      to="https://github.com/bitrix24/b24icons/releases"
      target="_blank"
      size="md"
    />
    <NuxtLink to="https://github.com/bitrix24/b24icons" target="_blank" class="text-(length:--ui-font-size-sm) hover:underline">
      Опубликовано под лицензией MIT.
    </NuxtLink>
    <ProseP small accent="less">
      Copyright © 2024-настоящее время Битрикс
    </ProseP>
  </div>
</template>
