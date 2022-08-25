<script setup lang="ts">
defineProps<{
  char: string;
}>();
</script>

<template>
  <el-divider :class="`divider divider-${char}`" content-position="left">{{ char }}</el-divider>
</template>
