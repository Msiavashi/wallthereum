<template>
<table class="table table-condensed" style="border-collapse:collapse;">
    <thead>
        <tr>
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
        </tr>
    </thead>
    <tbody>
        <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
            <td>1</td>
            <td>05 May 2013</td>
            <td>Credit Account</td>
            <td class="text-success">$150.00</td>
            <td class="text-error"></td>
            <td class="text-success">$150.00</td>
        </tr>
        <tr >
            <td colspan="6" class="hiddenRow"><div class="accordian-body collapse" id="demo1"> Demo Content1 </div> </td>
        </tr>
		
        <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
            <td>2</td>
            <td>05 May 2013</td>
            <td>Credit Account</td>
            <td class="text-success">$11.00</td>
            <td class="text-error"></td>
            <td class="text-success">$161.00</td>
        </tr>
        <tr>
            <td colspan="6" class="hiddenRow"><div id="demo2" class="accordian-body collapse">Demo Content2</div></td>
        </tr>
		
        <tr data-toggle="collapse" data-target="#demo3" class="accordion-toggle">
            <td>3</td>
            <td>05 May 2013</td>
            <td>Credit Account</td>
            <td class="text-success">$500.00</td>
            <td class="text-error"></td>
            <td class="text-success">$661.00</td>
        </tr>
        <tr>
            <td colspan="6"  class="hiddenRow"><div id="demo3" class="accordian-body collapse">Demo Content3</div></td>
        </tr>

        <tr data-toggle="collapse" data-target="#demo4" class="accordion-toggle">
            <td>4</td>
            <td>05 May 2013</td>
            <td>Credit Account</td>
            <td class="text-success">$500.00</td>
            <td class="text-error"></td>
            <td class="text-success">$661.00</td>
        </tr>
        <tr>
            <td colspan="6"  class="hiddenRow"><div id="demo4" class="accordian-body collapse">Demo Content4</div></td>
        </tr>

        <tr data-toggle="collapse" data-target="#demo5" class="accordion-toggle">
            <td>5</td>
            <td>05 May 2013</td>
            <td>Credit Account</td>
            <td class="text-success">$500.00</td>
            <td class="text-error"></td>
            <td class="text-success">$661.00</td>
        </tr>
        <tr>
            <td colspan="6"  class="hiddenRow"><div id="demo5" class="accordian-body collapse">Demo Content5</div></td>
        </tr>		
    </tbody>
</table>
</template>

<script>
export default {
    props: ['address'],
    data(){
        return{
        }
    },

    computed: {
    },

    created: async function(){
        await this.getTransactionsByAccount("*");
        console.log(this.transactions);
    },

    methods: {
        getTransactionsByAccount: async function (myaccount, startBlockNumber, endBlockNumber) {
            let pageSize = 10;
            let transactions = [];
            if (endBlockNumber == null) {
                endBlockNumber = await this.$store.getters.getWeb3.eth.getBlockNumber();
                console.log("Using endBlockNumber: " + endBlockNumber);
            }
            if (startBlockNumber == null) {
                startBlockNumber = endBlockNumber - 10;
                console.log("Using startBlockNumber: " + startBlockNumber);
            }
            console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);
                for (var i = startBlockNumber; i <= endBlockNumber; i++, pageSize--) {
                    if (pageSize >= 0){
                        if (i % 1000 == 0) {
                        console.log("Searching block " + i);
                        }
                        var block = await this.$store.getters.getWeb3.eth.getBlock(i, true);
                        if (block != null && block.transactions != null) {
                        block.transactions.forEach( function(e) {
                            if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
                                let txn = {
                                    txnHash: e.hash,
                                    nonce: e.nonce,
                                    blockHash: e.blockHash,
                                    blockNumber: e.blockNumber,
                                    transactionIndex: e.transactionIndex,
                                    from: e.from,
                                    to: e.to,
                                    value: e.value,
                                    time: block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString(),
                                    gasPrice: e.gasPrice,
                                    gas: e.gas,
                                    input: e.input
                                }
                            transactions.push(txn);
                            // console.log("  tx hash          : " + e.hash + "\n"
                            //     + "   nonce           : " + e.nonce + "\n"
                            //     + "   blockHash       : " + e.blockHash + "\n"
                            //     + "   blockNumber     : " + e.blockNumber + "\n"
                            //     + "   transactionIndex: " + e.transactionIndex + "\n"
                            //     + "   from            : " + e.from + "\n" 
                            //     + "   to              : " + e.to + "\n"
                            //     + "   value           : " + e.value + "\n"
                            //     + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
                            //     + "   gasPrice        : " + e.gasPrice + "\n"
                            //     + "   gas             : " + e.gas + "\n"
                            //     + "   input           : " + e.input);
                            }
                        })
                        }
                    }
                }
            return transactions;
        }
    }
}
</script>

<style scoped>
.table tr {
    cursor: pointer;
}
.hiddenRow {
    padding: 0 4px !important;
    background-color: #eeeeee;
    font-size: 13px;
}
</style>


