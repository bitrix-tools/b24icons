<script setup lang="ts">
import type { GroupRow } from '#shared/types/base'
import infoMetaData from '@bitrix24/b24icons-vue/info-metadata.json'

const groups: Ref<GroupRow[]> = ref(infoMetaData.list as unknown as GroupRow[])

const title = 'Коллекция'
const prefix = ''
const description = 'Иконки для создания приложений в стиле Битрикс24'

useSeoMeta({
  titleTemplate: `${prefix}%s иконок для Bitrix24`,
  title,
  ogTitle: `${prefix}${title} иконок для Bitrix24`,
  description,
  ogDescription: description
})

const { mobileLinks } = useHeader()
</script>

<template>
  <B24SidebarLayout
    :use-light-content="false"
  >
    <template #sidebar>
      <B24SidebarHeader>
        <LogoWithVersion />
      </B24SidebarHeader>
      <B24SidebarBody>
        <B24NavigationMenu
          :items="mobileLinks"
          orientation="vertical"
        />
      </B24SidebarBody>
      <B24SidebarFooter>
        <B24SidebarSection>
          <ExtLinks />
        </B24SidebarSection>
      </B24SidebarFooter>
    </template>
    <template #navbar>
      <Header />
    </template>

    <IconsList :groups="groups" />
  </B24SidebarLayout>
</template>
