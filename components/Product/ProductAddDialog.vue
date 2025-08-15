<template>
  <section
    class="product-dialog-add__section"
    :class="{
      'product-dialog-add__section-open': addDialog.isOpen,
    }"
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

    <div
      class="product-dialog-add__section"
      :class="{
        'product-dialog-add__section-open': addDialog.isOpen,
      }"
    >
      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Name of the product</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="newProduct.name"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Category</label>
        <select
          class="product-dialog-input__input"
          v-model="newProduct.category"
        >
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Ingredients</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="newProduct.contents"
        />
      </div>

      <div class="product-dialog-input__vegan-container">
        <label class="product-dialog-input__label">Suitable for vegans</label>
        <input
          class="product-dialog-input__checkbox"
          type="checkbox"
          v-model="newProduct.isVegan"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Weight in grams</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="newProduct.weight"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Calories</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="newProduct.calories"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Price of the product</label>
        <input
          class="product-dialog-input__input"
          type="number"
          v-model="newProduct.price"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Upload photo</label>
        <input class="product-dialog-input__input" type="file" />
      </div>

      <div class="product-dialog-input__btn-container">
        <button class="product-dialog-input__btn" @click="addProduct">
          Add Product
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAddDialogStore } from "~/store/addDialogStore";
import mockProducts from "./../src/data/mockProducts.json";

import { ref } from "vue";

const addDialog = useAddDialogStore();

const newProduct = ref({
  image: "",
  isVegan: false,
  name: "",
  weight: "",
  contents: "",
  price: "",
  category: "",
});
const categories = ["همبرگر", "پیتزا", "سالاد", "نوشیدنی"];

function addProduct() {
  mockProducts.push({ ...newProduct.value });

  newProduct.value = {
    image: "",
    isVegan: false,
    name: "",
    weight: "",
    contents: "",
    price: "",
    category: "",
  };

  addDialog.close();
}
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
  gap: 15px;
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

.product-dialog-input__container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-dialog-input__vegan-container {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: row-reverse;
  justify-content: left;
  align-items: center;
  gap: 10px;
}

.product-dialog-input__label {
  font-size: 16px;
  font-weight: 500;
}

.product-dialog-input__checkbox {
  width: 25px;
  height: 25px;
}

.product-dialog-input__btn {
  width: 100%;
  cursor: pointer;
  margin-top: 25px;
  background: #040720;
  color: #fff;
  font-size: 18px;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
}

.product-dialog-input__input {
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  font-size: 18px;
  height: 35px;
}
</style>