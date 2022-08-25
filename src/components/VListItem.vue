<script setup lang="ts">
defineProps<{
  data: [string, string[]];
}>();
</script>

<template>
  <el-col :md="8" :lg="6" :xl="4" class="my-2">
    <el-card class="mx-2 h-full">
      <template #header>
        {{ data[0] }}
      </template>
      <ul>
        <li v-for="text of data[1]" :key="text" shadow="hover">{{ text }}</li>
      </ul>
    </el-card>
  </el-col>
</template>
