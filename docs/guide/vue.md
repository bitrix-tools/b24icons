---
---
<script setup>
import { B24Icon } from '@bitrix24/b24icons-vue';
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon';
import ComponentShowExample from '~/.vitepress/theme/components/ui/ComponentShowExample.vue';

const configParams = __SH_BASE__;
</script>

# Vue

Библиотека `@bitrix24/b24icons-vue` для [Vue 3](https://vuejs.org/).

## Установка {#installation}

Установите через `npm`.

::: code-group
```sh [npm]
$ npm i @bitrix24/b24icons-vue
```
:::

## Использование {#usage}

Пакет поддерживает [ECMAScript](https://tc39.github.io/ecma262/#sec-modules) и `tree-shaking`.

Импортируйте иконки как Vue-компоненты. В сборку включаются только используемые иконки.

### Пример {#example}

<ComponentShowExample>
  <div class="grid grid-cols-1 gap-x-10 gap-y-8 place-items-center">
    <div class="flex flex-col items-center gap-y-1">
      <p class="font-medium text-xs text-gray-800 font-b24-system-mono text-center dark:text-gray-400">Common-service::Bitrix24Icon</p>
      <div class="size-24 rounded-lg bg-white shadow-md dark:bg-gray-400 flex flex-row flex-nowrap items-center justify-center">
        <Bitrix24Icon class="size-15 text-blue-500 dark:text-blue-900" />
      </div>
    </div>
  </div>
</ComponentShowExample>


::: code-group

```vue{2,7} [SomeComponent.vue]
<script setup>
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon'
</script>

<template>
  <div class="rounded ...">
    <Bitrix24Icon class="size-15 text-blue-500 ..." />
  </div>
</template>
```

:::

## Универсальный компонент иконок {#generic-icon-component}

Используйте компонент <a :href="`https://github.com/bitrix24/b24icons/blob/main/packages/@bitrix24-icons-vue/src/components/B24Icon.ts`" target="_blank" rel="noreferrer">B24Icon</a> для удобного доступа к иконкам.

Компонент использует динамический импорт через `import()` для загрузки иконок по мере необходимости.

Это не нарушает принцип `tree-shaking`, так как `tree-shaking` работает со статическим импортом, а динамическиё импорт используется для оптимизации загрузки, когда загружаются только необходимые части кода.

> Укажите полное имя иконки с помощью параметра `name`, например, `Main::CopilotAiIcon`.

<ComponentShowExample>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8 place-items-center">
    <div class="flex flex-col items-center gap-y-1">
      <p class="font-medium text-xs text-gray-800 font-b24-system-mono text-center dark:text-gray-400">Main::CopilotAiIcon</p>
      <div class="size-24 rounded-lg bg-white shadow-md dark:bg-gray-400 flex flex-row flex-nowrap items-center justify-center">
        <B24Icon name="Main::CopilotAiIcon" class="size-15 text-blue-500 dark:text-blue-900" />
      </div>
    </div>
    <div class="flex flex-col items-center gap-y-1">
      <p class="font-medium text-xs text-gray-800 font-b24-system-mono text-center dark:text-gray-400">Button::TariffIcon</p>
      <div class="size-24 rounded-lg bg-white shadow-md dark:bg-gray-400 flex flex-row flex-nowrap items-center justify-center">
        <B24Icon name="Button::TariffIcon" class="size-15 text-blue-500 dark:text-blue-900" />
      </div>
    </div>
    <div class="flex flex-col items-center gap-y-1">
      <p class="font-medium text-xs text-gray-800 font-b24-system-mono text-center dark:text-gray-400">Main::AiIcon</p>
      <div class="size-24 rounded-lg bg-white shadow-md dark:bg-gray-400 flex flex-row flex-nowrap items-center justify-center">
        <B24Icon name="Main::AiIcon" class="size-15 text-blue-500 dark:text-blue-900" />
      </div>
    </div>
  </div>
</ComponentShowExample>

::: code-group

```vue{2,7,10,13} [SomeComponent.vue]
<script setup>
import { B24Icon } from '@bitrix24/b24icons-vue'
</script>

<template>
  <div class="rounded ...">
    <B24Icon name="Button::TariffIcon" class="size-15 ..." />
  </div>
  <div class="rounded ...">
    <B24Icon name="Main::CopilotAiIcon" class="size-15 ..." />
  </div>
  <div class="rounded ...">
    <B24Icon name="Main::AiIcon" class="size-15 ..." />
  </div>
</template>
```
:::
