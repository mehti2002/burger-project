<template>
  <section
    class="product-dialog-edit__section"
    :class="{
      'product-dialog-edit__section-open': editDialog.isOpen,
    }"
  >
    <div class="product-dialog-edit__head">
      <span class="product-dialog-edit__head-text">Add New Product</span>

      <div @click="editDialog.close()" class="product-dialog-edit__head-close">
        <img
          src="/icons/close.svg"
          class="product-dialog-edit__head-close-icon"
        />
      </div>
    </div>

    <div
      class="product-dialog-edit__section"
      :class="{
        'product-dialog-edit__section-open': editDialog.isOpen,
      }"
    >
      <div class="product-dialog-input__container">
        <label>تصویر محصول:</label>
        <input type="file" />
        <img
          v-if="product.image"
          :src="selectedAddProduct.image"
          alt="Product Image"
          class="preview-image"
        />
      </div>

      <div class="product-dialog-input__container">
        <label>آیکون وگان:</label>
        <input type="checkbox" v-model="selectedAddProduct.isVegan" />
      </div>

      <div class="product-dialog-input__container">
        <label>اسم محصول:</label>
        <input
          type="text"
          v-model="selectedAddProduct.name"
          placeholder="نام محصول"
        />
      </div>

      <div class="product-dialog-input__container">
        <label>وزن محصول:</label>
        <input type="text" v-model="selectedAddProduct.weight" />
      </div>

      <div class="product-dialog-input__container">
        <label>محتویات محصول:</label>
        <textarea
          v-model="selectedAddProduct.contents"
          placeholder="محتویات محصول"
        ></textarea>
      </div>

      <div class="product-dialog-input__container">
        <label>قیمت محصول:</label>
        <input
          type="number"
          v-model="selectedAddProduct.price"
          placeholder="قیمت محصول"
        />
      </div>

      <div class="product-dialog-input__container">
        <label>دسته‌بندی محصول:</label>
        <select v-model="selectedAddProduct.category">
          <option disabled value="">دسته‌بندی را انتخاب کنید</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <div class="buttons">
        <button @click="saveProduct">افزودن</button>
        <button @click="editDialog.close()">بستن</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useEditDialogStore } from "~/store/editDialogStore";
import mockProducts from "./../src/data/mockProducts.json";

import { ref } from "vue";
import { useReadDialogStore } from "~/store/readDialogStore";

const editDialog = useEditDialogStore();
const readDialog = useReadDialogStore();

const product = ref({
  image: "",
  isVegan: false,
  name: "",
  weight: "",
  contents: "",
  price: "",
  category: "",
});

const categories = ["همبرگر", "پیتزا", "سالاد", "نوشیدنی"];

const selectedAddProduct = computed(() => editDialog.selectedEditProduct || {});

function addProduct() {
  const { name, weight, contents, price, category } = product.value;
  if (!name || !weight || !contents || !price || !category) {
    alert("لطفا همه فیلدها را پر کنید!");
    return;
  }

  Object.assign(product.value);

  editDialog.close();
}

function saveProduct() {
  editDialog.close();
}
</script>

<style lang="scss">
.product-dialog-edit__section {
  background: rgb(255, 255, 255);
  width: 350px;
  right: 0;
  position: fixed;
  transform: translateX(450px);
  transition: transform 1s ease;
  height: 100vh;
  padding: 1.5rem;
}

.product-dialog-edit__section-open {
  transform: translateX(0px);
}

.product-dialog-edit__head {
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
}
</style>