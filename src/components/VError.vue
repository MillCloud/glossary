<script setup lang="ts">
import type { AxiosError } from 'axios';

defineProps<{
  error: AxiosError<Record<string, any>> | undefined;
}>();
</script>

<template>
  <el-result
    v-if="error"
    icon="error"
    :title="error.code || error.status"
    :sub-title="error?.response?.data?.message || error.message"
  >
    <template #extra>
      <el-link
        v-if="error?.response?.data?.documentation_url"
        :href="error?.response?.data?.documentation_url"
      >
        Check Out Documentation
      </el-link>
    </template>
  </el-result>
</template>
