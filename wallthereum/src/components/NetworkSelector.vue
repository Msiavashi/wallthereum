<template>
    
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="currentNetwork.name">
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="changeNetwork(network)" v-for="(network, index) in networks" :key="index" href="#">{{network.name}}</a>
        </div>
    </div>

</template>


<script>
import { Networks } from '@/NetworkManager';
import { mapState } from 'vuex';
import Web3 from 'web3';
export default {
    computed: {
        ...mapState({
            currentNetwork: state => state.web3.currentProvider
        }),
        networks: () => {
            return Networks;
        },
    },
    
    // mounted: function(){
    //     console.log(this.$store.state.connectedNetwork);
    // },

    methods: {
        changeNetwork: function(network){
            this.$parent.$parent.$refs.loading.isLoading = true;
            // const web3 = new Web3(new Web3.providers.HttpProvider(network.address));
            this.$store.dispatch("changeProvider", network);
            this.$store.state.web3.eth.net.isListening().then((s) => {
                this.$parent.$parent.$refs.loading.isLoading = false;
            }).catch((e) => {
                alert("connection lost");
                this.$parent.$parent.$refs.loading.isLoading = false;
            })
        }
    },

}
</script>


