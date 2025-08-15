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
        <label class="product-dialog-input__label">Name of the product</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="tempProduct.name"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Category</label>
        <select
          class="product-dialog-input__input"
          v-model="tempProduct.category"
        >
          <option :value="tempProduct.category">
            {{ tempProduct.category }}
          </option>
        </select>
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Ingredients</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="tempProduct.ingredients"
        />
      </div>

      <div class="product-dialog-input__vegan-container">
        <label class="product-dialog-input__label">Suitable for vegans</label>
        <input
          class="product-dialog-input__checkbox"
          type="checkbox"
          v-model="tempProduct.isVegan"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Weight in grams</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="tempProduct.weight"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Calories</label>
        <input
          class="product-dialog-input__input"
          type="text"
          v-model="tempProduct.calories"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Price of the product</label>
        <input
          class="product-dialog-input__input"
          type="number"
          v-model="tempProduct.price"
        />
      </div>

      <div class="product-dialog-input__container">
        <label class="product-dialog-input__label">Upload photo</label>
        <input class="product-dialog-input__input" type="file" />
      </div>

      <div class="product-dialog-input__btn-container">
        <button class="product-dialog-input__btn" @click="submitEdit()">
          Submit
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useEditDialogStore } from "~/store/editDialogStore";
import { ref } from "vue";

const editDialog = useEditDialogStore();

const tempProduct = ref({});

watch(
  () => editDialog.isOpen,
  (isOpen) => {
    if (isOpen && editDialog.selectedEditProduct) {
      tempProduct.value = { ...editDialog.selectedEditProduct };
    }
  }
);

function submitEdit() {
  Object.assign(editDialog.selectedEditProduct, tempProduct.value);
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
  gap: 15px;
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
  background: #8fbc8f;
  color: #fff;
  font-size: 18px;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
}

.product-dialog-input__input {
  border: 1px solid #040720;
  border-radius: 6px;
  font-size: 18px;
  height: 35px;
}
</style>