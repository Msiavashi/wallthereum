<template>
    <div class="body d-flex row flex-wrap justify-content-md-center">
        <div class="container shadow-lg align-self-center">
            <wallet-stteper></wallet-stteper>
        </div>
    </div>
</template>

<style scoped>

.body {
    margin: 0;
    padding: 0;
    height: 100vh;
}

.wave {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #4776E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>


<script>
import Vue from 'vue'
import { MdButton, MdSteppers} from 'vue-material/dist/components'
import WalletStteper from '@/components/WalletStepper'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton);
Vue.use(MdSteppers);

export default {
    components: {
        WalletStteper
    }
    
}
</script>
