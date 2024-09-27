import { defineConfig, type DefaultTheme } from 'vitepress'
import { configParams } from './params'

export const ru = defineConfig({
	lang: 'ru-RU',
	description: 'Битрикс24 SVG иконки для разработки веб-приложений',
	
	themeConfig: {
		nav: nav(),
		
		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() }
		},
		
		editLink: {
			pattern: 'https://github.com/bitrix-tools/b24icons/edit/main/docs/:path',
			text: 'Редактировать страницу'
		},
		
		footer: {
			message: 'Опубликовано под лицензией MIT.',
			copyright: 'Copyright © 2024 – настоящее время Bitrix24'
		},
		
		outline: { label: 'Содержание страницы' },
		
		docFooter: {
			prev: 'Предыдущая страница',
			next: 'Следующая страница'
		},
		
		lastUpdated: {
			text: 'Обновлено'
		},
		
		darkModeSwitchLabel: 'Оформление',
		lightModeSwitchTitle: 'Переключить на светлую тему',
		darkModeSwitchTitle: 'Переключить на тёмную тему',
		sidebarMenuLabel: 'Меню',
		returnToTopLabel: 'Вернуться к началу',
		langMenuLabel: 'Изменить язык'
	}
})


function nav(): DefaultTheme.NavItem[] {
	return [
		{text: 'Быстрый старт', link: '/guide/getting-started'},
		{text: 'Иконки', link: '/guide/icons'},
		{
			text: configParams.version,
			items: [
				{
					text: 'Changelog',
					link: `https://github.com/bitrix-tools/b24icons/blob/main/CHANGELOG.md`
				},
				... configParams.relative
			]
		}
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Руководство',
			collapsed: false,
			items: [
				{ text: 'Быстрый старт', link: 'getting-started' },
				{ text: 'Vue', link: 'vue' }
			]
		},
		{ text: 'Иконки', base: '/guide/', link: 'icons' }
	]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
	// ru: {
	root: {
		translations: {
			button: {
				buttonText: 'Поиск',
				buttonAriaLabel: 'Поиск'
			},
			modal: {
				displayDetails: 'Отобразить подробный список',
				resetButtonTitle: 'Сбросить поиск',
				backButtonTitle: 'Закрыть поиск',
				noResultsText: 'Нет результатов по запросу',
				footer: {
					selectText: 'выбрать',
					selectKeyAriaLabel: 'выбрать',
					navigateText: 'перейти',
					navigateUpKeyAriaLabel: 'стрелка вверх',
					navigateDownKeyAriaLabel: 'стрелка вниз',
					closeText: 'закрыть',
					closeKeyAriaLabel: 'esc'
				}
			}
		}
	}
}