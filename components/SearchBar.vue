<template>
  <section class="search-section">
    <img class="search-section__icon" src="/icons/search.svg" />
    <input
      class="search-section__input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="search-section__text">Search</span>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const localQuery = ref(props.modelValue);

watch(localQuery, (val) => {
  emit("update:modelValue", val);
});
</script>

<style lang="scss">
.search-section {
  width: 70%;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: 3px solid rgb(209 213 219);
  margin-bottom: 30px;

  &__input {
    width: 100%;
    height: 35px;
    font-size: 18px;
    border: none;
    font-weight: 600;
    outline: none;
    margin-right: 25px;
    outline: none;
    background: #f3f4f6;
    margin-left: 5px;
  }

  &__text {
    font-size: 16px;
    font-weight: 600;
    color: rgb(75 85 99);
  }

  &__icon {
    width: 25px;
  }
}
</style>