<template>
  <main class="home-page">
    <aside class="home-page__sidebar">
      <Sidebar />
    </aside>

    <section class="home-page__body">
      <SearchBar v-model="searchQuery" />
      <TabsProduct
        :tabs="tabsItem"
        :active="selectedTab"
        @change="selectedTab = $event"
      />
      <section class="home-page__products">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
        <div
          @click="addDialog.open()"
          class="home-page__products-add-container"
        >
          <img class="home-page__products-add-icon" src="/icons/plus.svg" />
          <span class="home-page__products-add-text">Add new product</span>
        </div>
      </section>
    </section>

    <div
      class="dialog-overlay"
      :class="{
        'dialog-overlay--active':
          addDialog.isOpen || readDialog.isOpen || editDialog.isOpen,
      }"
      @click="addDialog.close()"
    ></div>
    <ProductAddDialog class="product-dialog" />
    <ProductEditDialog class="product-dialog" />
    <ProductReadDialog class="product-dialog" />
  </main>
</template>

<script setup>
import { useAddDialogStore } from "~/store/addDialogStore";
import mockProducts from "./../src/data/mockProducts.json";
import { useReadDialogStore } from "~/store/readDialogStore";
import { useEditDialogStore } from "~/store/editDialogStore";
import { useProductsStore } from "~/store/productsStore";

const tabsItem = [
  { name: "Main courses", icon: "/icons/tabicon1.svg" },
  { name: "Side dishes", icon: "/icons/tabicon2.svg" },
  { name: "Drinks", icon: "/icons/tabicon3.svg" },
  { name: "Other", icon: "/icons/tabicon4.svg" },
];

const productsStore = useProductsStore();

const selectedTab = ref(0);

const searchQuery = ref("");

const filteredProducts = computed(() => {
  const currentCategory = tabsItem[selectedTab.value]?.name || "";
  return productsStore.products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (currentCategory ? p.category === currentCategory : true)
  );
});

const addDialog = useAddDialogStore();
const readDialog = useReadDialogStore();
const editDialog = useEditDialogStore();
</script>

<style lang="scss" scoped>
:global(body) {
  margin: 0;
  font-family: Arial, sans-serif;
}

.home-page {
  display: flex;
  min-height: 100vh;

  &__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;
  }

  &__products-add-icon {
    width: 25px;
  }

  &__products {
    width: 100%;
    display: grid;
    gap: 15px;
    margin-top: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 840px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1224px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &__body {
    margin-left: 250px;
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(243 244 246);
  }

  &__products-add-container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: dashed 2px #bcc6cc;
    border-radius: 12px;
    height: 290px;
    width: 100%;
  }

  &__products-add-text {
    font-size: 16px;
    font-weight: 500;
    color: #bcc6cc;
  }

  .dialog-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 10;

    &--active {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .product-dialog {
    position: fixed;
    z-index: 20;
  }
}
</style>
