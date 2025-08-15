import { defineStore } from 'pinia'
import mockProducts from "./../src/data/mockProducts.json";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [...mockProducts]
  }),
  actions: {
    addProduct(newProduct) {
      this.products.push({ ...newProduct, id: Date.now() })
    }
  }
})
