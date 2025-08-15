<template>
  <section class="tabs-section">
    <div class="tabs-section__container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'tabs-section__item-active': activeTab === index }"
        class="tabs-section__item"
        @click="selectTab(index)"
      >
        <img class="tabs-section__item-icon" :src="tab.icon" />
        <span class="tabs-section__item-name">{{ tab.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  active: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["change"]);

const activeTab = ref(props.active);

function selectTab(index) {
  activeTab.value = index;
  emit("change", index);
}

watch(
  () => props.active,
  (newVal) => {
    activeTab.value = newVal;
  }
);
</script>

<style lang="scss">
.tabs-section {
  width: 100%;
  height: 60px;
  background: rgb(255 255 255);
  border-radius: 16px;
  display: flex;
  align-items: center;

  &__container {
    height: 100%;
  }

  &__item-name {
    font-size: 15px;
    font-weight: 600;
  }

  &__icon {
    width: 25px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    height: 100%;
  }

  &__item-icon {
    width: 25px;
  }

  &__item-active {
    border-bottom: 3px solid;
  }

  &__container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
}
</style>