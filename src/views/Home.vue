<template>
    <div class="container-fluid body">
        <div class="wave d-flex flex-wrap">
            <div class="d-flex row  col-sm-6" style="margin:0px; padding: 0px">
                <div class="row align-self-center" style="z-index: 2; margin: auto">
                    <!-- <h3 class="h3 mt-5 text-white text-center align-self-center"> join the future of trading </h3> -->
                    <div class="input-group mb-3" id="password-group">
                        <input type="password" @keyup.enter="createWallet" v-model="$store.password" class="form-control shadow" placeholder="Enter a password" aria-label="password" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <!-- <button data-toggle="modal" data-target="#tutorial" id="create" class="btn bg-success text-white shadow border" type="button">Create Wallet</button> -->
                            <button @click="createWallet" id="create" class="btn bg-success text-white shadow border" type="button">Create Wallet</button>
                        </div>
                        </div>
                    </div>
                <div class="align-content-center container-fluid text-center" style="z-index:2">
                    <button type="button" @click="onGettingStartedClicked()" class="btn-change text-white btn btn-round-lg btn-lg shadow" style="background: rgb(91,50,180)">Getting started</button>
                    <span class="mx-1"></span>
                    <button @click="changeRoute('dashboard')" type="button" class="btn-change text-white btn btn-round-lg btn-lg align-self-center shadow" style="background: rgb(86,158,148)">Already have a wallet?</button>
                </div>
            </div>
            <div class="container d-flex justify-content-center col-sm-6 banner" style="">
                <img src='@/assets/logo.png' class="align-self-center img-fluid" style="">
            <!-- <h1> Keep Your Coins Safe </h1> -->
            </div>
            <svg id='sine' viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.35,129.77 C149.99,150.00 399.04,103.13 526.60,145.55 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg>
        </div>
        <!-- header end -->

        <!-- <div class="mt-5 pt-5">&nbsp;</div> -->

        <!-- content start -->
        <div class="container">

            <div>
                <h2 class="h2 text-center mt-5"> Join the Future Now </h2>
                
                <div class="text-center m-5">
                    <app-store-button></app-store-button>
                    <span class="m-3"></span>
                    <play-store-button></play-store-button>
                </div>

                <h5 class="p text-center font-italic font-weight-light text-body text-black-50">
                    Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions.
                </h5>

                <!-- feature boxes -->
                <div class="d-flex row flex-wrap my-5 justify-content-center">
                    <div class="col-lg-4 col-md-4 col-xs-4 d-flex row justify-content-center">
                        <div class="d-flex row justify-content-center px-3">
                            <div class="hexagon security-hexagon d-flex row justify-content-center grow">
                                <div class="hexTop"></div>
                                <div class="hexBottom"></div>
                            </div>
                            <div class="container text-center">
                                <h5 class="headline h5 py-3"> Secure </h5>
                            </div>
                            <div class="container text-center text-wrap">
                                <p class="h6 text-black-50"> Everything happens within your browser. We store or send nothing to our servers.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-xs-4 d-flex row justify-content-center">
                        
                        <div class="d-flex row justify-content-center px-3">
                            <div class="hexagon dashboard-hexagon grow">
                                <div class="hexTop"></div>
                                <div class="hexBottom"></div>
                            </div>
                            <div class="container text-center">
                                <h5 class="headline h5 py-3"> Easy Access </h5>
                            </div>
                            <div class="container text-center text-wrap">
                                <p class="h6 text-black-50"> A user friendly and butterly smooth interface that enables you to create and connect to your wallet within just a few seconds from any device. </p>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-xs-4 d-flex row justify-content-center">
                        <div class="d-flex row justify-content-center px-3">
                            <div class="hexagon mobile-hexagon grow">
                                <div class="hexTop"></div>
                                <div class="hexBottom"></div>
                            </div>

                            <div class="container text-center">
                                <h5 class="headline h5 pt-3"> Mobile Application </h5><p class="text-success">Android Available</p>
                            </div>
                            <div class="container text-center text-wrap">
                                <p class="h6 text-black-50"> You can think of Wallthereum Android as a completely secure, hermetic environment, which uses hybrid encryption to store your key files.</p>
                                <p class="text-warning">IOS Application will be available soon</p>
                            </div>

                        </div>
                    </div>

                </div>
                <!-- feature boxes -->

                <!-- user guideline -->
                <div id="guideline">
                    <user-guide></user-guide>
                </div>
                <!-- end of user guideline -->

                <!-- team memebrs -->
                <div id="team" class="mt-5">
                    <team-members></team-members>
                </div>
                <!-- end of team members -->
            </div>

        </div>


        <tutorial-modal style="z-index: 10000"></tutorial-modal>

    </div>

</template>


<style scoped>

@media (min-width: 768px) {

}

@media (min-width: 1200px) {
}
@media (min-width: 992px) {
    
    .banner {
        position: relative;
        overflow: visible;
        z-index: 2;
        top: 50px;
    }
}

@media (min-width: 576px) {
    
    .banner {
        position: relative;
        overflow: visible;
        z-index: 20;
        top: 50px;
    }

}

@media (min-width: 0) {
    
    .banner {
        position: relative;
        overflow: visible;
        z-index: 20;
        top: 50px;
    }

    #password-group{
        margin-top: 80px;
    }
}

.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.1);
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


.btn-change{
    -webkit-transition: all 0.5s ease-in-out;
}
.btn-change:hover:enabled{
    -webkit-transform: scale(1.1);
    background: #31708f;
}

.wave {
    position: relative;
    width: 100%;
    height: 100vh;
    /* background-image:  url("http://majesticengineering.com.my/wp-content/uploads/2016/01/background-1.jpg"); */
    background: #2A93D5;

}

.body {
    margin: 0%;
    padding: 0%;
}

#sine {
    position: absolute;
    bottom: 0;
}

.mobile-hexagon {
  background-image: url('~@/assets/mobile.jpg');
}

.security-hexagon {
  background-image: url('~@/assets/security.jpg');
}

.dashboard-hexagon {
  background-image: url('~@/assets/access.jpg');
}

.hexagon {
  position: relative;
  width: 200px; 
  height: 115.47px;
  margin: 57.74px 0;
  background-size: auto 230.9401px;
  background-position: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.hexTop,
.hexBottom {
  position: absolute;
  z-index: 1;
  width: 141.42px;
  height: 141.42px;
  overflow: hidden;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background: inherit;
  left: 29.29px;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

/*counter transform the bg image on the caps*/
.hexTop:after,
.hexBottom:after {
  content: "";
  position: absolute;
  width: 200.0000px;
  height: 115.47005383792516px;
  -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-57.7350px);
  -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-57.7350px);
  transform:          rotate(45deg) scaleY(1.7321) translateY(-57.7350px);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: inherit;
}

.hexTop {
  top: -70.7107px;
}

.hexTop:after {
  background-position: center top;
}

.hexBottom {
  bottom: -70.7107px;
}

.hexBottom:after {
  background-position: center bottom;
}

.hexagon:after {
  content: "";
  position: absolute;
  top: 0.0000px;
  left: 0;
  width: 200.0000px;
  height: 115.4701px;
  z-index: 2;
  background: inherit;
}
</style>

<script>
import TutorialModal from '@/components/TutorialModal';
import UserGuide from '@/components/UserGuide';
import TeamMembers from '@/components/TeamMembers';
import {mapState} from 'vuex';
import PlayStoreButton from '@/components/PlayStoreButton';
import AppStoreButton from '@/components/AppStoreButton';
export default {
    computed: {
        password: {
            get() {
                return this.$store.password;
            },

            set(value) {
                this.$store.commit("PASSWORD", value);
            }
        }
    },

    components: {
        TutorialModal,
        UserGuide,
        TeamMembers,
        PlayStoreButton,
        AppStoreButton
    },

    methods: {

        onGettingStartedClicked: function(){
            $('html,body').animate({
                    scrollTop: $("#guideline").offset().top},
                    'slow');
        },

        changeRoute: function(routeName) {
            return this.$router.push({name: routeName});
        },
        createWallet: function(){
            if (this.$store.password != null && this.$store.password != ''){
                $('#tutorial').modal('show');
            }else{
                alert("no password provided");
            }
        }
    }
}
</script>
