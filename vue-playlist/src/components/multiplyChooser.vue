<template>
  <div>
      <div :class="['radio',nowIndex.indexOf(index) !== -1?'click':'']" v-for="(item,index) in chooseData" @click="check(index)">{{item.options}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            nowIndex:[0],
            a:function(){},
        }
    },
    props:{
        chooseData:{
            type:Array,
            defalut:[]
        }
    },
    methods:{
        check(index){
            if(this.nowIndex.indexOf(index) != -1){
                this.nowIndex.splice(this.nowIndex.indexOf(index),1);
            }else{
                this.nowIndex.push(index)
            }
            let nowObj = this.nowIndex.map((item,index)=>{
                return this.chooseData[index]
            })
            this.$emit('onChange',nowObj)
        }
    }
}
</script>

<style>

</style>
