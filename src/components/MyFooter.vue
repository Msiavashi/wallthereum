<template>
    
<!-- Footer -->
	<section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<h5 class="h5 font-italic font-weight-bold"> What is Wallthereum?</h5>
					<div>
						<h6 class="h6 font-italic"> wallthereum is secure, open-source and client-side wallet for ethereum. we are developing the platform real fast to be able to support more features based on blockchain network and provide you easier ways to interact with blockchain with highest degrees of security. out secure mobile application would be the next step and would be available soon.</h6>
					</div>
					<ul class="list-unstyled quick-links">
						<li><a href="https://www.ethereum.org/"><i class="fa fa-angle-double-right"></i>ethereum project</a></li>
						<li><a href="https://etherscan.io/"><i class="fa fa-angle-double-right"></i>etherscan</a></li>
						<li><a href="https://infura.io/"><i class="fa fa-angle-double-right"></i>infura</a></li>
						<li><a href="https://web3js.readthedocs.io/en/1.0/getting-started.html"><i class="fa fa-angle-double-right"></i>powered by web3</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6">
					<h5 class="font-italic font-weight-bold">Help us Grow</h5>
					<div>
						<h6 class="h6 font-italic">if you are a developer the walltehreum is open source. so please consider helping the platfom grow with your contribution
						<br>
						if you are not, please consider sharing the address below everywhere in internet.
						<br>
						<br>
						by the way... we always appreciate your donation: <br> <span class="font-weight-bold"> ETH (mainnet): </span> 0x30F0f68e47349D14a3dbeb1d7942999168d00B8f</h6>

					</div>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-envelope"></i>support email: support@wallthereum.com</a></li>
						<li><a href="javascript:void();"><i class="fa fa-github"></i>github</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<!-- <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li> -->
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-github"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<!-- <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li> -->
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<!-- <p><u><a href="https://www.wallthereum.com/">Wallthereum Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p> -->
					<p class="h6" style="color: black">&copy All right Reversed.<a class="font-weight-bold text-green ml-2" href="http://www.wallthereum.com" target="_blank">Wallthereum</a></p>
				</div>
			</div>	
		</div>
	</section>
	<!-- ./Footer -->
</template>


<script>
export default {
    
}
</script>

<style scoped>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');


.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.1);
}

section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #135589;
    /* margin-bottom: 50px; */
    text-transform: uppercase;
}
#footer {
	background: #EDFAFD;
	border-top: 5px solid #135589;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #135589;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#135589;
}
#footer a {
    color: #135589;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .2s all ease;
	-moz-transition: .2s all ease;
	transition: .2s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color: #135589;
}
#footer ul.social li a:hover{
	color: #135589;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .2s all ease;
	-moz-transition: .2s all ease;
	transition: .2s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
		#footer h5 {
		padding-left: 0;
		border-left: transparent;
		padding-bottom: 0px;
		margin-bottom: 10px;
	}
}

</style>


