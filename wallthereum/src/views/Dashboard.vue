<template>
<div class="" id="background-container" style="background: linear-gradient(60deg,#ab47bc,#7b1fa2)">
    <div class="" style="width: 100%">
        <div>
            <!-- Tabs on Plain Card -->
            <div class="card card-nav-tabs card-plain">
                <div class="card-header card-header-danger">
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
                </div><div class="card-body ">
                    <div class="tab-content text-center">
                        <div class="tab-pane active" id="home">
                            <div class="d-flex row flex-wrap justify-content-center">
                                <div class="col-md-8 col-sm-12 mr-sm-3 rounded shadow-lg order-3 order-md-1 bg-white">
                                    <div class="container py-3 input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Receiver Address</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="0x051438f6b33e0a5acf8686754c3d582ceb01dc5be10a0e8f605d23a17ed99930">
                                    </div>

                                    <div class="container input-group mb-3" id="amount-field">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Amount</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Enter the amount you want to transfer" aria-label="amount" aria-describedby="basic-addon1">
                                        <div class="input-group-append">
                                            <span class="input-group-text">ETH</span>
                                        </div>
                                    </div>
                                    <div class="container input-group mb-3" id="amount-field">
                                        <div class="input-group-prepend">
                                            <button type="button" data-placement="right" data-container="body" class="btn btn-warning input-group-text" data-toggle="popover" title="Gas limit" data-content="You can see your TX fee (gas limit * gas price) in ETH & USD when you search for your transaction on etherscan.io. This is not a TX fee that MyEtherWallet, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain." id="basic-addon1"><i class="material-icons"> info </i></button>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Gas limit" aria-label="gas-limit" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 rounded shadow-lg order-1 order-md-3 bg-white">
                                    goodbye
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
</div>
</template>


<script>
export default {
    components: {
        
    }
}
</script>

<style scoped>

@media (min-width: 0px) {
    #background-container{
        padding-top: 20%;
        height: 100vh;
    }
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
    #background-container{
        padding-top: 6%;
        height: 100vh;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    #background-container{
        padding-top: 16%;
        height: 100vh;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    #background-container{
        padding-top: 6%;
        height: 100vh;
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
        height: 100vh;
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
</style>



