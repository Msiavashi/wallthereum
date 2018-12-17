<template>

    <div class="d-flex align-content-center justify-content-center" id="background-container" style="background-color: rgb(245, 245, 245)">
        <div class="container d-flex row">
        <div class="container" id="background-container">
            <div class="row">
                <div>
                    <!-- Tabs with icons on Card -->
                    <div class="card card-nav-tabs shadow">
                        <div class="card-header card-header-primary">
                            <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                            <div class="nav-tabs-navigation">
                                <div class="nav-tabs-wrapper">
                                    <ul class="nav nav-tabs" data-tabs="tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#profile" data-toggle="tab">
                                                <i class="material-icons">fingerprint</i>
                                                Private Key
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#keystore" data-toggle="tab">
                                                <i class="material-icons">attach_file</i>
                                               Keystore file 
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#settings" data-toggle="tab">
                                                <i class="material-icons">info</i>
                                                InformationSett
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
                                    <rounded-button-lg @click.native="privateKeyUnlock" :disabled="!privateKey" class="text-white deactive text-center" :text="'UNLOCK WALLET'" style="width:100%; background: linear-gradient(60deg,#ab47bc,#7b1fa2)"></rounded-button-lg>
                                </div>
                                <div class="tab-pane" id="keystore">
                                    <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                    <div class="custom-file my-3">
                                        <input @change="onKeyStoreChange" type="file" class="custom-file-input" id="customFile">
                                        <label v-if="file" class="custom-file-label" for="customFile">{{file.name}}</label>
                                        <label v-else class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" v-model="password" id="inputPassword5" placeholder="Enter your password" class="form-control" aria-describedby="passwordHelpBlock">
                                    </div>

                                    <rounded-button-lg @click.native="keyStoreUnlock" :disabled="!file" class="text-white deactive text-center" :text="'UNLOCK WALLET'" style="width:100%; background: linear-gradient(60deg,#ab47bc,#7b1fa2)"></rounded-button-lg>
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
var secp256k1 = require('secp256k1');

export default {
    data: () => ({
        password: null,
        privateKey: null,
        file: null
    }),
    components: {
        RoundedButtonLg
    },
    methods: {
        privateKeyUnlock: function(){
            // this.$router.push({name: 'dashboard'});
            if(this.isValidPrivateKey()){
                this.$store.wallet = this.$store.getters.getWeb3.eth.accounts.privateKeyToAccount(this.privateKey);
                this.$router.push({name: 'dashboard'});
            }else{
                alert('invalid private key !');
            }
        },

        keyStoreUnlock: function(){
            const reader = new FileReader();
            let self = this;
            reader.onload = function() {
                self.$store.wallet = self.$store.getters.getWeb3.eth.accounts.decrypt(reader.result.toLowerCase(), self.password);
                if (self.$store.wallet){
                    self.$router.push({name: 'dashboard'});
                }
                console.log(self.$store.wallet);
            }
            reader.readAsText(this.file);
        },
        
        onKeyStoreChange: function(event){
            this.file = event.target.files[0];
        },

        isValidPrivateKey: function(){
            try {
                return secp256k1.privateKeyVerify(new Buffer(this.privateKey, 'hex'));
            } catch (error) {
                return false;
            }
        }
    }
}
</script>

<style scoped>

#background-container {
    /* min-height: 100vh; */
    padding-top: 50px;
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

