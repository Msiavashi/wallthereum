<template>

    <div class="container-fluid pt-5 d-flex flex-wrap align-content-center justify-content-center" id="background-container">
        <div class="container d-flex row my-5">
        <div class="container" id="background-container">
            <div class="row">
                <div >
                    <!-- Tabs with icons on Card -->
                    <div class="card card-nav-tabs">
                        <div class="card-header card-header-primary">
                            <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                            <div class="nav-tabs-navigation">
                                <div class="nav-tabs-wrapper">
                                    <ul class="nav nav-tabs" data-tabs="tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#profile" data-toggle="tab">
                                                <i class="material-icons">face</i>
                                                Private Key
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#messages" data-toggle="tab">
                                                <i class="material-icons">chat</i>
                                               Keystore file 
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#settings" data-toggle="tab">
                                                <i class="material-icons">build</i>
                                                Settings
                                            </a>
        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div><div class="card-body ">
                            <div class="tab-content text-center">
                                <div class="tab-pane active" id="profile">
                                    <p> Entering your private key on a website is dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen. Please consider:
                                    MetaMask or A Hardware Wallet or Running MEW Offline & Locally
                                    Learning How to Protect Yourself and Your Funds
                                    If you must, please double-check the URL & SSL cert. It should say https://www.myetherwallet.com & MYETHERWALLET INC in your URL bar. 
                                    </p>
                                    <div class="input-group container mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-success">Private Key</span>
                                        </div>
                                        <textarea class="form-control text-center" aria-label="private kye" placeholder="Pate your private key here" v-model="privateKey"></textarea>
                                    </div>
                                    <rounded-button-lg @click.native="unlock" :disabled="!privateKey" class="text-white deactive text-center" :text="'UNLOCK WALLET'" style="width:100%; background: linear-gradient(60deg,#ab47bc,#7b1fa2)"></rounded-button-lg>
                                </div>
                                <div class="tab-pane" id="messages">
                                    <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                </div>
                                <div class="tab-pane" id="settings">
                                    <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                </div>
                            </div>
                        </div></div>
                    <!-- End Tabs with icons on Card -->
        
                </div>
                </div>
            </div>
        </div>

        </div>

</template>

<script>
import RoundedButtonLg from '@/components/RoundedButtonLg';

export default {
    data: () => ({
        privateKey: null
    }),
    components: {
        RoundedButtonLg
    },
    methods: {
        unlock: function(){
            console.log("salam")
            this.$router.push({name: 'dashboard'});
        }
    }
}
</script>

<style scoped>

#background-container {
	background: #7474BF;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 100vh;
    margin: 0;
    padding: 0;
}





div.card {
    border: 0;
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 6px;
    color: rgba(0,0,0,.87);
    background: #fff;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}

div.card.card-plain {
    background: transparent;
    box-shadow: none;
}
div.card .card-header {
    border-radius: 3px;
    padding: 1rem 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -30px;
    border: 0;
    background: linear-gradient(60deg,#eee,#bdbdbd);
}

.card-plain .card-header:not(.card-avatar) {
    margin-left: 0;
    margin-right: 0;
}

.div.card .card-body{
    padding: 15px 30px;
}

div.card .card-header-primary {
    background: linear-gradient(60deg,#ab47bc,#7b1fa2);
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);
}

div.card .card-header-danger {
    background: linear-gradient(60deg,#ef5350,#d32f2f);
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(244,67,54,.6);
}


.card-nav-tabs .card-header {
    margin-top: -30px!important;
}

.card .card-header .nav-tabs {
    padding: 0;
}

.nav-tabs {
    border: 0;
    border-radius: 3px;
    padding: 0 15px;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.nav-tabs .nav-item {
    margin-bottom: -1px;
}

.nav-tabs .nav-item .nav-link.active {
    background-color: hsla(0,0%,100%,.2);
    transition: background-color .3s .2s;
}

.nav-tabs .nav-item .nav-link{
    border: 0!important;
    color: #fff!important;
    font-weight: 500;
}

.nav-tabs .nav-item .nav-link {
    color: #fff;
    border: 0;
    margin: 0;
    border-radius: 3px;
    line-height: 24px;
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px 15px;
    background-color: transparent;
    transition: background-color .3s 0s;
}

.nav-link{
    display: block;
}

.nav-tabs .nav-item .material-icons {
    margin: -1px 5px 0 0;
    vertical-align: middle;
}

.nav .nav-item {
    position: relative;
}
</style>

