<template>
<div class="container">
    <div>
        <div class="heading-title text-center">
            <h3 class="text-uppercase">Team Members</h3>
            <p class="p-top-30 half-txt">"Alone we can do so little, together we can do so much." --Helen Kelle</p>
            <br>
            <p class="p-top-30 half-txt"><a href="https://github.com/Msiavashi/wallthereum" target="_blank" rel="noopener noreferrer"> Join the Team with Your Contribution</a></p>
        </div>

        <div class="row">
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="@/assets/mohammad.jpg" alt="team member" class="img-fluid">
                    </div>
                    <div class="team-hover desk">
                        <!-- <div class="desk"> -->
                            <h4>Mohammad Siavashi</h4>
                            <p>CEO and Founder <br> Mohammad is a Computer Engineering graduate from Shiraz University. Has brought 6+ years of software engineering and security experience to the project.</p>
                        <!-- </div> -->
                        <!-- <div class="s-link">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                        </div> -->
                    </div>
                </div>
                <div class="team-title">
                    <h5>Mohammad Siavashi</h5>
                    <span>Founder & CEO</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="@/assets/ahmad.jpg" alt="team member" class="img-fluid">
                    </div>
                    <div class="team-hover desk">
                        <!-- <div class="desk"> -->
                            <h4>Ahmad Siavashi</h4>
                            <p>CTO & Co-Founder<br>Ahmad is a Ph.D. student of Computer Engineering at Tehran Polytechnic. The project is in debt of his solid experience.</p>
                        <!-- </div> -->
                        <!-- <div class="s-link">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                        </div> -->
                    </div>
                </div>
                <div class="team-title">
                    <h5>Ahmad Siavashi</h5>
                    <span>CTO & Co-Founder</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="@/assets/khunjush.jpg" alt="team member" class="img-fluid">
                    </div>
                    <div class="team-hover desk">
                        <!-- <div class="desk"> -->
                            <h4>Dr. Farshad Khunjush</h4>
                            <p>Dr. Khunjush has a PhD from University of Victoria (CA). He is already associate professor of Shiraz University. We sincerely appreciate his valuable exprience in this project. </p>
                        <!-- </div> -->
                        <!-- <div class="s-link">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                        </div> -->
                    </div>
                </div>
                <div class="team-title">
                    <h5>Dr. Farshad Khunjush</h5>
                    <span>Project Advisor</span>

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

<style>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900,900italic);
body {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5;
    color: #323232;
    font-size: 15px;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}
.heading-title {
    margin-bottom: 100px;
}
.text-center {
    text-align: center;
}
.heading-title h3 {
    margin-bottom: 0;
    letter-spacing: 2px;
    font-weight: normal;
}
.p-top-30 {
    padding-top: 30px;
}
.half-txt {
    width: 60%;
    margin: 0 auto;
    display: inline-block;
    line-height: 25px;
    color: #7e7e7e;
}
.text-uppercase {
    text-transform: uppercase;
}

.team-member, .team-member .team-img {
    position: relative;
}
.team-member {
    overflow: hidden;
}
.team-member, .team-member .team-img {
    position: relative;
}

.team-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    border: 20px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.90);
    opacity: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.team-member:hover .team-hover .desk {
    top: 35%;
}
.team-member:hover .team-hover, .team-member:hover .team-hover .desk, .team-member:hover .team-hover .s-link {
    opacity: 1;
}
.team-hover .desk {
    position: absolute;
    top: 0%;
    width: 100%;
    opacity: 0;
    -webkit-transform: translateY(-55%);
    -ms-transform: translateY(-55%);
    transform: translateY(-55%);
    -webkit-transition: all 0.3s 0.2s;
    transition: all 0.3s 0.2s;
    padding: 0 20px;
}
.desk, .desk h4, .team-hover .s-link a {
    text-align: center;
    color: #222;
}
.team-member:hover .team-hover .s-link {
    bottom: 10%;
}
.team-member:hover .team-hover, .team-member:hover .team-hover .desk, .team-member:hover .team-hover .s-link {
    opacity: 1;
}
.team-hover .s-link {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
    text-align: center;
    -webkit-transform: translateY(45%);
    -ms-transform: translateY(45%);
    transform: translateY(45%);
    -webkit-transition: all 0.3s 0.2s;
    transition: all 0.3s 0.2s;
    font-size: 35px;
}
.desk, .desk h4, .team-hover .s-link a {
    text-align: center;
    color: #222;
}
.team-member .s-link a {
    margin: 0 10px;
    color: #333;
    font-size: 16px;
}
.team-title {
    position: static;
    padding: 20px 0;
    display: inline-block;
    letter-spacing: 2px;
    width: 100%;
}
.team-title h5 {
    margin-bottom: 0px;
    display: block;
    text-transform: uppercase;
}
.team-title span {
    font-size: 12px;
    text-transform: uppercase;
    color: #a5a5a5;
    letter-spacing: 1px;
}

</style>


