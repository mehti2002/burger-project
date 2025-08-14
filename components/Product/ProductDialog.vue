<template>
  <section
    class="product-dialog-add__section"
    :class="{ 'product-dialog-add__section-open': addDialog.isOpen }"
  >
    <div class="product-dialog-add__head">
      <span class="product-dialog-add__head-text">Add New Product</span>

      <div @click="addDialog.close()" class="product-dialog-add__head-close">
        <img
          src="/icons/close.svg"
          class="product-dialog-add__head-close-icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAddDialogStore } from "~/store/addDialogStore";

const addDialog = useAddDialogStore();
</script>

<style lang="scss">
.product-dialog-add__section {
  background: rgb(255, 255, 255);
  width: 350px;
  right: 0;
  position: fixed;
  transform: translateX(450px);
  transition: transform 1s ease;
  height: 100vh;
  padding: 1.5rem;
}

.product-dialog-add__section-open {
  transform: translateX(0px);
}

.product-dialog-add__head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &-close {
    cursor: pointer;
    display: flex;
  }

  &-text {
    font-size: 20px;
  }

  &-close-icon {
    width: 30px;
  }
}
</style>