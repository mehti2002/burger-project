<template>
  <section class="tabs-section">
    <div class="tabs-section__container">
      <div
        class="tabs-section__item"
        v-for="(tab, index) in tabsItem"
        :key="index"
        :class="{ 'tabs-section__item-active': choseTab === index }"
        @click="selectTab(index)"
      >
        <img class="tabs-section__item-icon" :src="tab.icon" />
        <span class="tabs-section__item-name">{{ tab.name }}</span>
      </div>
      <img class="tabs-section__icon" src="/icons/tabicon5.svg" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tabsItem = [
  { name: "Main courses", icon: "/icons/tabicon1.svg" },
  { name: "Side dishes", icon: "/icons/tabicon2.svg" },
  { name: "Drinks", icon: "/icons/tabicon3.svg" },
  { name: "Other", icon: "/icons/tabicon4.svg" },
];

const choseTab = ref(0);

function selectTab(index) {
  choseTab.value = index;
}
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