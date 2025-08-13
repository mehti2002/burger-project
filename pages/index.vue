<template>
  <main class="home-page">
    <aside class="home-page__sidebar">
      <Sidebar />
    </aside>

    <section class="home-page__body">
      <SearchBar />
      <TabsProduct />
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
    color: white;
    padding: 1rem;
    box-sizing: border-box;
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
}
</style>
