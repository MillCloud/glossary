<script setup lang="ts">
import { decode } from 'js-base64';
import type { AxiosError } from 'axios';

const props = defineProps<{
  isLoading: boolean;
  responses: IResponseData[];
  error: AxiosError | undefined;
  search?: string;
}>();

const data = computed(
  () =>
    props.responses
      .map((response) => {
        const contents: [string, string[]][] = [];
        try {
          const parsed = JSON.parse(decode(response.content)) as Record<string, string[]>;
          const matches = Object.entries(parsed).filter(
            ([key, values]) =>
              key.includes(props.search ?? '') ||
              values.some((value) => value.includes(props.search ?? '')),
          );
          contents.push(...matches);
        } catch (error) {
          console.error(error);
        }
        if (contents.length > 0) {
          return [response.name[0], contents] as [Char, [string, string[]][]];
        }
        return undefined;
      })
      .filter((item) => !!item) as [Char, [string, string[]][]][],
);
</script>

<template>
  <el-row v-if="!isLoading && !error">
    <v-list-index-bar />
    <el-row v-for="[char, contents] of data" :key="char" class="w-full" :gutter="16">
      <v-list-divider :id="`char${char}`" :char="char"></v-list-divider>
      <v-list-item v-for="c of contents" :key="c[0]" :data="c" />
    </el-row>
  </el-row>
</template>
