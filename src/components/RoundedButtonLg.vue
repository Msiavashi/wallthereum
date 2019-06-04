<template>
    <button type="button" class="btn btn-change btn-round-lg">{{text}}</button>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>

.btn-change{
    -webkit-transition: all 0.5s ease-in-out;
}
.btn-change:hover:enabled{
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

