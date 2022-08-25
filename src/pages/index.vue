<script setup lang="ts">
import { useQueries } from 'vue-query';
import { Alphabet } from '@/constants';
import type { AxiosError } from 'axios';

const filters = ref<Form>();
const handleUpdate = (form: Form) => {
  // saving directly may causes extra rerenders
  filters.value = { ...form };
};

const queries = useQueries(
  computed(() =>
    Alphabet.map((item) => ({
      queryKey: [
        `${filters.value?.endpoint?.value}${item}.json`,
        null,
        null,
        { headers: filters.value?.endpoint?.headers, showError: false },
      ],
      enabled: !!filters.value,
      staleTime: Infinity,
    })),
  ),
);
const isLoading = computed(() => queries.some((query) => query.isLoading));
const responses = computed(
  () => queries.map((query) => query.data).filter((response) => !!response) as IResponseData[],
);
const error = computed(
  () =>
    queries.find((query) => !!query.error)?.error as AxiosError<Record<string, any>> | undefined,
);
</script>

<template>
  <el-container class="relative min-h-screen bg-white" direction="vertical">
    <el-backtop />
    <v-header />
    <el-main>
      <v-form @update="handleUpdate" />
      <v-error :error="error" />
      <v-loading :is-loading="isLoading" />
      <v-list
        :responses="responses"
        :is-loading="isLoading"
        :error="error"
        :search="filters?.search"
      />
    </el-main>
  </el-container>
</template>
