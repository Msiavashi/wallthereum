<template>
<div class="aboutus-section mt-5" style="background-color: #EDFAFD" >
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-9 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text">Wallthereum is an open-source web application, free software that has been designed to be secure as your Ethereum private wallet. we designed Walltehreum in a way that everything happens just in your browser, no data would be send to any server but blockchain network so you can reliably unlock your wallet for transactions.</p>
                        <p class="aboutus-text">Wallet is just the beginning. As we first started Wallthereum with security in mind, we planned to develop a much complex trading ecosystem with support for web & mobile devices.</p>
                        <p class="aboutus-text">Have that in mind, we appreciate any contribution to make the system grow to be a leading secure platform for cryptocurrencies. Let's Join Us.</p>
                        <a class="grow aboutus-more" href="mailto:mohammad.siav@hotmail.com"> email us</a>
                        <span class="mx-2"></span>
                        <a class="grow aboutus-more" href="https://github.com/Msiavashi/wallthereum" target="_blank" rel="noopener noreferrer" > github</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div class="aboutus-banner">
                        <img src="@/assets/about-ethereum.png" style="min-width: 100%; min-height: 100%" class="img-fluid mt-5" alt="ethereum">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.1);
}

.aboutus-section {
    padding: 90px 0;
}
.aboutus-title {
    font-size: 30px;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0 0 39px;
    padding: 0 0 11px;
    position: relative;
    text-transform: uppercase;
    color: #000;
}
.aboutus-title::after {
    background: #135589 none repeat scroll 0 0;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 54px;
}
.aboutus-text {
    color: #606060;
    font-size: 13px;
    line-height: 22px;
    margin: 0 0 35px;
}

a:hover, a:active {
    color: #135589;
    text-decoration: none;
    outline: 0;
}
.aboutus-more {
    border: 1px solid #135589;
    border-radius: 25px;
    color: #135589;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    padding: 7px 20px;
    text-transform: uppercase;
}
</style>

