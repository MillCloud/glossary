<script setup lang="ts">
import { Alphabet } from '@/constants';

const activeChar = ref('A');
const dividerRefs = ref<HTMLElement[]>([]);
onMounted(() => {
  nextTick(() => {
    dividerRefs.value = Array.from(document.querySelectorAll('.divider'));
  });
});

const { y } = useScroll(document);
watch(y, () => {
  if (!dividerRefs.value) return;
  const liRef = [...dividerRefs.value]
    .reverse()
    .find((liRef) => y.value >= (liRef?.parentElement?.offsetTop ?? 0));
  activeChar.value = liRef?.innerText ?? 'A';
});

const handleClickChar = (event: MouseEvent) => {
  const char = (event.target as HTMLLIElement | undefined)?.innerText;
  if (!dividerRefs.value || !char) return;
  const liRef = [...dividerRefs.value].find((liRef) => liRef?.innerText === char);
  if (!liRef) return;
  liRef.parentElement?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <ul class="fixed right-2 top-half -translate-y-half" @click="handleClickChar">
    <li
      v-for="c of Alphabet"
      :key="c"
      class="cursor-pointer"
      :class="{
        'text-primary': activeChar === c,
      }"
    >
      {{ c }}
    </li>
  </ul>
</template>
