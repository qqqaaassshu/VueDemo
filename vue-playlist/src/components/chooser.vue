<template>
  <div>
      <div :class="['radio',index == nowIndex?'click':'' ]" v-for="(item,index) in chooseData" @click="check(index)">{{item.options}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            nowIndex:0
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
           this.nowIndex = index
           this.$emit('onChange',this.chooseData[index])
        }
    }
}
</script>

<style>

</style>
