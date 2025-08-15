<template>
  <section class="product-section">
    <div class="product-section__cart-img-container">
      <img class="product-section__cart-img" :src="product.image" />
    </div>
    <img
      v-if="product.isVegan"
      class="product-section__cart-vegan-icon"
      src="/images/product/productCart/vegan.png"
    />

    <div class="product-section__cart-content">
      <div class="product-section__cart-info">
        <span class="product-section__cart-info-name">{{ product.name }}</span>
        <span class="product-section__cart-info-weight"
          >{{ product.weight }}g</span
        >
        <span class="product-section__cart-info-contents">{{
          product.ingredients
        }}</span>
      </div>

      <div class="product-section__cart-actions">
        <span class="product-section__cart-price">{{ product.price }}$</span>
        <div class="product-section__cart-btns">
          <div
            @click="readDialog.open()"
            class="product-section__cart-btns-container"
          >
            <img class="product-section__cart-btns-img" src="/icons/eye.svg" />
          </div>
          <div
            @click="editDialog.open(product)"
            class="product-section__cart-btns-container"
          >
            <img
              class="product-section__cart-btns-img"
              src="/icons/setting.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useEditDialogStore } from "~/store/editDialogStore";
import { useReadDialogStore } from "~/store/readDialogStore";

const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});

const editDialog = useEditDialogStore();
const readDialog = useReadDialogStore();
</script>

<style lang="scss">
.product-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 12px;
  background: rgb(255 255 255);

  &__cart-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &__cart-btns-img {
    width: 15px;
    height: 15px;
  }

  &__cart-price {
    font-size: 20px;
    font-weight: 500;
  }

  &__cart-btns {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__cart-btns-container {
    cursor: pointer;
    align-items: center;
    display: flex;
    border: 1px solid rgb(75 85 99);
    border-radius: 8px;
    padding: 0.5rem;
  }

  &__cart-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  &__cart-content {
    margin-top: 110px;
  }

  &__cart-info-name {
    font-size: 18px;
    font-weight: 600;
  }

  &__cart-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 25px;
  }

  &__cart-info-weight {
    text-align: center;
    color: rgb(75 85 99);
    font-size: 13px;
  }

  &__cart-info-contents {
    text-align: center;
    color: rgb(75 85 99);
    font-size: 13px;
  }

  &__cart-img-container {
    display: flex;
    width: 176px;
    height: 140px;
    position: absolute;
    top: -20px;
  }

  &__cart-vegan-icon {
    position: absolute;
    right: 24px;
    width: 25px;
  }
}
</style>