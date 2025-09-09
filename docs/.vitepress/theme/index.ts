// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ThemeLayout from './layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: ThemeLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
