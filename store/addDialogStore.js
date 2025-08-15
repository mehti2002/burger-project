import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddDialogStore = defineStore('addDialog', () => {



    const isOpen = ref(false)
    const selectedAddProduct = ref(null)



    function open(product) {
        selectedAddProduct.value = product
        isOpen.value = true
    }


    function close() {
        isOpen.value = false
        selectedAddProduct.value = null

    }

    return { isOpen, selectedAddProduct, open, close }
})