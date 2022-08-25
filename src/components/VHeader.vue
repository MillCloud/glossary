<script setup lang="ts">
import logo from '@/assets/logo.png';
import { Resources } from '@/constants';
import { version } from '@/../package.json';

const activeMenuItem = ref();

const handleSelect = (url: string) => {
  // disable active
  activeMenuItem.value = activeMenuItem.value === 'v' ? 'k' : 'v';
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.click();
};
</script>

<template>
  <el-menu
    :default-active="activeMenuItem"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="logo">
      <el-image :src="logo" class="w-20" fit="contain"></el-image>
      <span class="ml-2 font-medium">词汇表 v{{ version }}</span>
    </el-menu-item>
    <div class="flex-auto"></div>
    <el-sub-menu index="resource">
      <template #title>资源</template>
      <el-menu-item v-for="r of Resources" :key="r.value" :index="r.value">
        {{ r.label }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
