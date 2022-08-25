<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { Endpoints } from '@/constants';

const form = reactive<Form>({
  endpoint: Endpoints[0] as typeof Endpoints[number],
  search: '',
});

const emit = defineEmits<{
  (e: 'update', form: Form): void;
}>();

const handleSubmit = () => {
  emit('update', form);
};
onMounted(() => {
  emit('update', form);
});
</script>

<template>
  <el-form @submit.prevent>
    <el-form-item>
      <el-input v-model="form.search" class="mx-auto w-400px" clearable>
        <template #prepend>
          <el-select v-model="form.endpoint" class="w-100px">
            <el-option v-for="e of Endpoints" :key="e.value" :label="e.label" :value="e" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" @click="handleSubmit" />
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>
