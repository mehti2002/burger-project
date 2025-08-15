import { defineStore } from "pinia";
import { ref } from "vue";


export const useReadDialogStore = defineStore('readDialog', () => {

    const isOpen = ref(false)
    const selectedReadProduct = ref(null)

    function open(product) {

        selectedReadProduct.value = product
        isOpen.value = true
    }
    function close() {
        isOpen.value = false
        selectedReadProduct.value = null

    }


    return { isOpen, selectedReadProduct, open, close }
})