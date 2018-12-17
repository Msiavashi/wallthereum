<template>
<div class="" id="background-container" style="background: rgb(245, 245, 245); padding-top: 80px;">
    <div class="" style="width: 100%; height: 100%">
        <div>
            <!-- Tabs on Plain Card -->
            <div class="card card-nav-tabs card-plain">
                <div class="card-header card-header-primary">
                    <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                    <div class="nav-tabs-navigation">
                        <div class="nav-tabs-wrapper">
                            <ul class="nav nav-tabs justify-content-center" data-tabs="tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#home" data-toggle="tab">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#updates" data-toggle="tab">Updates</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#history" data-toggle="tab">Transactions History</a>
                               </li>
                            </ul>
                        </div>
                    </div>
                </div><div class="card-body">
                
                <div class="container" v-show="txnAlert" id="txnAlert">
                    <!-- start of transaction success alert -->
                    <div class="alert alert-success" role="alert" v-if="txnSuccess">
                        <h4 class="alert-heading">Transaction Sent</h4>
                        <p>Congradulations. Your Transaction has been successfully broadcasted to the ethereum blockchain network.
                            <br>
                            To track your transaction status on <a href="https://etherscan.io" rel="noopener noreferrer" target="_blank">etherscan.io</a> please click the link below.
                            <br>
                            <a target="_blank" rel="noopener noreferrer" :href="''+$store.getters.getWeb3.currentProvider.network.etherscanAddressTx+''+txnHash+''">Transaction Status</a>
                        </p>
                        <hr>
                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                    <!-- end of transaction success alert -->
                    
                    <!-- start of transaction failure alert -->
                    <div class="alert alert-danger" role="alert" v-else>
                        <h4 class="alert-heading">Ooooops...!</h4>
                        <p>
                            An error happened during Transaction. please read the error below carefully to resolve the problem.
                        </p>
                        <hr>
                        <p class="mb-0">{{txnError.message}}</p>
                    </div>
                    <!-- end of transaction failure alert -->
                </div>


                    <div class="tab-content text-center">
                        <div class="tab-pane active" id="home">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Wallet Address</h5>
                                        <p class="card-text">{{$store.wallet.address}}</p>
                                        <a href="#" class="btn btn-info">Read More</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Account Balance</h5>
                                        <p class="card-text">{{balance}} ETH</p>
                                        <a href="#" class="btn btn-info">Read More</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Gas Price</h5>
                                        <p class="card-text">{{gasPrice}} Gwei</p>
                                        <a href="#" class="btn btn-info">Read More</a>
                                    </div>
                                    </div>
                                </div>
                                <!-- <div class="col-sm-3">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Network</h5>
                                        <div class="dropdown show">
                                        <p class="card-text">Status: {{networkStatus}}</p>
                                        <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        </a>

                                        </div>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                    </div>
                                </div> -->
                            </div>

                            <div class="d-flex row flex-wrap justify-content-center">
                                <div class="col-md-9 col-sm-12 rounded shadow-lg bg-white">
                                    <div class="float-left container py-3 input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Receiver Address</span>
                                        </div>
                                        <input type="text" v-model="receiverAddress" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="0x051438f6b33e0a5acf8686754c3d582ceb01dc5be10a0e8f605d23a17ed99930">
                                    </div>

                                    <div class="container input-group mb-3" id="amount-field">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Amount</span>
                                        </div>
                                        <input type="text" class="form-control" v-model="transferAmount" placeholder="Enter the amount you want to transfer" aria-label="amount" aria-describedby="basic-addon1">
                                        <div class="input-group-append">
                                            <span class="input-group-text">ETH</span>
                                        </div>
                                    </div>
                                    <div class="container input-group mb-3" id="amount-field">
                                        <div class="input-group-prepend">
                                            <button type="button" data-placement="right" data-container="body" class="btn btn-warning input-group-text" data-toggle="popover" title="Gas limit" data-content="You can see your TX fee (gas limit * gas price) in ETH & USD when you search for your transaction on etherscan.io. This is not a TX fee that MyEtherWallet, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain." id="basic-addon1"><i class="material-icons"> info </i></button>
                                        </div>
                                        <input type="text" class="form-control" v-model="transferGasLimit" placeholder="Gas limit" aria-label="gas-limit" aria-describedby="basic-addon1">
                                    </div>
                                    <!-- <rounded-button-lg data-modal="modal" data-target="#confirmationModal" style="width: 100%" class="btn-success mb-3" v-bind:text="'Send Transaction'"></rounded-button-lg> -->
                                    <button type="button" @click="onConfirmClicked()" class="btn btn-primary" data-toggle="modal" style="width: 100%" data-target="#transactionConfirmationModal">
                                        Send Transaction
                                    </button>

                                </div>
                           </div>
                        </div>
                        <div class="tab-pane" id="updates">
                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                        </div>
                        <div class="tab-pane" id="history">
                            <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                        </div>
                    </div>
                </div></div>
            <!-- End Tabs on plain Card -->
            </div>
        </div>

    <!-- transaction confirmaiton modal-->
        <div class="modal fade" id="transactionConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Send Transaction</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Sender And Receiver Information -->
                <h5 class="heading">Sender & Receiver</h5>
                <hr>
                <div class="row justify-content-center mx-auto">
                    <div class="col-4 text-center">
                        <h4 class="h4 title" >Sender Address</h4>
                        <p style="word-wrap: break-word">{{$store.wallet.address}}</p>
                    </div>
                    <div class="col-4 text-center">
                        <h4 class="h4 title" >Transfer Amount</h4>
                        <p style="word-wrap: break-word"> {{transferAmount}} </p>
                    </div>
                    <div class="col-4 text-center">
                        <h4 class="h4 title" >Receiver Address</h4>
                        <p style="word-wrap: break-word">{{receiverAddress}}</p>
                    </div>
                </div>
                <!-- End of Sender And Receiver Information -->
                <hr>
                <div class="container-fluid row">
                    <!-- Sign Transaction Hash Section -->
                    <div class="row container-fluid">
                        <div class="col-md-6">
                            <h6 class="h6">Raw Transaction</h6>
                            <textarea readonly disabled class="m-auto" rows="5" style="width: 100%" v-text="rawTransaction"></textarea>
                        </div>
                        <div class="col-md-6">
                            <h6 class="h6">Signed Transaction</h6>
                            <textarea readonly disabled class="m-auto" rows="5" style="width: 100%" v-text="signedTransaction"></textarea>
                        </div>
                    </div>
                    <!-- end of Sign Transaction Hash Section -->
                </div>
                <hr>
                <!-- transaction table start -->
                <div class="container-fluid row">
                    <h5 class="h5 title"> Transaction Information </h5>
                    <table class="table table-hover">
                    <tbody>
                        <tr>
                        <th scope="row">Receiver Address</th>
                        <td>{{receiverAddress}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Sender Address</th>
                        <td>{{$store.wallet.address}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Transfer Amount</th>
                        <td colspan="2">{{transferAmount}} ETH</td>
                        </tr>
                        <tr>
                        <th scope="row">Account Balance</th>
                        <td colspan="2">{{balance}} ETH</td>
                        </tr>
                        <tr>
                        <th scope="row">Network</th>
                        <td colspan="2">{{network}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Gas Limit</th>
                        <td colspan="2">{{transferGasLimit}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Gas Price</th>
                        <td colspan="2">{{gasPrice}} Gwei</td>
                        </tr>
                        <tr>
                        <th scope="row">Max Transaction Fee</th>
                        <td colspan="2">{{txnFee}} ETH</td>
                        </tr>
                        <!-- <tr>
                        <th scope="row">Nonce</th>
                        <td colspan="2">{{txnCount}}</td>
                        </tr> -->
                    </tbody>
                    </table>
                </div>
                <!-- transaction table end -->

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Abort</button>
                <button type="button" class="btn btn-primary" @click="sendTransaction()">Send</button>
            </div>
            </div>
        </div>
        </div>


</div>
</template>


<script>
import RoundedButtonLg from '@/components/RoundedButtonLg';
import EthereumTx from 'ethereumjs-tx';
import NetworkManager from '@/NetworkManager';

var Web3 = require('web3');
// var Ethers = require('ethers');``
export default {
    components: {
        RoundedButtonLg
    },
    data(){
        return {
            txnError: false,
            txnAlert: false,
            txnSuccess: false,
            rawTransaction: null,
            signedTransaction: null,
            balance: null,
            gasPrice: null,
            networkStatus: "CONNECTED",
            receiverAddress: null,
            transferAmount: null,
            transferGasLimit: 21000,
            txnFee: null,
            txnHash: null
        }
    },

    computed: {
        network() {
            return this.$store.getters.getWeb3.currentProvider.network.name;
        }
    },

    methods: {
        // "nonce": this.$store.state.web3.utils.toHex(txnCount),
        getRawTransaction: function(){
            const txnCount = this.$store.state.web3.eth.getTransactionCount(this.$store.wallet.address);
            return {
                "from": this.$store.wallet.address,
                "gasPrice": this.$store.state.web3.utils.toHex(this.$store.state.web3.utils.toWei(this.gasPrice, "Gwei")),
                "gasLimit": this.$store.state.web3.utils.toHex(this.transferGasLimit),
                "to": this.receiverAddress.toUpperCase(),
                "value": this.$store.state.web3.utils.toHex(this.$store.state.web3.utils.toWei(this.transferAmount, "ether")),
                "data": '',
                "chainId": this.$store.getters.getWeb3.currentProvider.network.chainId
            }
        },

        onConfirmClicked: function(){
            const rawTxn = this.getRawTransaction();
            let self = this;

            // calculate txn fee
            const txnFeeWei = this.$store.state.web3.utils.toWei(this.gasPrice, "Gwei") * this.transferGasLimit;
            this.txnFee = this.$store.state.web3.utils.fromWei(this.$store.state.web3.utils.toBN(txnFeeWei.toString()), 'ether');
            console.log(this.txnFee);

            this.$store.wallet.signTransaction(rawTxn)
                .then(signedTx => {
                    self.signedTransaction = signedTx;
                    self.rawTransaction = rawTxn;
                }).catch(err => {
                    console.error(err);
                })
        },

        sendTransaction: function(){
            const rawTxn = this.getRawTransaction();
            let choice = confirm("are you sure you want to send the Transaction ?");
            let self = this;
            if (choice){
                this.$store.wallet.signTransaction(rawTxn)
                    .then(signedTx => {
                        this.$store.state.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                            .on('transactionHash', (hash)=> {
                                console.log("hash");
                                console.log(hash);
                                self.txnHash = hash;
                                self.txnSuccess = true;
                                self.txnAlert = true;
                                $("#transactionConfirmationModal").modal('hide');
                                $('html,body').animate({
                                        scrollTop: $("#txnAlert").offset().top},
                                        'slow');
                            })
                            .on('receipt', (receipt) => {
                                console.log("receipt");
                            })
                            .on('confirmation', (confirmationNumber, receipt) => {
                                console.log("confirmation");
                                console.log(confirmationNumber);
                                console.log(receipt);
                            })
                            .on('error', (error) => {
                                console.error(error);
                                self.txnSuccess = false;
                                self.txnError = error;
                                self.txnAlert = true;
                                console.log("error");
                                console.log(error.message);
                                $("#transactionConfirmationModal").modal('hide');
                                $('html,body').animate({
                                        scrollTop: $("#txnAlert").offset().top},
                                        'slow');
                            });

                    }).catch(error => {
                        console.error(error);
                    });
            }
        }
    },
    created: function(){
        this.$parent.$refs.loading.isLoading = true;

        this.$store.state.web3.eth.getBalance(this.$store.wallet.address)
            .then(data => {
                this.balance = this.$store.state.web3.utils.fromWei(data, "ether");
                this.$parent.$refs.loading.isLoading =  this.gasPrice && this.balance && false;
            })
            .catch(console.error);

        this.$store.state.web3.eth.getGasPrice()
            .then(data => {
                this.gasPrice = this.$store.state.web3.utils.fromWei(data, "Gwei");
                this.$parent.$refs.loading.isLoading = this.gasPrice && this.balance && false;
            })
            .catch(console.error);
        

    }
}
</script>

<style scoped>

@media (min-width: 0px) {
    #background-container{
        /* padding-top: 20%; */
        min-height: 100vh;
    }
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
    #background-container{
        padding-top: 6%;
        min-height: 100vh;
    }
    
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    #background-container{
        padding-top: 16%;
        min-height: 100vh;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    #background-container{
        padding-top: 6%;
        min-height: 100vh;
    }

    #amount-field {
        float: left;
        width: 70%;
    }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    #background-container{
        padding-top: 6%;
        min-height: 100vh;
    }

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

#submit-button {
    /* width: 100%; */
}
</style>