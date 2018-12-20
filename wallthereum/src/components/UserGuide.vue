<template>
<div class="container">
            <h4 class="text-center font-weight-bold font-italic mb-5">Getting Started</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline5">
                        <div class="timeline">
                            <div class="timeline-icon"><span class="step">Create</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Create new Wallet</h3>
                                <p class="description">
                                    The very first step to enter ethereum blockchain world is to create your own wallet.
                                    Click on Create circle to create your own wallet now.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="step">Store</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Keep Your Wallet Safe</h3>
                                <p class="description">
                                    Do Not Lose Your Private Key.
                                    The private key is needed to sign the transactions for transfer function ERC20 standard. losing it means losing your fund.<br>
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="step">Connect</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Connect To Blockchain</h3>
                                <p class="description">
                                    Use your dashboard to connect to your wallet.<br>
                                    You can choose among provided methods to access your wallet.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="step">Done !</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Send & Receive</h3>
                                <p class="description">
                                    Now that you have access to your wallet you can easily do your Transaction.
                                    Please do not forget to choose your network from toolbar.
                                </p>
                            </div>
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


.btn-change{
    -webkit-transition: all 0.5s ease-in-out;
}
.btn-change:hover:enabled{
    -webkit-transform: scale(1.5);
    background: #31708f;
}

.main-timeline5{overflow:hidden;position:relative}
.main-timeline5 .timeline{position:relative;margin-top:-79px}
.main-timeline5 .timeline:first-child{margin-top:0}
.main-timeline5 .timeline-icon,.main-timeline5 .step{margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}
.main-timeline5 .timeline:after,.main-timeline5 .timeline:before{content:"";display:block;width:100%;clear:both}
.main-timeline5 .timeline:before{content:"";width:100%;height:100%;box-shadow:-8px 0 5px -5px rgba(0,0,0,.5) inset;position:absolute;top:0;right:0;z-index:2}
.main-timeline5 .timeline-icon{width:210px;height:210px;border-radius:50%;border:25px solid transparent;border-top-color:#f44556;border-right-color:#f44556;z-index:1;transform:rotate(45deg)}
.main-timeline5 .step{display:block;width:110px;height:110px;line-height:110px;border-radius:50%;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.4);font-size:30px;font-weight:700;color:#f44556;text-align:center;transform:rotate(-45deg)}
.main-timeline5 .timeline-content{width:35%;float:right;background:#f44556;padding:30px 20px;margin:50px 0;z-index:1;position:relative}
.main-timeline5 .timeline-content:before{content:"";width:20%;height:15px;background:#f44556;position:absolute;top:50%;left:-20%;z-index:-1;transform:translateY(-50%)}
.main-timeline5 .title{font-size:20px;font-weight:700;color:#fff;margin:0 0 10px}
.main-timeline5 .description{font-size:16px;color:#fff;line-height:24px;margin:0}
.main-timeline5 .timeline:nth-child(2n):before{box-shadow:8px 0 5px -5px rgba(0,0,0,.5) inset}
.main-timeline5 .timeline:nth-child(2n) .timeline-icon{transform:rotate(-135deg);border-top-color:#e97e2e;border-right-color:#e97e2e}
.main-timeline5 .timeline:nth-child(2n) .step{transform:rotate(135deg);color:#e97e2e}
.main-timeline5 .timeline:nth-child(2n) .timeline-content{float:left}
.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{left:auto;right:-20%}
.main-timeline5 .timeline:nth-child(2n) .timeline-content,.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{background:#e97e2e}
.main-timeline5 .timeline:nth-child(3n) .timeline-icon{border-top-color:#13afae;border-right-color:#13afae}
.main-timeline5 .timeline:nth-child(3n) .step{color:#13afae}
.main-timeline5 .timeline:nth-child(3n) .timeline-content,.main-timeline5 .timeline:nth-child(3n) .timeline-content:before{background:#13afae}
.main-timeline5 .timeline:nth-child(4n) .timeline-icon{border-top-color:#105572;border-right-color:#105572}
.main-timeline5 .timeline:nth-child(4n) .step{color:#105572}
.main-timeline5 .timeline:nth-child(4n) .timeline-content,.main-timeline5 .timeline:nth-child(4n) .timeline-content:before{background:#105572}
@media only screen and (max-width:1199px){.main-timeline5 .timeline{margin-top:-103px}
.main-timeline5 .timeline-content:before{left:-18%}
.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{right:-18%}
}
@media only screen and (max-width:990px){.main-timeline5 .timeline{margin-top:-127px}
.main-timeline5 .timeline-content:before{left:-2%}
.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{right:-2%}
}
@media only screen and (max-width:767px){.main-timeline5 .timeline{margin-top:0;overflow:hidden}
.main-timeline5 .timeline:before,.main-timeline5 .timeline:nth-child(2n):before{box-shadow:none}
.main-timeline5 .timeline-icon,.main-timeline5 .timeline:nth-child(2n) .timeline-icon{margin-top:-30px;margin-bottom:20px;position:relative;transform:rotate(135deg)}
.main-timeline5 .timeline:nth-child(2n) .step,.main-timeline5 .step{transform:rotate(-135deg)}
.main-timeline5 .timeline-content,.main-timeline5 .timeline:nth-child(2n) .timeline-content{width:100%;float:none;border-radius:0 0 20px 20px;text-align:center;padding:25px 20px;margin:0 auto}
.main-timeline5 .timeline-content:before,.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{width:15px;height:25px;position:absolute;top:-22px;left:50%;z-index:-1;transform:translate(-50%,0)}
}

</style>

