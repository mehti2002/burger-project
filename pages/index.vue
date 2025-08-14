<template>
  <main class="home-page">
    <aside class="home-page__sidebar">
      <Sidebar />
    </aside>

    <section class="home-page__body">
      <SearchBar />
      <TabsProduct />
      <section class="home-page__products">
        <ProductCard />
        <div class="home-page__products-add-container">
          <img class="home-page__products-add-icon" src="/icons/plus.svg" />
          <span class="home-page__products-add-text">Add new product</span>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
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
}
</style>
