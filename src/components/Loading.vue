<template>
    <div class="loading-parent">
        <loading :active.sync="isLoading"
            :can-cancel='false'>
        </loading>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
export default {
    data() {
        return {
            isLoading: false,
            fullPage: true
        }
    },
    components: {
        Loading
    },
}
</script>

<style>
    
</style>


