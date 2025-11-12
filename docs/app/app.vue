<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { ru } from '@bitrix24/b24ui-nuxt/locale'

const route = useRoute()
const appConfig = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs', ['description', 'badge']))

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: `https://bitrix24.github.io/b24ui${withTrailingSlash(route.path)}` }
  ],
  style: [],
  htmlAttrs: { lang: 'en', class: '' }
})

useServerSeoMeta({
  ogSiteName: 'Bitrix24 Icons',
  twitterCard: 'summary_large_image'
})

const { rootNavigation } = useNavigation(navigation)

provide('navigation', rootNavigation)

const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = !(colorMode.value === 'dark') ? 'dark' : 'light'
}

defineShortcuts({
  shift_D: () => {
    toggleMode()
  }
})
</script>

<template>
  <B24App :toaster="appConfig.toaster" :locale="ru">
    <NuxtLoadingIndicator color="var(--ui-color-design-filled-warning-bg)" :height="3" />
    <div :class="[route.path.startsWith('/docs/') && 'root']">
      <template v-if="!route.path.startsWith('/examples') && !route.path.startsWith('/icons')">
        <Banner />
      </template>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </B24App>
</template>
