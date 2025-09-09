<template>
    <Waline :serverURL="serverURL" :path="path" :dark="dark" :key="path" :markdown="true" />
</template>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import '@waline/client/style';

const serverURL = 'https://waline.davidingplus.cn';
const dark = 'html[class="dark"]';
// 获取响应式路由对象 route，并创建响应式 path，路由变化时自动更新。
// 这两行必须分开写，否则 Layout 单例里 computed 不会刷新。
const route = useRoute();
const path = computed(() => route.path);
</script>

<style scoped>
[data-waline] {
    --waline-theme-color: var(--vp-c-brand);
    --waline-active-color: var(--vp-c-brand);
}

:deep(.wl-emoji-popup, .wl-gif-popup) {
    z-index: 99;
}
</style>
