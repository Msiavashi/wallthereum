<template>

    <div class="d-flex align-content-center justify-content-center" id="background-container" style="background-color: #EDFAFD">
        <div class="container d-flex row">
        <div class="container" id="background-container">
            <div class="row">
                <div>
                    <!-- Tabs with icons on Card -->
                    <div class="card card-nav-tabs shadow-lg">
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
                                            <a class="nav-link" href="#metamask" data-toggle="tab">
                                                <i class="material-icons">extension</i>
                                                MetaMask
                                            </a>
        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div><div class="card-body ">
                            <div class="tab-content text-center">
                                <div class="tab-pane active" id="profile">
                                    <div class="mb-3"> 
                                        <h6 class="h6 p-3 bg-light shadow-sm text-center text-success card card-block font-weight-bold font-italic">The format of your private key is 3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266.</h6>
                                        <h5 class="h5 text-danger mb-3 font-weight-bold font-italic"> * WARNING *</h5> 
                                        <p class="text-justify font-italic"> Before entering your private key please double check the site address and SSL certificate, it should say <a class="text-danger font-italic" href="https://wallthereum.com"> https://wallthereum.com  </a> and <span class="font-italic text-danger"> SSL cert should be wallthereum INC </span>.
                                            If you don't want to get Phished or get your fund stolen Please take this double check seriously before entering your private key.
                                        </p>
                                        <a class="font-italic font-weight-bold" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Phishing"> what is phishing ?</a>
                                    </div>
                                    <div class="input-group container mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text text-success">Private Key</span>
                                        </div>
                                        <textarea class="form-control text-center" aria-label="private kye" placeholder="Pate your private key here" v-model="privateKey"></textarea>
                                    </div>
                                    <button class="btn btn-success btn-change deactive text-center" style="width:100%;" @click="privateKeyUnlock" :disabled=!privateKey> UNLOCK WALLET </button>
                                    <!-- <rounded-button-lg @click.native="privateKeyUnlock" :disabled="!privateKey" class="text-white deactive text-center" :text="'UNLOCK WALLET'" style="width:100%; background: linear-gradient(60deg,#ab47bc,#7b1fa2)"></rounded-button-lg> -->
                                </div>
                                <div class="tab-pane" id="keystore">
                                    <div class="mb-3"> 
                                        <h6 class="h6 p-3 bg-light shadow-sm text-center text-success card card-block font-weight-bold font-italic">An Ethereum keystore file is an encrypted version of your unique Ethereum private key that you will use to sign your transactions.</h6>
                                        <h5 class="h5 text-danger mb-3 font-weight-bold font-italic"> * WARNING *</h5> 
                                        <p class="text-justify font-italic"> Before entering your keystore and password please double check the site address and SSL certificate, it should say <a class="text-danger font-italic" href="https://wallthereum.com"> https://wallthereum.com  </a> and <span class="font-italic text-danger"> SSL cert should be wallthereum INC </span>.
                                            If you don't want to get Phished or get your fund stolen Please take this double check seriously before entering your private key.
                                        </p>
                                        <a class="font-italic font-weight-bold" rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Phishing"> what is phishing ?</a>
                                    </div>
                                    <div class="custom-file my-3">
                                        <input @change="onKeyStoreChange" type="file" class="custom-file-input" id="customFile">
                                        <label v-if="file" class="custom-file-label" for="customFile">{{file.name}}</label>
                                        <label v-else class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" v-model="password" id="inputPassword5" placeholder="Enter your password" class="form-control" aria-describedby="passwordHelpBlock">
                                    </div>
                                    <button class="btn btn-success btn-change deactive text-center" style="width:100%;" @click="keyStoreUnlock" :disabled=!file> UNLOCK WALLET </button>
                                    <!-- <rounded-button-lg @click.native="keyStoreUnlock" :disabled="!file" class="text-white deactive text-center" :text="'UNLOCK WALLET'" style="width:100%; background: linear-gradient(60deg,#ab47bc,#7b1fa2)"></rounded-button-lg> -->
                                </div>
                                <div class="tab-pane" id="metamask">
                                    <a href="https://metamask.io/" rel="noopener noreferrer" target="_blank">
                                        <div ref="metamask"></div>
                                    </a>
                                    <p> 
                                        MetaMask is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.

                                        MetaMask includes a secure identity vault, providing a user interface to manage your identities on different sites and sign blockchain transactions.
                                    </p>
                                    <br>
                                    <h5 class="alert h5 text-danger"><b> We will support MetaMask real soon ... </b></h5>
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
var ModelViewer = require('metamask-logo');
export default {
    data: () => ({
        password: null,
        privateKey: null,
        file: null,
    }),
    components: {
        RoundedButtonLg
    },

    mounted: function(){

        // initializing and appending the MetaMask Logo to its Div
        let metaMaskViewer = ModelViewer({
            pxNotRatio: true,
            width: 500,
            height: 400,
            follwoMouse: true,
            followMotion: true,
            // slowDrift: false
        });
        // console.log(this.$refs.metamask);
        this.$refs.metamask.appendChild(metaMaskViewer.container);
        metaMaskViewer.lookAt({
            x:100,
            y:100
        });
        // enable mouse follow
        // metaMaskViewer.setFollowMouse(true)

        // deallocate nicely
        // metaMaskViewer.stopAnimation()
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
                try {
                    self.$store.wallet = self.$store.getters.getWeb3.eth.accounts.decrypt(reader.result.toLowerCase(), self.password);
                    self.$router.push({name: 'dashboard'});
                } catch (error) {
                    alert(error.message);
                }
            }
            reader.readAsText(this.file);
        },
        
        onKeyStoreChange: function(event){
            this.file = event.target.files[0];
        },

        isValidPrivateKey: function(){
            let privateKey = null;
            try {
                if(this.privateKey.startsWith("0x")){
                    privateKey = this.privateKey.slice(2);
                }
                return secp256k1.privateKeyVerify(new Buffer(privateKey, 'hex'));
            } catch (error) {
                console.error(error);
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
    background: #135589;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px #135589;
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


.btn-change{
    -webkit-transition: all 0.5s ease-in-out;
}
.btn-change:hover:enabled{
    -webkit-transform: scale(1.05);
    /* background: #31708f; */
}
</style>

