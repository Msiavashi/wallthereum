<template>
<!-- Modal -->
<div class="modal fade" id="tutorial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title alert alert-danger" id="exampleModalLongTitle">Read Carefully</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        **Do not lose it!** It cannot be recovered if you lose it.

        **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.

        **Make a backup!** Secure it like the millions of dollars it may one day be worth.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Dismiss</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="onAcceptClicked">Accept</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios'
import Web3 from 'web3';

export default {
    data: ()=> ({
        showTutorial: true
    }),

    methods: {
        onAcceptClicked: function(){
          if (this.$store.password){
            this.createWallet();
            this.$router.push({name: "newWallet"});
          }
        },

        createWallet: function(){
          this.$store.wallet = this.$store.web3.eth.accounts.create();
          console.log(this.$store.wallet);
        }
    }
}
</script>
