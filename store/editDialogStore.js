import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditDialogStore = defineStore('editDialog', () => {



    const isOpen = ref(false)
    const selectedEditProduct = ref(null)



    function open(product) {
        selectedEditProduct.value = product
        isOpen.value = true
    }


    function close() {
        isOpen.value = false
        selectedEditProduct.value = null

    }

    return { isOpen, selectedEditProduct, open, close }
})