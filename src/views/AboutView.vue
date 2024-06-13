<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <button @click="increment">添加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";
import { computed } from "vue";

interface Props {
  msg?: string;
  labels?: string[];
}

withDefaults(defineProps<Props>(), {
  msg: "hello",
  labels: () => ["one", "two"],
});

const emits = defineEmits(["test"]);

const count = computed(() => store.state.count);

const increment = () => {
  store.commit("increment");
  emits("test", count);
};

const decrement = () => {
  store.commit("decrement");
};
</script>
