<template>
 <!-- Modal -->
<div class="modal fade" id="readMoreModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">{{title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" v-html="html">
          <!-- html content will load -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Done</button> -->
      </div>
    </div>
  </div>
</div>   
</template>

<script>
export default {
    props: ["title", "html"]
}
</script>

<style scoped>

</style>

