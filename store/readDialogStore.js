import { defineStore } from "pinia";
import { ref } from "vue";


export const useReadDialogStore = defineStore('readDialog', () => {

    const isOpen = ref(false)
    const selectedProduct = ref(null)

    function open(product = null) {
        selectedProduct.value = product ? { ...product } : {
            image: "",
            isVegan: false,
            name: "",
            weight: "",
            contents: "",
            price: 0,
            category: "",
        }
        isOpen.value = true
    }
    function close() {
        isOpen.value = false
        selectedProduct.value = null

    }


    return { isOpen, selectedProduct, open, close }
})