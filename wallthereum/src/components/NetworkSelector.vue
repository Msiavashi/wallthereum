<template>
    
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{currentNetwork.name}}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="changeNetwork(network)" v-for="(network, index) in networks" :key="index" href="#">{{network.name}}</a>
        </div>
    </div>


</template>


<script>
import { Networks } from '@/NetworkManager';

export default {
    data: () => ({
        currentNetwork: Networks.InfuraMainNet
    }),

    computed: {
        networks: () => {
            return Networks;
        },
    },

    methods: {
        changeNetwork: function(network){
            this.$parent.$parent.$refs.loading.isLoading = true;
            this.$store.web3.setProvider(new web3.providers.HttpProvider(network.address));
            this.$store.web3.currentNetwork = network;
            this.currentNetwork = this.$store.web3.currentNetwork;
            this.$store.web3.eth.net.isListening().then((s) => {
                this.$parent.$parent.$refs.loading.isLoading = false;
            }).catch((e) => {
                alert("connection lost");
                this.$parent.$parent.$refs.loading.isLoading = false;
            })
        }
    },

}
</script>


