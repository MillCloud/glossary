<script setup lang="ts">
import { Loading } from '@element-plus/icons-vue';

defineProps<{
  isLoading: boolean;
}>();
</script>

<template>
  <el-row class="flex items-center justify-center">
    <el-icon v-if="isLoading" class="is-loading" :size="32">
      <Loading />
    </el-icon>
  </el-row>
</template>
