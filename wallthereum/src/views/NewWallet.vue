<template>
<div class="" style="padding-top: 100px; padding-bottom: 50px; background-color: rgb(245, 245, 245);">
    <div class="container shadow-lg mt-5 rounded" id="tabs-container">
        <div class="d-flex row">
            <div class="col-md-12 text-center ">
                <nav class="nav-justified">
                  <div class="nav nav-tabs " id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Keystore File</a>
                    <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Private Key</a>
                    <!-- <a class="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3" role="tab" aria-controls="pop3" aria-selected="false">Private Key</a> -->
                    
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
                        <div class="pt-3"></div>
                        <!-- key store tab start -->

                          <div>
                            <h3 class="h3 text-info"> Keystore </h3>
                            <h4 class="h4 text-danger">* Save your Keystore file *</h4>
                          </div>
                          <div class="align-self-md-center" style="margin-top: 10%;">
                            <button type="button" @click="downloadKeystore" class="btn btn-change text-white bg-success shadow-lg"> Download Keystore File </button>
                          </div>
                          <div class="container">
                              <h6 class="h5 mt-5 text-danger"> **Do not lose it!** It cannot be recovered if you lose it. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Make a backup!** Secure it like the millions of dollars it may one day be worth. </h6>
                          </div>

                        <!-- key store tab end -->
                        </div>
                  <div class="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                      <!-- private key tab start -->
                        <div class="pt-3"></div>
                        <!-- key store tab -->
                          <div>
                            <h3 class="h3 text-info"> Private Key </h3>
                            <h4 class="h4 text-danger">* Save your Private Key *</h4>
                          </div>
                            <div class="input-group container">
                              <div class="input-group-prepend">
                                <span class="input-group-text text-danger">Private Key</span>
                              </div>
                              <textarea readonly class="form-control text-center" aria-label="private kye" v-text="$store.state.wallet.privateKey"></textarea>
                            </div>
                          <div class="container">
                              <h6 class="h5 mt-5 text-danger"> **Do not lose it!** It cannot be recovered if you lose it. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Make a backup!** Secure it like the millions of dollars it may one day be worth. </h6>
                          </div>

                          <div class="align-self-md-center" style="margin-top: 5%; margin-bottom:5%;">
                            <button type="button" class="btn btn-change text-white bg-info shadow-lg"> Print Wallet Information </button>
                          </div>

                      <!-- private key tab end -->
                  </div>
                  <div class="tab-pane fade" id="pop3" role="tabpanel" aria-labelledby="pop3-tab">
                       <div class="pt-3"></div>
                        <p>3. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.

Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:
                        </p>
                  </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>


<style scoped>
.nav-tabs .nav-link.active {
    font-weight:bold;
    background-color: transparent;
    border-bottom:3px solid purple;
    border-right: none;
    border-left: none;
    border-top: none;
    height: 50%;
}


.btn-change{
    -webkit-transition: all 0.5s ease-in-out;
}
.btn-change:hover{
    -webkit-transform: scale(1.1);
    background: #31708f;
}


.btn-round-lg{
border-radius: 22.5px;
}
.btn-round{
border-radius: 17px;
}
.btn-round-sm{
border-radius: 15px;
}
.btn-round-xs{
border-radius: 11px;
padding-left: 10px;
padding-right: 10px;
}

#tabs-container{
  border-top: 5px solid purple;
  background-color: white;
}

</style>

<script>
export default {
  data: () => ({
    privateKey: "f3fa8f77d820cffd4f2d03451488daece4d43ce7c56d1ed30e0cd5ccb7354789"
  }),

  beforeMount: function(){

  },

  methods: {
    download: (filename, text) => {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

     element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },

    downloadKeystore: function(){
      let keystoreJsonV3 = this.$store.state.web3.eth.accounts.encrypt(this.$store.state.wallet.privateKey, this.$store.password);
      this.download(keystoreJsonV3.address, JSON.stringify(keystoreJsonV3));
    }
  }

}
</script>
