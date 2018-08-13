<template>
<div class="py-sm-5 pt-5 background-style d-flex row align-content-center">
    <div class="container shadow-lg mt-5 rounded" style="background-color: white">
        <div class="row">
            <div class="col-md-12 text-center ">
                <nav class="nav-justified ">
                  <div class="nav nav-tabs " id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Keystore File</a>
                    <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Wallet Address</a>
                    <a class="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3" role="tab" aria-controls="pop3" aria-selected="false"></a>
                    
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
                        <div class="pt-3"></div>
                        <!-- key store tab -->
                          <div>
                            <h3 class="h3 text-info"> Keystore </h3>
                            <h4 class="h4 text-danger">* Save your Keystore file *</h4>
                          </div>
                          <div class="align-self-md-center" style="margin-top: 10%;">
                            <button type="button" class="btn btn-round-lg btn-lg btn-change text-white bg-success shadow-lg" href="!#"> Download Keystore File </button>
                          </div>
                          <div class="container">
                              <h6 class="h5 mt-5 text-danger"> **Do not lose it!** It cannot be recovered if you lose it. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site. </h6>
                              <h6 class="h5 mt-2 text-danger"> **Make a backup!** Secure it like the millions of dollars it may one day be worth. </h6>
                          </div>

                          <div class="container pt-sm-5">
                            <button type="button" class="float-right btn btn-round bg-primary text-white btn-change"> Continue </button>
                          </div>
                        <!-- key store tab end -->
                        </div>
                  <div class="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                       <div class="pt-3"></div>
                        <p>2. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.

Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:
                        </p>
                      
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
    border-bottom:3px solid #8f94fb;
    border-right: none;
    border-left: none;
    border-top: none;
    height: 50%;
}

.background-style{
  background: #11998e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
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



</style>

<script>
export default {
  
}
</script>

