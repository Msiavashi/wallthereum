<template>

    <div class="container-fluid body">

        <div class="wave d-flex">
            <div class="container d-flex row justify-content-center col-sm-6">
                <div class="align-content-center d-flex flex-wrap">
                <button type="button" class="btn-change text-white btn btn-round-lg btn-lg align-self-center shadow" style="background: rgb(91,50,180)">why us ?</button>
                <span class="mx-1"></span>
                <button @click="changeRoute('newWallet')" type="button" class="btn-change text-white btn btn-round-lg btn-lg align-self-center shadow" style="background: rgb(86,158,148)">&nbsp&nbsp&nbsp&nbsp create wallet &nbsp&nbsp&nbsp&nbsp</button>
                </div>
            </div>
            <div class="container d-flex justify-content-center col-sm-6">
                <img src='https://avatars.mds.yandex.net/get-pdb/805781/aac6cd9e-f9c3-4877-9a6c-35aa66d41d6d/orig' class="align-self-center img-fluid" id="banner">
            <!-- <h1> Keep Your Coins Safe </h1> -->
            </div>
            <svg id='sine' viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 50%; width: 100%;"><path d="M-0.35,129.77 C149.99,150.00 399.04,103.13 526.60,145.55 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg>
        </div>



        <div class="container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla.
        </div>

    </div>

</template>


<style scoped>

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


.wave {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #4776E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.body {
    margin: 0%;
    padding: 0%;
}

#sine {
    position: absolute;
    bottom: 0;
}

</style>

<script>
export default {
    components: {
    },

    methods: {
        changeRoute: function(routeName) {
            return this.$router.push({name: routeName});
        }
    }
}
</script>
