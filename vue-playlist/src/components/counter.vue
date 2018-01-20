<template>
  <div class="count">
      <div class="minus" @click="minus">-</div>
      <div><input type="text" v-model="counter" @change="checkCount"></div>
      <div class="add" @click="add">+</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter:this.counterConfig.min
        }
    },
    props:{
        counterConfig:{
            type:Object,
            defalut:{
                max:1000,
                min:10
            }
        }
    },
    methods:{
        minus(){
            if(this.counter>this.counterConfig.min){
                this.counter--
            }
        },
        add(){
            if(this.counter<this.counterConfig.max){
                this.counter++
            }
        },
        checkCount(){
            if(/[\D]/g.test(this.counter)){
                this.counter = this.counter.replace(/[\D]/g,'')
            }
            if(this.counter>this.counterConfig.max){
                this.counter = this.counterConfig.max
            }else if(this.counter<this.counterConfig.min){
                this.counter=this.counterConfig.min
            }
        }
    },
    watch:{
        counter(){
            this.$emit('onChange',this.counter)
        }
    }
    
}
</script>

<style>
.count{
    display:inline-block;
    height:24px;
    border:1px solid #eee;
}
.count div{
    float:left;
    height:24px;
    line-height:24px;
    cursor: pointer;
}
.minus{
    width:24px;
    text-align:center;
    border-right:1px solid #eee;
}
input{
    width:30px;
    height:21px;
    padding:1px 5px;
    border:none;
    outline:none;
}
.add{
    width:24px;
    text-align:center;
    border-left:1px solid #eee;
}
</style>
